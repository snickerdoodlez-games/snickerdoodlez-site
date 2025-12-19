
import React, { useState, useEffect, useRef } from 'react';
import { CSVRow, TileData, THEMES, Theme, SUCCESS_PHRASES, getHexFromColorClass } from '../types';
import Tile from './Tile';
import { getWordsFromCategory } from '../services/csvData';
import { audio } from '../services/audioService';
import { updateStats } from '../services/storage';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import NextLevelButton from './NextLevelButton';
import DebugMenu from './DebugMenu';

interface Level2Props {
  csvData: CSVRow[];
  onExit: () => void;
  onComplete: (stats?: any) => void;
  onGameOver: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  debugMode?: boolean;
  onOpenAnimLab?: () => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
}

const Level2_Filter: React.FC<Level2Props> = ({ 
    csvData, onExit, onComplete, onGameOver, levelIndex, 
    onThemeChange, hintsEnabled, debugMode, onOpenAnimLab, onOpenSettings 
}) => {
  const [targetCategory, setTargetCategory] = useState<CSVRow | null>(null);
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [initError, setInitError] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [foundCount, setFoundCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(21);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHintPrompt, setShowHintPrompt] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [moves, setMoves] = useState(0);
  const startTimeRef = useRef(Date.now());
  const [history, setHistory] = useState<{ tiles: TileData[], mistakes: number, foundCount: number }[]>([]);
  const lastActionTime = useRef(Date.now());
  const particleRef = useRef<ParticleHandle>(null);
  const tileContainerRef = useRef<HTMLDivElement>(null);
  const ROUNDS_TO_PLAY = 6;
  const MISTAKE_LIMIT = 5;

  useEffect(() => { audio.resume(); startTimeRef.current = Date.now(); }, []);

  useEffect(() => {
    if (!hintsEnabled || isLevelComplete || isTransitioning || hintsUsed >= 1) return;
    const interval = setInterval(() => {
        const elapsed = Date.now() - lastActionTime.current;
        if (elapsed > 90000 && !showHintPrompt) setShowHintPrompt(true);
    }, 5000); 
    return () => clearInterval(interval);
  }, [hintsEnabled, isLevelComplete, isTransitioning, hintsUsed, showHintPrompt]);

  useEffect(() => {
    if (isTransitioning || isLevelComplete || !targetCategory) return;
    if (timeLeft <= 0) return;
    const timer = setInterval(() => { setTimeLeft(prev => prev - 1); }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isTransitioning, isLevelComplete, targetCategory]);

  useEffect(() => {
      if (isLevelComplete) {
          const timeSpent = Date.now() - startTimeRef.current;
          updateStats({ levelsCompleted: 1, totalTimeMs: timeSpent, totalMoves: moves });
      }
  }, [isLevelComplete]);

  const saveToHistory = () => {
      setHistory(prev => [...prev.slice(-10), { tiles: JSON.parse(JSON.stringify(tiles)), mistakes, foundCount }]);
  };

  const initRound = (immediate = false) => {
    if (isLevelComplete) return;
    const setupRound = () => {
      const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
      setCurrentTheme(randomTheme);
      if (onThemeChange) onThemeChange(randomTheme.solvedColors);
      setFoundCount(0); setHintsUsed(0); setShowHintPrompt(false); setHistory([]); lastActionTime.current = Date.now();
      const levelPenalty = Math.floor(levelIndex / 3);
      const newTime = Math.max(10, 21 - roundsPlayed - levelPenalty);
      setTimeLeft(newTime);
      const validCategories = csvData.filter(c => c.words.length >= 6);
      if (validCategories.length === 0) { setInitError(true); if (!immediate) setIsTransitioning(false); return; }
      const target = validCategories[Math.floor(Math.random() * validCategories.length)];
      setTargetCategory(target);
      const correctWords = getWordsFromCategory(target, 6);
      const usedWords = new Set<string>(correctWords); 
      const otherCategories = csvData.filter(c => c.id !== target.id);
      let wrongWords: string[] = []; let attempts = 0;
      if (otherCategories.length > 0) {
        while (wrongWords.length < 14 && attempts < 1000) {
          attempts++; const randCat = otherCategories[Math.floor(Math.random() * otherCategories.length)];
          if (randCat && randCat.words.length > 0) {
             const word = randCat.words[Math.floor(Math.random() * randCat.words.length)];
             if (!usedWords.has(word)) { wrongWords.push(word); usedWords.add(word); }
          }
        }
      }
      while (wrongWords.length < 14) wrongWords.push(`EXTRA-${wrongWords.length}`);
      const combined = [...correctWords.map(w => ({ w, type: 'correct' })), ...wrongWords.map(w => ({ w, type: 'wrong' }))].sort(() => 0.5 - Math.random());
      const newTiles: TileData[] = combined.map(item => ({ id: Math.random().toString(36).substr(2, 9), word: item.w, categoryId: item.type === 'correct' ? target.id : 'wrong', categoryName: item.type === 'correct' ? target.name : 'UNKNOWN', status: 'neutral' }));
      setTiles(newTiles); setMistakes(0); setIsTransitioning(false);
    };
    if (immediate) { setFeedbackMsg(null); setInitError(false); setupRound(); }
    else { setIsTransitioning(true); setFeedbackMsg(null); setInitError(false); setTimeout(setupRound, 600); }
  };

  useEffect(() => { if (csvData && csvData.length > 0) initRound(true); else { const timer = setTimeout(() => { if (!csvData || csvData.length === 0) setInitError(true); }, 3000); return () => clearTimeout(timer); } }, [csvData]);

  const handleRoundEnd = (success: boolean) => {
      if (isLevelComplete) return;
      const nextRound = roundsPlayed + 1; setRoundsPlayed(nextRound);
      
      if (targetCategory) {
          updateStats({ rowsSolved: 1, solvedCategoryIds: [targetCategory.id] });
      }

      if (nextRound >= ROUNDS_TO_PLAY) {
        audio.playWin(); 
        setIsLevelComplete(true);
      } else {
        if (success) { 
            audio.playRowSolved(); 
        }
        // Round completion delay without blocking overlay
        setTimeout(() => initRound(false), 1200);
      }
  };

  const handleTileClick = (id: string) => {
    if (isTransitioning || isLevelComplete || isReviewing) return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    const el = document.querySelector(`[data-tile-id="${id}"]`); let px = 0, py = 0;
    if (el) { const rect = el.getBoundingClientRect(); px = rect.left + rect.width/2; py = rect.top + rect.height/2; }
    const tileIndex = tiles.findIndex(t => t.id === id); if (tileIndex === -1) return;
    const tile = tiles[tileIndex]; if (!tile) return;
    if (tile.status !== 'neutral' && tile.status !== 'hint') return;
    saveToHistory();
    setMoves(prev => prev + 1);
    if (tile.categoryId === targetCategory?.id) {
      audio.playCorrect(); const newFoundCount = foundCount + 1; setFoundCount(newFoundCount);
      const colorIndex = (newFoundCount - 1) % currentTheme.solvedColors.length; const themeColor = currentTheme.solvedColors[colorIndex];
      const cssColor = getHexFromColorClass(themeColor); if (el) particleRef.current?.explode(px, py, cssColor);
      const newTiles = [...tiles]; newTiles[tileIndex] = { ...tile, status: 'correct-preview', color: themeColor }; setTiles(newTiles);
      if (newFoundCount === 6) { handleRoundEnd(mistakes === 0); }
    } else {
      audio.playError(); if (el) particleRef.current?.explode(px, py, '#ef4444');
      const newTiles = [...tiles]; newTiles[tileIndex] = { ...tile, status: 'wrong' }; setTiles(newTiles);
      setMistakes(prev => {
        const newVal = prev + 1; setTotalMistakes(prevT => prevT + 1);
        if (newVal >= MISTAKE_LIMIT) {
          setIsTransitioning(true);
          setTimeout(() => {
             setTiles(currentTiles => {
               let revealCount = foundCount;
               return currentTiles.map(t => {
                 if (t.categoryId === targetCategory?.id && t.status !== 'correct-preview') { revealCount++; const colorIndex = (revealCount - 1) % currentTheme.solvedColors.length; return { ...t, status: 'correct-preview', color: currentTheme.solvedColors[colorIndex] } as TileData; }
                 return t;
               });
             });
          }, 200);
          handleRoundEnd(false);
        } else { setTimeout(() => { setTiles(currentTiles => currentTiles.map(t => t.id === id && t.status === 'wrong' ? { ...t, status: 'neutral' } : t)); }, 800); }
        return newVal;
      });
    }
  };

  const handleHint = () => {
    if (hintsUsed >= 1) return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    const correctHidden = tiles.filter(t => t.categoryId === targetCategory?.id && (t.status === 'neutral' || t.status === 'hint'));
    if (correctHidden.length === 0) return;
    audio.playRowSolved(); setHintsUsed(prev => prev + 1); updateStats({ hintsUsed: 1 });
    let currentFound = foundCount;
    setTiles(prev => prev.map(t => {
        if (t.categoryId === targetCategory?.id && (t.status === 'neutral' || t.status === 'hint')) { currentFound++; const colorIndex = (currentFound - 1) % currentTheme.solvedColors.length; return { ...t, status: 'correct-preview', color: currentTheme.solvedColors[colorIndex] } as TileData; }
        return t;
    }));
    setFoundCount(currentFound);
    setTimeout(() => { handleRoundEnd(mistakes === 0); }, 800);
  };

  const handleRefuseHint = () => { setShowHintPrompt(false); updateStats({ hintsRefused: 1 }); };
  
  const handleNextLevelClick = () => {
    setIsTransitioning(true);
    setTiles(prev => prev.map(t => ({ ...t, status: 'exiting' })));
    setTimeout(() => {
        onComplete({ mode: 'MIND MATCH', mistakes: totalMistakes });
    }, 500);
  };

  const debugSolveOne = () => {
      saveToHistory();
      const nextCorrect = tiles.find(t => t.categoryId === targetCategory?.id && t.status === 'neutral');
      if (nextCorrect) {
          const newFoundCount = foundCount + 1; setFoundCount(newFoundCount); const colorIndex = (newFoundCount - 1) % currentTheme.solvedColors.length;
          setTiles(prev => prev.map(t => t.id === nextCorrect.id ? { ...t, status: 'correct-preview', color: currentTheme.solvedColors[colorIndex] } : t));
          if (newFoundCount === 6) handleRoundEnd(mistakes === 0);
      }
  };

  const debugSolvePuzzle = () => {
      saveToHistory(); let currentFound = foundCount;
      const newTiles = tiles.map(t => { if (t.categoryId === targetCategory?.id && t.status !== 'correct-preview') { currentFound++; const colorIndex = (currentFound - 1) % currentTheme.solvedColors.length; return { ...t, status: 'correct-preview', color: currentTheme.solvedColors[colorIndex] } as TileData; } return t; });
      setTiles(newTiles); setTimeout(() => handleRoundEnd(true), 500);
  };

  const debugUndo = () => { if (history.length > 0) { const prev = history[history.length - 1]; setTiles(prev.tiles); setMistakes(prev.mistakes); setFoundCount(prev.foundCount); setHistory(h => h.slice(0, h.length - 1)); audio.playSelect(); } };

  if (initError) return <div className="flex flex-col items-center justify-center h-[50vh] text-white animate-fade-in"><p className="mb-4 text-red-400 font-righteous text-xl">UNABLE TO GENERATE LEVEL DATA.</p><button onClick={() => window.location.reload()} className="px-6 py-2 bg-white text-black font-bold rounded-full">RETRY</button></div>;

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto h-full px-4 relative select-none overflow-hidden pb-1">
       <ParticleOverlay ref={particleRef} />
       {debugMode && <DebugMenu onMainMenu={onExit} onSolveOne={debugSolveOne} onSolvePuzzle={debugSolvePuzzle} onUndo={debugUndo} />}
       {showHintPrompt && (
          <div className="absolute inset-0 z-[90] flex items-center justify-center animate-fade-in bg-black/60">
              <div className="bg-zinc-900 border-4 border-neon-blue rounded-2xl p-6 flex flex-col items-center gap-6 shadow-[0_0_40px_rgba(0,229,255,0.3)] animate-pop w-[90%] max-w-sm">
                  <span className="text-white font-black font-oswald text-2xl uppercase tracking-widest text-center drop-shadow-md">NEED SOME HELP?</span>
                  <div className="flex gap-4 w-full">
                      <button onClick={handleHint} className="flex-1 bg-neon-blue text-black hover:bg-white hover:scale-105 active:scale-95 transition-all py-3 rounded-xl font-black uppercase font-oswald text-xl shadow-lg">YES</button>
                      <button onClick={handleRefuseHint} className="flex-1 bg-zinc-800 border-2 border-zinc-600 text-zinc-400 hover:text-white hover:border-white hover:bg-zinc-700 hover:scale-105 active:scale-95 transition-all py-3 rounded-xl font-bold uppercase font-oswald text-xl">NO</button>
                  </div>
              </div>
          </div>
       )}
       {isLevelComplete && !isReviewing && (
        <div className={`absolute inset-0 z-50 flex items-center justify-center animate-fade-in bg-black/80`}>
           <div className={`relative z-10 flex flex-col items-center min-w-[300px] text-center animate-celebrate`}>
                <NextLevelButton onClick={handleNextLevelClick} levelIndex={levelIndex} />
                <div onClick={() => setIsReviewing(true)} className="mt-4 text-white font-oswald uppercase tracking-widest text-sm hover:text-cyan-400 cursor-pointer animate-pulse transition-colors uppercase">TAP HERE TO REVIEW SOLVED PUZZLE</div>
          </div>
        </div>
      )}
       <div className="w-full mb-1 shrink-0 flex flex-col items-end gap-1 py-1 h-auto relative pr-4">
           <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-4xl font-black text-deco-gold font-righteous uppercase tracking-widest text-right drop-shadow-md leading-none">MIND MATCH</h2>
                {isReviewing ? (
                    <button onClick={handleNextLevelClick} className="px-3 py-1 bg-neon-green text-black font-bold font-oswald uppercase rounded shadow-lg animate-pulse hover:scale-105 transition-transform uppercase">NEXT LEVEL &gt;&gt;</button>
                ) : (
                    <button onClick={() => onOpenSettings?.([{name: targetCategory?.name || '', isSolved: false}])} className="p-1 rounded-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 hover:border-white transition-all text-zinc-300 hover:text-white active:animate-spin" title="Settings">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a7.75 7.75 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                )}
           </div>
           
           <div className="flex w-full items-center justify-end pl-2">
                <div className="flex items-center gap-1.5 mt-1 justify-end flex-wrap max-w-full">
                    <div className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                        <span className="text-zinc-500 font-oswald text-[9px] mr-1.5 tracking-wider uppercase">TIMER</span>
                        <span className={`font-bold font-oswald text-xs ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>00:{timeLeft.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                        <span className="text-zinc-500 font-oswald text-[9px] mr-1.5 tracking-wider uppercase">MISTAKES</span>
                        <span className={`font-bold font-oswald text-xs ${mistakes >= MISTAKE_LIMIT - 1 ? 'text-red-500' : 'text-white'}`}>{mistakes}/{MISTAKE_LIMIT}</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                        <span className="text-zinc-500 font-oswald text-[9px] mr-1.5 tracking-wider uppercase">ROUND</span>
                        <span className="text-white font-bold font-oswald text-xs">{roundsPlayed + 1}/{ROUNDS_TO_PLAY}</span>
                    </div>
                </div>
           </div>
      </div>
      <div className="relative w-full flex-1 flex flex-col py-1 min-h-0" ref={tileContainerRef}>
        {feedbackMsg && <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none animate-pop"><div className="bg-black/80 px-12 py-4 rounded-xl border border-white text-white font-black text-2xl tracking-widest shadow-2xl font-oswald uppercase">{feedbackMsg}</div></div>}
        <div className={`w-full flex-1 grid grid-cols-4 sm:grid-cols-5 grid-rows-5 sm:grid-rows-4 gap-1.5 transition-all duration-500 transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {tiles.map((tile) => (<div key={tile.id} className="relative h-full"><Tile data={tile} data-tile-id={tile.id} onClick={handleTileClick} gradientClass={currentTheme.gradient} /></div>))}
        </div>
      </div>

      {/* Target Category Persistent Tab - Pinned above footer */}
      <div className="w-full flex-shrink-0 flex items-center justify-center z-[70] min-h-[50px] pointer-events-none py-2">
          {targetCategory && (
            <div className="animate-pop bg-black text-white px-6 py-2 rounded-t-xl text-lg md:text-xl font-black uppercase tracking-[0.2em] leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-12px_24px_rgba(0,0,0,0.8)] font-oswald drop-shadow-md">
                {targetCategory.name}
            </div>
          )}
      </div>
    </div>
  );
};
export default Level2_Filter;
