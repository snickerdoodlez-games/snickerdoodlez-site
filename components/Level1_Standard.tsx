
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CSVRow, TileData, GameMode, THEMES, Theme, SUCCESS_PHRASES, EXIT_ANIMATIONS, getHexFromColorClass } from '../types';
import Tile from './Tile';
import { getRandomCategories, getThemedCategories } from '../services/csvData';
import { audio } from '../services/audioService';
import { updateStats } from '../services/storage';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import NextLevelButton from './NextLevelButton';
import CategoryListOverlay from './CategoryListOverlay';
import DebugMenu from './DebugMenu';

interface Level1Props {
  csvData: CSVRow[];
  onComplete: (stats?: any) => void;
  onExit: () => void;
  mode: GameMode; 
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  timeLimit?: number; 
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
  debugMode?: boolean;
  onOpenAnimLab?: () => void;
}

const Level1_Standard: React.FC<Level1Props> = ({ 
  csvData, onComplete, onExit, mode, levelIndex, 
  onThemeChange, hintsEnabled, timeLimit, onOpenSettings, 
  debugMode, onOpenAnimLab 
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [themeName, setThemeName] = useState<string>("");
  const [initError, setInitError] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHintPrompt, setShowHintPrompt] = useState(false);
  const [isExitingLevel, setIsExitingLevel] = useState(false);
  const [exitAnimClass, setExitAnimClass] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [moves, setMoves] = useState(0);
  const startTimeRef = useRef(Date.now());
  const [history, setHistory] = useState<TileData[][]>([]);
  const [showRhymeIntro, setShowRhymeIntro] = useState(false);
  const [showCategoryOverlay, setShowCategoryOverlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(timeLimit || 0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const lastActionTime = useRef(Date.now());
  const hasInitialized = useRef(false);
  const lastExitIndex = useRef<number>(-1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);

  const targetCategories = useMemo(() => {
      if (tiles.length === 0) return [];
      const cats = new Map<string, { name: string, isSolved: boolean }>();
      tiles.forEach(t => {
          if (!cats.has(t.categoryId)) {
              const catTiles = tiles.filter(tile => tile.categoryId === t.categoryId);
              const isSolved = catTiles.every(tile => tile.status === 'solved' || tile.status === 'exiting');
              cats.set(t.categoryId, { name: t.categoryName, isSolved });
          }
      });
      return Array.from(cats.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [tiles]);

  useEffect(() => {
    if (hasInitialized.current && tiles.length > 0) return;
    if (!csvData || csvData.length === 0) { setIsInitializing(true); return; }
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    setCurrentTheme(randomTheme);
    if (onThemeChange) onThemeChange(randomTheme.solvedColors);
    let candidateCategories: CSVRow[] = [];
    if (mode === GameMode.LEVEL_4_THEMED) {
      const themeData = getThemedCategories(20, csvData);
      candidateCategories = themeData.categories;
      setThemeName(themeData.name);
    } else {
      candidateCategories = getRandomCategories(30, csvData);
      setThemeName("");
    }
    if (candidateCategories.length === 0) { setInitError(true); setIsInitializing(false); return; }
    const newTiles: TileData[] = [];
    const usedWords = new Set<string>();
    const selectedCategories: CSVRow[] = [];
    for (const cat of candidateCategories) {
        if (selectedCategories.length >= 7) break;
        const availableWords = cat.words.filter(w => !usedWords.has(w));
        if (availableWords.length >= 4) {
            const shuffled = [...availableWords].sort(() => 0.5 - Math.random()).slice(0, 4);
            shuffled.forEach(w => {
                usedWords.add(w);
                newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, status: 'neutral' });
            });
            selectedCategories.push(cat);
        }
    }
    setTiles(newTiles.sort(() => 0.5 - Math.random()));
    setHistory([]); setIsComplete(false); setShowNextButton(false); setIsExitingLevel(false); setIsInitializing(false); setHintsUsed(0); setShowHintPrompt(false); setShowCategoryOverlay(false); setIsTimeUp(false); setIsSwapping(false); setIsReviewing(false); setMoves(0);
    if (mode === GameMode.LEVEL_RHYMES) setShowRhymeIntro(true); else setShowRhymeIntro(false);
    if (timeLimit) setTimeLeft(timeLimit);
    lastActionTime.current = Date.now(); startTimeRef.current = Date.now(); hasInitialized.current = true;
  }, [csvData, mode, levelIndex, timeLimit, retryCount, onThemeChange]);

  useEffect(() => { hasInitialized.current = false; }, [levelIndex, mode, retryCount]);

  useEffect(() => {
      if (!timeLimit || isComplete || isExitingLevel || isTimeUp || isInitializing || showRhymeIntro) {
          if (timerRef.current) clearInterval(timerRef.current);
          return;
      }
      timerRef.current = setInterval(() => {
          setTimeLeft(prev => {
              if (prev <= 1) {
                  clearInterval(timerRef.current!); setIsTimeUp(true); audio.playError();
                  return 0;
              }
              return prev - 1;
          });
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timeLimit, isComplete, isExitingLevel, isTimeUp, isInitializing, showRhymeIntro]);

  useEffect(() => {
    if (!hintsEnabled || isComplete || isExitingLevel || isInitializing || hintsUsed >= 1 || isTimeUp || showRhymeIntro) return;
    const interval = setInterval(() => {
        const elapsed = Date.now() - lastActionTime.current;
        if (elapsed > 90000 && !showHintPrompt) setShowHintPrompt(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [hintsEnabled, isComplete, isExitingLevel, isInitializing, hintsUsed, showHintPrompt, isTimeUp, showRhymeIntro]);

  useEffect(() => {
      if (isComplete) {
          const timeSpent = Date.now() - startTimeRef.current;
          updateStats({ levelsCompleted: 1, totalTimeMs: timeSpent, totalMoves: moves });
          const timer = setTimeout(() => { setShowNextButton(true); }, 800);
          return () => clearTimeout(timer);
      } else { setShowNextButton(false); }
  }, [isComplete, moves]);

  const saveToHistory = (currentTiles: TileData[]) => {
      setHistory(prev => { const newHistory = [...prev, JSON.parse(JSON.stringify(currentTiles))]; return newHistory.slice(-10); });
  };

  const triggerParticles = (ids: string[], colorClass: string) => {
    if (!particleRef.current) return;
    const cssColor = getHexFromColorClass(colorClass);
    ids.forEach(id => {
      const el = tileRefs.current.get(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        particleRef.current?.explode(x, y, cssColor);
      }
    });
  };

  const checkMatches = useCallback((currentTiles: TileData[]) => {
    if (isInitializing) return;
    const gridWidth = 4;
    const rowCount = currentTiles.length / gridWidth;
    let newSolvedCount = 0;
    const updatedTiles = [...currentTiles];
    let changed = false;
    for (let r = 0; r < rowCount; r++) {
      const startIndex = r * gridWidth;
      const rowTiles = updatedTiles.slice(startIndex, startIndex + gridWidth);
      if (!rowTiles[0] || rowTiles[0]?.status === 'solved') { if (rowTiles[0]?.status === 'solved') newSolvedCount++; continue; }
      const firstCat = rowTiles[0].categoryId;
      const allMatch = rowTiles.every(t => t && t.categoryId === firstCat);
      if (allMatch) {
        changed = true; newSolvedCount++; audio.playRowSolved();
        updateStats({ rowsSolved: 1, solvedCategoryIds: [firstCat] });
        const color = currentTheme.solvedColors[r % currentTheme.solvedColors.length];
        const solvedIds = rowTiles.map(t => t.id);
        triggerParticles(solvedIds, color);
        for (let i = startIndex; i < startIndex + gridWidth; i++) updatedTiles[i] = { ...updatedTiles[i], status: 'solved', color };
      }
    }
    if (changed) { setTiles(updatedTiles); lastActionTime.current = Date.now(); setShowHintPrompt(false); }
    if (newSolvedCount === rowCount && rowCount > 0 && !isComplete) {
      audio.playWin();
      setIsComplete(true);
    }
  }, [isComplete, currentTheme, isInitializing]);

  const handleTileClick = (id: string) => {
    if (isComplete || isExitingLevel || isTimeUp || showRhymeIntro || isSwapping || isReviewing) return;
    const tileExists = tiles.find(t => t.id === id);
    if (!tileExists) return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    if (selectedId === null) {
      audio.playSelect(); setSelectedId(id); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t));
    } else if (selectedId === id) {
      audio.playSelect(); setSelectedId(null); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t));
    } else {
      const index1 = tiles.findIndex(t => t.id === selectedId);
      const index2 = tiles.findIndex(t => t.id === id);
      if (index1 === -1 || index2 === -1) { setSelectedId(null); return; }
      saveToHistory(tiles);
      setMoves(prev => prev + 1);
      const id1 = tiles[index1].id; const id2 = tiles[index2].id;
      const tile1El = tileRefs.current.get(id1); const tile2El = tileRefs.current.get(id2);
      setIsSwapping(true);
      if (tile1El && tile2El) {
          audio.playSwap();
          const rect1 = tile1El.getBoundingClientRect(); const rect2 = tile2El.getBoundingClientRect();
          const dx = rect2.left - rect1.left; const dy = rect2.top - rect1.top;
          tile1El.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
          tile1El.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
          tile2El.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
          tile2El.style.transform = `translate(${-dx}px, ${-dy}px) scale(0.95)`;
          setTimeout(() => {
              if (tile1El) { tile1El.style.transition = ''; tile1El.style.transform = ''; }
              if (tile2El) { tile2El.style.transition = ''; tile2El.style.transform = ''; }
              const newTiles = [...tiles];
              const temp = newTiles[index1]; newTiles[index1] = { ...newTiles[index2], status: 'neutral' }; newTiles[index2] = { ...temp, status: 'neutral' };
              setTiles(newTiles); setSelectedId(null); setIsSwapping(false); checkMatches(newTiles);
          }, 300);
      } else {
          const newTiles = [...tiles]; const temp = newTiles[index1]; newTiles[index1] = newTiles[index2]; newTiles[index2] = temp;
          setTiles(newTiles); setSelectedId(null); setIsSwapping(false); checkMatches(newTiles);
      }
    }
  };

  const handleHint = (overrideLimit = false) => {
    if (!overrideLimit && (hintsUsed >= 1 || isTimeUp || showRhymeIntro || isSwapping)) return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    const correctIds = tiles.filter(t => t.status !== 'solved').map(t => t.categoryId);
    const counts: Record<string, number> = {}; correctIds.forEach(id => counts[id] = (counts[id] || 0) + 1);
    const targetCat = Object.keys(counts).find(id => counts[id] >= 4);
    if (!targetCat) return; 
    const firstUnsolvedRow = Math.floor(tiles.findIndex(t => t.status !== 'solved') / 4);
    saveToHistory(tiles); const newTiles = [...tiles];
    const targetIds = tiles.filter(t => t.categoryId === targetCat && t.status !== 'solved').map(t => t.id);
    for(let i=0; i<4; i++) {
        const destIdx = firstUnsolvedRow * 4 + i;
        const curIdx = newTiles.findIndex(t => t.id === targetIds[i]);
        const temp = newTiles[destIdx]; newTiles[destIdx] = newTiles[curIdx]; newTiles[curIdx] = temp;
    }
    setTiles(newTiles); audio.playRowSolved();
    if (!overrideLimit) { setHintsUsed(prev => prev + 1); updateStats({ hintsUsed: 1 }); }
    setTimeout(() => checkMatches(newTiles), 200);
  };

  const handleNextLevelClick = () => {
    setIsExitingLevel(true);
    let animIndex = Math.floor(Math.random() * EXIT_ANIMATIONS.length);
    while (animIndex === lastExitIndex.current && EXIT_ANIMATIONS.length > 1) animIndex = Math.floor(Math.random() * EXIT_ANIMATIONS.length);
    lastExitIndex.current = animIndex;
    setExitAnimClass(EXIT_ANIMATIONS[animIndex]);
    setTiles(prev => prev.map(t => ({ ...t, status: 'exiting' })));
    setTimeout(() => {
        onComplete();
    }, 500);
  };

  const debugSolvePuzzle = () => {
    saveToHistory(tiles);
    const categories = new Map<string, TileData[]>();
    tiles.forEach(t => {
      const list = categories.get(t.categoryId) || [];
      list.push(t);
      categories.set(t.categoryId, list);
    });
    
    const sortedTiles: TileData[] = [];
    Array.from(categories.values()).forEach((group, idx) => {
      const color = currentTheme.solvedColors[idx % currentTheme.solvedColors.length];
      group.forEach(t => {
        sortedTiles.push({ ...t, status: 'solved', color });
      });
    });
    
    setTiles(sortedTiles);
    setTimeout(() => checkMatches(sortedTiles), 100);
  };

  const debugUndo = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setTiles(prev);
      setHistory(prevHistory => prevHistory.slice(0, -1));
      audio.playSelect();
    }
  };

  if (initError) return <div className="flex flex-col items-center justify-center h-[50vh] text-white animate-fade-in"><p className="mb-4 text-red-400 font-righteous text-xl">COULD NOT GENERATE LEVEL CONTENT.</p><button onClick={() => window.location.reload()} className="px-6 py-2 bg-white text-black font-bold rounded-full">RETRY</button></div>;
  if (isInitializing) return <div className="text-white text-center mt-20 animate-pulse font-righteous">LOADING LEVEL...</div>;

  const renderRows = () => {
    const rows = []; const rowCount = tiles.length / 4;
    for (let i = 0; i < rowCount; i++) {
      const startIndex = i * 4; const rowTiles = tiles.slice(startIndex, startIndex + 4);
      if (!rowTiles[0]) continue; 
      const isRowSolved = rowTiles.every(t => t?.status === 'solved' || t?.status === 'exiting');
      const labelColorClass = isRowSolved && rowTiles[0].color ? rowTiles[0].color.split(' ')[0] : "bg-zinc-800";
      
      rows.push(
        <div key={i} className={`w-full relative z-10 flex-1 flex flex-col justify-center min-h-0`}>
           <div className="relative w-full h-full p-1">
             {isRowSolved && <div className={`absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium`} />}
             {isRowSolved && (
                <div className="absolute top-0 left-8 z-[100] transform" style={{ transform: 'translateY(calc(-100% + 4px))' }}>
                    <div className={`animate-pop px-4 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-12px_24px_rgba(0,0,0,0.8)] font-oswald text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] ${labelColorClass}`}>
                        {rowTiles[0].categoryName}
                    </div>
                </div>
             )}
             <div className={`grid grid-cols-4 gap-1.5 w-full h-full relative z-10 transition-all duration-300 ${isRowSolved ? 'p-3 drop-shadow-xl' : ''}`}>
               {rowTiles.map((tile) => (
                 <div key={tile.id} className="relative w-full h-full">
                     <Tile data={tile} data-tile-id={tile.id} onClick={(id) => handleTileClick(id)} gradientClass={currentTheme.gradient} exitAnimation={exitAnimClass} ref={(el) => { if (el) tileRefs.current.set(tile.id, el); }} />
                 </div>
               ))}
             </div>
           </div>
        </div>
      );
    }
    return rows;
  };

  let modeLabel = mode === GameMode.LEVEL_4_THEMED ? themeName : mode.replace(/_/g, ' ').replace('LEVEL 1 ', '').replace('LEVEL ', '');
  if (mode === GameMode.CLASSIC) modeLabel = "CLASSIC";
  if (mode === GameMode.LEVEL_SYNONYMS) modeLabel = "SYNONYMS";

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto h-full px-2 relative select-none overflow-hidden pb-1">
       <ParticleOverlay ref={particleRef} />
       {debugMode && <DebugMenu onMainMenu={onExit} onSolveOne={() => handleHint(true)} onSolvePuzzle={debugSolvePuzzle} onUndo={debugUndo} />}
       {showNextButton && !isReviewing && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center animate-fade-in bg-black/80 backdrop-blur-sm">
             <div className="relative z-10 flex flex-col items-center min-w-[300px] text-center animate-celebrate">
                 <NextLevelButton onClick={handleNextLevelClick} levelIndex={levelIndex} />
                 <div onClick={() => setIsReviewing(true)} className="mt-4 text-white font-oswald uppercase tracking-widest text-sm hover:text-cyan-400 cursor-pointer animate-pulse transition-colors uppercase">TAP HERE TO REVIEW SOLVED PUZZLE</div>
             </div>
          </div>
       )}
      <div className="relative flex flex-col justify-center w-full items-end mb-1 py-1 shrink-0 z-[60] h-auto min-h-[40px] pr-4">
        <div className="flex items-center gap-3">
            <h2 className="text-right pointer-events-none text-2xl font-bold tracking-widest text-deco-gold uppercase font-righteous drop-shadow-md">{modeLabel}</h2>
            {isReviewing ? (
                <button onClick={handleNextLevelClick} className="px-3 py-1 bg-neon-green text-black font-bold font-oswald uppercase rounded shadow-lg animate-pulse hover:scale-105 transition-transform uppercase">NEXT LEVEL &gt;&gt;</button>
            ) : (
                <button onClick={() => onOpenSettings?.(targetCategories)} className="p-1 rounded-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 hover:border-white transition-all text-zinc-300 hover:text-white active:animate-spin">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a7.75 7.75 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            )}
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col animate-fade-in gap-1">{renderRows()}</div>
    </div>
  );
};
export default Level1_Standard;
