import React, { useState, useEffect, ReactNode, useMemo, Suspense } from 'react';
import { GameMode, CSVRow, THEMES } from './types';
import { getConsolidatedData, parseRawCSV } from './services/csvData';
import { getSynonymData } from './services/synonymData';
import { getRhymeData } from './services/rhymeData';
import { GLOBAL_CSV_DATA } from './services/globalCSV';
import { getSavedLevel, saveLevel, isTutorialSeen, markTutorialSeen, isLevel2TutorialSeen, markLevel2TutorialSeen } from './services/storage';
import { audio } from './services/audioService';
import { LevelMenu } from './components/LevelMenu';
import SettingsMenu from './components/SettingsMenu';
import StatsOverlay from './components/StatsOverlay';
import TutorialOverlay from './components/TutorialOverlay';
import AnimationLab from './components/AnimationLab';
import { AdMob } from '@capacitor-community/admob';

const Level1_Standard = React.lazy(() => import('./components/Level1_Standard'));
const Level2_Filter = React.lazy(() => import('./components/Level2_Filter'));
const Level1_Emoji = React.lazy(() => import('./components/Level1_Emoji'));
const Level3_Infinite = React.lazy(() => import('./components/Level3_Cascading'));
const Level4_Translations = React.lazy(() => import('./components/Level4_Translations'));
const Level5_Group = React.lazy(() => import('./components/Level5_Group'));

const ADMOB_CONFIG = {
  APP_ID: "ca-app-pub-4096368901415767~5414939789",
  BANNER_ID: "ca-app-pub-4096368901415767/2019330695",
  INTERSTITIAL_ID: "ca-app-pub-4096368901415767/1153913539"
};

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Updated ErrorBoundary with explicit property definitions to resolve TypeScript inheritance visibility errors
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Fix: Explicitly define props to resolve "Property 'props' does not exist on type 'ErrorBoundary'"
  props: ErrorBoundaryProps;
  // Explicitly initialize state property to fix "Property 'state' does not exist on type 'ErrorBoundary'"
  state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Fix: Explicitly assigning props to handle strict visibility/inheritance checks in this environment
    this.props = props;
  }
  
  // Static lifecycle method to catch rendering errors and update state
  static getDerivedStateFromError(_: any): ErrorBoundaryState { 
    return { hasError: true }; 
  }
  
  // Lifecycle method for logging errors
  componentDidCatch(error: any, errorInfo: any) { 
    console.error("Game crashed:", error, errorInfo); 
  }
  
  render() {
    // Correctly using this.state.hasError which is now properly defined
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center relative z-50">
          <h1 className="text-3xl font-bold mb-4 font-oswald text-red-500 uppercase">Something went wrong.</h1>
          <button onClick={() => window.location.reload()} className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform uppercase">Reload Game</button>
        </div>
      );
    }
    
    // Correctly using this.props.children which is now properly defined
    return this.props.children;
  }
}

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
);

const BASE_WEIGHTS: Partial<Record<GameMode, number>> = {
  [GameMode.CLASSIC]: 30, 
  [GameMode.LEVEL_3_INFINITE]: 15,
  [GameMode.LEVEL_5_GROUP]: 15,   
  [GameMode.LEVEL_SYNONYMS]: 10,
  [GameMode.LEVEL_TRANSLATION]: 10,
  [GameMode.LEVEL_EMOJI]: 10,
  [GameMode.LEVEL_4_THEMED]: 5,
  [GameMode.LEVEL_2_FILTER]: 5,
};

const App: React.FC = () => {
  const [mode, setMode] = useState<GameMode>(GameMode.MENU);
  const [levelIndex, setLevelIndex] = useState(1); 
  const [csvData, setCsvData] = useState<CSVRow[]>([]);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showAnimationLab, setShowAnimationLab] = useState(false);
  const [activeCategories, setActiveCategories] = useState<{name: string, isSolved: boolean}[]>([]);
  
  const [debugMode, setDebugMode] = useState(() => {
      try { return localStorage.getItem('wpm_debug_mode') === 'true'; } catch { return false; }
  });
  
  const [modeHistory, setModeHistory] = useState<GameMode[]>(() => {
      try {
          const saved = localStorage.getItem('wpm_mode_history');
          return saved ? JSON.parse(saved) : [];
      } catch { return []; }
  });

  const [enabledModes, setEnabledModes] = useState<GameMode[]>([
    GameMode.CLASSIC, 
    GameMode.LEVEL_3_INFINITE,
    GameMode.LEVEL_4_THEMED,
    GameMode.LEVEL_5_GROUP,
    GameMode.LEVEL_EMOJI,
    GameMode.LEVEL_SYNONYMS,
    GameMode.LEVEL_TRANSLATION,
    GameMode.LEVEL_2_FILTER,
  ]);

  const synonymData = useMemo(() => getSynonymData(), []);
  const rhymeData = useMemo(() => getRhymeData(), []);
  const globalData = useMemo(() => {
      return parseRawCSV(GLOBAL_CSV_DATA);
  }, []);
  
  async function initializeAdMob() {
    try { await AdMob.initialize({}); } catch (e) { console.error("AdMob initialize failed", e); }
  }

  async function showBannerAd() {
    const adOptions = { adId: ADMOB_CONFIG.BANNER_ID, adSize: 'BANNER', position: 'BOTTOM_CENTER', margin: 0 };
    try { await AdMob.showBanner(adOptions as any); console.log('Banner ad is showing'); } catch (e) { console.error('Error showing banner ad:', e); }
  }

  useEffect(() => {
    async function setupAds() { await initializeAdMob(); await showBannerAd(); }
    setupAds();
  }, []);

  useEffect(() => {
    setCsvData(getConsolidatedData());
    setLevelIndex(getSavedLevel());
  }, []);

  useEffect(() => { localStorage.setItem('wpm_debug_mode', debugMode.toString()); }, [debugMode]);
  
  useEffect(() => {
      localStorage.setItem('wpm_mode_history', JSON.stringify(modeHistory));
  }, [modeHistory]);

  const getNextRandomMode = (currentHistory: GameMode[]): GameMode => {
    if (currentHistory.length < 2) return GameMode.CLASSIC;

    const weightedPool = enabledModes.filter(m => BASE_WEIGHTS[m] !== undefined);
    if (weightedPool.length === 0) return GameMode.CLASSIC;

    const isClassicFamily = (m: GameMode) => 
        m === GameMode.CLASSIC || m === GameMode.LEVEL_4_THEMED || m === GameMode.LEVEL_SYNONYMS || m === GameMode.LEVEL_TRANSLATION;

    const isComplexSpecial = (m: GameMode) => [
        GameMode.LEVEL_3_INFINITE, 
        GameMode.LEVEL_5_GROUP,
        GameMode.LEVEL_EMOJI,
        GameMode.LEVEL_2_FILTER
    ].includes(m);

    const lastMode = currentHistory[currentHistory.length - 1];
    const last2 = currentHistory.slice(-2);
    
    const classicCount = last2.filter(m => isClassicFamily(m)).length;
    const isClassicSpam = classicCount >= 2;

    if (lastMode && isComplexSpecial(lastMode) && !isClassicSpam) {
        return GameMode.CLASSIC;
    }

    let candidates = weightedPool;
    if (isClassicSpam) {
        candidates = weightedPool.filter(m => !isClassicFamily(m));
    }

    if (candidates.length === 0) candidates = weightedPool;

    let totalWeight = 0;
    candidates.forEach(m => totalWeight += (BASE_WEIGHTS[m] || 0));

    let random = Math.random() * totalWeight;
    for (const m of candidates) {
        const w = BASE_WEIGHTS[m] || 0;
        if (random < w) return m;
        random -= w;
    }
    return candidates[0];
  };

  const shouldShowTutorialForMode = (targetMode: GameMode): boolean => {
      return !isTutorialSeen();
  };

  const handleTutorialComplete = () => {
    setShowTutorial(false);
    markTutorialSeen();
  };

  const triggerInterstitial = async () => {
      try { await AdMob.prepareInterstitial({ adId: ADMOB_CONFIG.INTERSTITIAL_ID, isTesting: true }); await AdMob.showInterstitial(); } catch (e) { console.error("Interstitial Ad Error", e); }
  };

  const handleLevelComplete = (stats?: any) => {
    const nextLevel = levelIndex + 1;
    setLevelIndex(nextLevel);
    saveLevel(nextLevel);
    
    const nextMode = getNextRandomMode([...modeHistory, mode]);
    setModeHistory(prev => [...prev, mode]);
    setMode(nextMode);
    
    if (nextLevel % 3 === 0) triggerInterstitial();
  };

  const toggleMusic = () => {
    const newState = audio.toggleMusic();
    setIsMusicOn(newState);
  };

  const resetAllProgress = () => {
    if (window.confirm("ARE YOU SURE? THIS WILL RESET ALL PROGRESS AND STATS.")) {
        localStorage.clear();
        window.location.reload();
    }
  };

  const handleOpenSettings = (cats: {name: string, isSolved: boolean}[]) => {
      setActiveCategories(cats);
      setShowSettings(true);
  };

  const renderContent = () => {
    if (showAnimationLab) return <AnimationLab onExit={() => setShowAnimationLab(false)} />;
    
    switch (mode) {
      case GameMode.MENU:
        return (
          <LevelMenu 
            onStart={() => {
              const nextMode = getNextRandomMode(modeHistory);
              setMode(nextMode);
              if (shouldShowTutorialForMode(nextMode)) setShowTutorial(true);
            }}
            onSettings={() => setShowSettings(true)}
            onStats={() => setShowStats(true)}
            lastLevel={levelIndex}
          />
        );
      case GameMode.CLASSIC:
      case GameMode.LEVEL_4_THEMED:
      case GameMode.LEVEL_SYNONYMS:
      case GameMode.LEVEL_RHYMES:
      case GameMode.SPEED_ROUND:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Level1_Standard 
                csvData={
                    mode === GameMode.LEVEL_SYNONYMS ? synonymData : 
                    mode === GameMode.LEVEL_RHYMES ? rhymeData : 
                    csvData
                }
                mode={mode}
                levelIndex={levelIndex}
                onComplete={handleLevelComplete}
                onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled}
                onOpenSettings={handleOpenSettings}
                debugMode={debugMode}
            />
          </Suspense>
        );
      case GameMode.LEVEL_TRANSLATION:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Level4_Translations 
                csvData={globalData}
                levelIndex={levelIndex}
                onComplete={handleLevelComplete}
                onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled}
                onOpenSettings={handleOpenSettings}
                debugMode={debugMode}
            />
          </Suspense>
        );
      case GameMode.LEVEL_2_FILTER:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Level2_Filter 
                csvData={csvData}
                levelIndex={levelIndex}
                onComplete={handleLevelComplete}
                onGameOver={() => setMode(GameMode.MENU)}
                onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled}
                debugMode={debugMode}
                onOpenSettings={handleOpenSettings}
            />
          </Suspense>
        );
      case GameMode.LEVEL_EMOJI:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Level1_Emoji 
                levelIndex={levelIndex}
                onComplete={handleLevelComplete}
                onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled}
                debugMode={debugMode}
                onOpenSettings={handleOpenSettings}
            />
          </Suspense>
        );
      case GameMode.LEVEL_3_INFINITE:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Level3_Infinite 
                csvData={csvData}
                levelIndex={levelIndex}
                onComplete={handleLevelComplete}
                onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled}
                debugMode={debugMode}
                onOpenSettings={handleOpenSettings}
            />
          </Suspense>
        );
      case GameMode.LEVEL_5_GROUP:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Level5_Group 
                csvData={csvData}
                levelIndex={levelIndex}
                onComplete={handleLevelComplete}
                onExit={() => setMode(GameMode.MENU)}
                hintsEnabled={hintsEnabled}
                debugMode={debugMode}
                onOpenSettings={handleOpenSettings}
            />
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <ErrorBoundary>
      {/* Root container fixed to viewport, prevents scrolling with overflow-hidden */}
      <div className="fixed inset-0 bg-black text-white font-sans overflow-hidden flex flex-col">
        {/* Main Content Area - Removing h-full here to allow flex-1 to dynamically compute height available between header and footer */}
        <div className="flex-1 relative overflow-hidden">
            {renderContent()}
        </div>

        {/* AdMob Banner Reserved Space - Static height ensures no layout shift, footer pinned to bottom */}
        <footer className="w-full bg-black shrink-0 border-t border-zinc-900 h-[60px] flex items-center justify-center relative z-50">
             <div className="text-[8px] text-zinc-800 font-oswald tracking-[0.3em] uppercase opacity-20">Sponsored Content</div>
        </footer>

        {showSettings && (
          <SettingsMenu 
            isOpen={showSettings}
            onClose={() => {
                setShowSettings(false);
                setActiveCategories([]);
            }}
            onMainMenu={() => {
                setShowSettings(false);
                setMode(GameMode.MENU);
            }}
            isMusicOn={isMusicOn}
            toggleMusic={toggleMusic}
            enabledModes={enabledModes}
            toggleMode={(m) => {
                setEnabledModes(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]);
            }}
            hintsEnabled={hintsEnabled}
            setHintsEnabled={setHintsEnabled}
            onShowTutorial={() => {
                setShowSettings(false);
                setShowTutorial(true);
            }}
            onResetProgress={resetAllProgress}
            debugMode={debugMode}
            setDebugMode={setDebugMode}
            categories={activeCategories}
          />
        )}

        {showStats && <StatsOverlay onClose={() => setShowStats(false)} />}
        
        {showTutorial && (
          <TutorialOverlay 
            mode={mode} 
            onComplete={handleTutorialComplete} 
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;