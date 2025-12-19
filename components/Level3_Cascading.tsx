
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CSVRow, TileData, THEMES, Theme, SUCCESS_PHRASES, EXIT_ANIMATIONS, getHexFromColorClass } from '../types';
import Tile from './Tile';
import { getRandomCategories } from '../services/csvData';
import { audio } from '../services/audioService';
import { updateStats } from '../services/storage';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import NextLevelButton from './NextLevelButton';
import DebugMenu from './DebugMenu';

interface Level3Props {
  csvData: CSVRow[];
  onComplete: (stats?: any) => void;
  onExit: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  debugMode?: boolean;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
}

const Level3_Infinite: React.FC<Level3Props> = ({ 
  csvData, onComplete, onExit, levelIndex, 
  onThemeChange, hintsEnabled, debugMode, onOpenSettings
}) => {
  const [activeTiles, setActiveTiles] = useState<TileData[]>([]);
  const [reserveTiles, setReserveTiles] = useState<TileData[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHintPrompt, setShowHintPrompt] = useState(false);
  const [isExitingLevel, setIsExitingLevel] = useState(false);
  const [exitAnimClass, setExitAnimClass] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);
  const [rowsLeft, setRowsLeft] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const [moves, setMoves] = useState(0);
  const startTimeRef = useRef(Date.now());
  const [history, setHistory] = useState<TileData[][]>([]);
  const lastActionTime = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);
  const hasInitialized = useRef(false);
  const VISIBLE_ROWS = 7; const GRID_WIDTH = 4; const VISIBLE_COUNT = VISIBLE_ROWS * GRID_WIDTH;

  const targetCategories = useMemo(() => {
      const allTiles = [...activeTiles, ...reserveTiles]; if (allTiles.length === 0) return [];
      const cats = new Map<string, { name: string, isSolved: boolean }>();
      allTiles.forEach(t => { if (!cats.has(t.categoryId) && t.status !== 'placeholder-colored') cats.set(t.categoryId, { name: t.categoryName, isSolved: false }); });
      return Array.from(cats.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [activeTiles, reserveTiles]);

  useEffect(() => {
    if (hasInitialized.current) return;
    if (!csvData || csvData.length === 0) return;
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    setCurrentTheme(randomTheme); if (onThemeChange) onThemeChange(randomTheme.solvedColors);
    const rowCount = Math.floor(Math.random() * 5) + 9; setTotalRows(rowCount); setRowsLeft(rowCount);
    const categories = getRandomCategories(rowCount, csvData);
    let allTiles: TileData[] = [];
    categories.forEach(cat => {
        const words = [...cat.words].sort(() => 0.5 - Math.random()).slice(0, 4);
        words.forEach(w => { allTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name, status: 'neutral' }); });
    });
    
    // Sort and assign colors per row for consistency in "Hidden" mode
    allTiles = allTiles.sort(() => 0.5 - Math.random());
    const finalTiles = allTiles.map((t, idx) => {
        const rowIndex = Math.floor(idx / GRID_WIDTH);
        const rowColor = randomTheme.solvedColors[rowIndex % randomTheme.solvedColors.length];
        return { ...t, color: rowColor };
    });

    setActiveTiles(finalTiles.slice(0, VISIBLE_COUNT)); 
    setReserveTiles(finalTiles.slice(VISIBLE_COUNT));
    
    setIsInitializing(false); setHintsUsed(0); setShowHintPrompt(false); setIsComplete(false); setShowNextButton(false); setIsExitingLevel(false); setIsReviewing(false); setMoves(0);
    startTimeRef.current = Date.now(); lastActionTime.current = Date.now(); hasInitialized.current = true;
  }, [csvData, levelIndex, onThemeChange]);

  useEffect(() => {
      if (isComplete) {
          const timeSpent = Date.now() - startTimeRef.current; 
          updateStats({ levelsCompleted: 1, totalTimeMs: timeSpent, totalMoves: moves });
          const timer = setTimeout(() => { setShowNextButton(true); }, 800); return () => clearTimeout(timer);
      } else setShowNextButton(false);
  }, [isComplete]);

  useEffect(() => {
    if (!hintsEnabled || isComplete || isExitingLevel || isInitializing || hintsUsed >= 1) return;
    const interval = setInterval(() => {
        const elapsed = Date.now() - lastActionTime.current; if (elapsed > 90000 && !showHintPrompt) setShowHintPrompt(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [hintsEnabled, isComplete, isExitingLevel, isInitializing, hintsUsed, showHintPrompt]);

  const triggerParticles = (ids: string[], colorClass: string) => {
    if (!particleRef.current) return;
    const cssColor = getHexFromColorClass(colorClass);
    ids.forEach(id => {
      const el = tileRefs.current.get(id);
      if (el) { const rect = el.getBoundingClientRect(); const x = rect.left + rect.width / 2; const y = rect.top + rect.height / 2; particleRef.current?.explode(x, y, cssColor); }
    });
  };

  const saveToHistory = (currentTiles: TileData[]) => {
      setHistory(prev => { const newHistory = [...prev, JSON.parse(JSON.stringify(currentTiles))]; return newHistory.slice(-10); });
  };

  const checkMatches = useCallback((currentActive: TileData[]) => {
    let newActive = [...currentActive]; let matchedRowIndex = -1; let matchedCatId = "";
    for (let r = 0; r < VISIBLE_ROWS; r++) {
        const start = r * GRID_WIDTH; const end = start + GRID_WIDTH;
        if (end > newActive.length) break;
        const rowTiles = newActive.slice(start, end); if (rowTiles.some(t => t.status === 'placeholder-colored' || t.status === 'solved')) continue;
        const firstCat = rowTiles[0].categoryId; if (rowTiles.every(t => t.categoryId === firstCat)) { matchedRowIndex = r; matchedCatId = firstCat; break; }
    }
    if (matchedRowIndex !== -1) {
        audio.playRowSolved(); const solvedColor = currentTheme.solvedColors[(totalRows - rowsLeft) % currentTheme.solvedColors.length];
        const startIdx = matchedRowIndex * GRID_WIDTH; const tileIds: string[] = [];
        for (let i = 0; i < GRID_WIDTH; i++) { newActive[startIdx + i] = { ...newActive[startIdx + i], status: 'solved', color: solvedColor }; tileIds.push(newActive[startIdx + i].id); }
        setActiveTiles(newActive); triggerParticles(tileIds, solvedColor); updateStats({ rowsSolved: 1, solvedCategoryIds: [matchedCatId] }); setRowsLeft(prev => prev - 1);
        setTimeout(() => {
            const afterRemoval = [...newActive.slice(0, startIdx), ...newActive.slice(startIdx + GRID_WIDTH)];
            let nextReserve = [...reserveTiles]; const newTilesToAdd: TileData[] = [];
            
            const batchColor = currentTheme.solvedColors[Math.floor(Math.random() * currentTheme.solvedColors.length)];
            
            for(let i=0; i<GRID_WIDTH; i++) {
                if (nextReserve.length > 0) { 
                  const t = nextReserve.shift(); 
                  if(t) newTilesToAdd.push({...t, status: 'neutral', isEmoji: false, color: batchColor }); 
                }
                else { 
                  newTilesToAdd.push({ id: `blank-${Math.random()}`, word: "", categoryId: "blank", categoryName: "", status: 'placeholder-colored', color: batchColor }); 
                }
            }
            setReserveTiles(nextReserve); setActiveTiles([...afterRemoval, ...newTilesToAdd]); lastActionTime.current = Date.now();
            if (rowsLeft <= 1) {
                 setIsComplete(true); audio.playWin();
            }
        }, 1500);
    }
  }, [rowsLeft, reserveTiles, currentTheme, totalRows]);

  const handleTileClick = (id: string) => {
    if (isComplete || isExitingLevel || isSwapping || isReviewing) return;
    const tileIndex = activeTiles.findIndex(t => t.id === id); if (tileIndex === -1) return;
    const tile = activeTiles[tileIndex]; if (tile.status === 'placeholder-colored' || tile.status === 'solved') return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    if (selectedId === null) { audio.playSelect(); setSelectedId(id); setActiveTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t)); }
    else if (selectedId === id) { audio.playSelect(); setSelectedId(null); setActiveTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t)); }
    else {
        const index1 = activeTiles.findIndex(t => t.id === selectedId); const index2 = activeTiles.findIndex(t => t.id === id);
        if (index1 === -1 || index2 === -1) { setSelectedId(null); return; }
        saveToHistory(activeTiles);
        setMoves(prev => prev + 1);
        const id1 = activeTiles[index1].id; const id2 = activeTiles[index2].id;
        const tile1El = tileRefs.current.get(id1); const tile2El = tileRefs.current.get(id2);
        setIsSwapping(true); audio.playSwap();
        if (tile1El && tile2El) {
            const rect1 = tile1El.getBoundingClientRect(); const rect2 = tile2El.getBoundingClientRect();
            const dx = rect2.left - rect1.left; const dy = rect2.top - rect1.top;
            tile1El.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s'; tile1El.style.transform = `translate(${dx}px, ${dy}px) scale(1.1)`; tile1El.style.zIndex = '50';
            tile2El.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s'; tile2El.style.transform = `translate(${-dx}px, ${-dy}px) scale(0.9)`; tile2El.style.zIndex = '40';
            setTimeout(() => {
                if (tile1El) { tile1El.style.transform = ''; tile1El.style.zIndex = ''; tile1El.style.transition = ''; }
                if (tile2El) { tile2El.style.transform = ''; tile2El.style.zIndex = ''; tile2El.style.transition = ''; }
                const newTiles = [...activeTiles]; newTiles[index1] = { ...newTiles[index1], status: 'neutral' }; newTiles[index2] = { ...newTiles[index2], status: 'neutral' };
                const temp = newTiles[index1]; newTiles[index1] = newTiles[index2]; newTiles[index2] = temp;
                setActiveTiles(newTiles); setSelectedId(null); setIsSwapping(false); checkMatches(newTiles);
            }, 300);
        } else {
            const newTiles = [...activeTiles]; newTiles[index1] = { ...newTiles[index1], status: 'neutral' }; newTiles[index2] = { ...newTiles[index2], status: 'neutral' };
            const temp = newTiles[index1]; newTiles[index1] = newTiles[index2]; newTiles[index2] = temp;
            setActiveTiles(newTiles); setSelectedId(null); setIsSwapping(false); checkMatches(newTiles);
        }
    }
  };

  const handleHint = (overrideLimit = false) => {
      if (!overrideLimit && (hintsUsed >= 1 || isSwapping)) return;
      lastActionTime.current = Date.now(); setShowHintPrompt(false);
      const counts: Record<string, number> = {}; activeTiles.forEach(t => { if (t.status === 'neutral' || t.status === 'selected') counts[t.categoryId] = (counts[t.categoryId] || 0) + 1; });
      const targetCat = Object.keys(counts).find(id => counts[id] >= 4); if (!targetCat) return;
      let targetRow = -1; for (let r=0; r<VISIBLE_ROWS; r++) {
          const rowStart = r * GRID_WIDTH; const rowTiles = activeTiles.slice(rowStart, rowStart + GRID_WIDTH);
          if (rowTiles.every(t => t.status === 'neutral' || t.status === 'selected')) { targetRow = r; break; }
      }
      if (targetRow === -1) return;
      saveToHistory(activeTiles);
      const newTiles = [...activeTiles];
      const targetIds = newTiles.filter(t => t.categoryId === targetCat && (t.status === 'neutral' || t.status === 'selected')).map(t => t.id).slice(0, 4);
      const destIndices = [targetRow * GRID_WIDTH, targetRow * GRID_WIDTH + 1, targetRow * GRID_WIDTH + 2, targetRow * GRID_WIDTH + 3];
      for (let k = 0; k < 4; k++) {
          const destIdx = destIndices[k]; const tileAtDest = newTiles[destIdx];
          if (targetIds.includes(tileAtDest.id)) continue;
          const tileToMoveIdx = newTiles.findIndex((t, i) => targetIds.includes(t.id) && !destIndices.includes(i));
          if (tileToMoveIdx !== -1) { const temp = newTiles[destIdx]; newTiles[destIdx] = newTiles[tileToMoveIdx]; newTiles[tileToMoveIdx] = temp; }
      }
      setActiveTiles(newTiles); audio.playRowSolved();
      if (!overrideLimit) { setHintsUsed(prev => prev + 1); updateStats({ hintsUsed: 1 }); }
      setTimeout(() => checkMatches(newTiles), 200);
  };
  
  const handleRefuseHint = () => { setShowHintPrompt(false); updateStats({ hintsRefused: 1 }); };
  
  const handleNextLevelClick = () => {
    setIsExitingLevel(true);
    let animIndex = Math.floor(Math.random() * EXIT_ANIMATIONS.length);
    setExitAnimClass(EXIT_ANIMATIONS[animIndex]);
    setActiveTiles(prev => prev.map(t => ({ ...t, status: 'exiting' })));
    setTimeout(() => {
        onComplete({ mode: 'HIDDEN TILES', mistakes: 0 });
    }, 500);
  };

  const debugSolveOne = () => { handleHint(true); };

  const debugSolvePuzzle = () => {
    saveToHistory(activeTiles);
    setRowsLeft(0);
    const solvedActive = activeTiles.map((t, idx) => {
        const rowIndex = Math.floor(idx / GRID_WIDTH);
        const solvedColor = currentTheme.solvedColors[rowIndex % currentTheme.solvedColors.length];
        return { ...t, status: 'solved', color: solvedColor } as TileData;
    });
    setActiveTiles(solvedActive);
    setIsComplete(true); audio.playWin();
  };

  const debugUndo = () => { if (history.length > 0) { const prev = history[history.length - 1]; setActiveTiles(prev); setHistory(h => h.slice(0, h.length - 1)); audio.playSelect(); } };

  if (isInitializing) return <div className="text-white text-center mt-20 animate-pulse font-oswald text-xl uppercase">LOADING STACK...</div>;

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto h-full px-4 relative select-none overflow-hidden pb-4">
      <ParticleOverlay ref={particleRef} />
      {debugMode && <DebugMenu onMainMenu={onExit} onSolveOne={debugSolveOne} onSolvePuzzle={debugSolvePuzzle} onUndo={debugUndo} />}
      {showHintPrompt && (
          <div className="absolute inset-0 z-[90] flex items-center justify-center animate-fade-in bg-black/60 backdrop-blur-[2px]">
              <div className="bg-zinc-900 border-4 border-neon-blue rounded-2xl p-6 flex flex-col items-center gap-6 shadow-[0_0_40px_rgba(0,229,255,0.3)] animate-pop w-[90%] max-w-sm">
                  <span className="text-white font-black font-oswald text-2xl uppercase tracking-widest text-center drop-shadow-md">NEED SOME HELP?</span>
                  <div className="flex gap-4 w-full">
                      <button onClick={() => handleHint(false)} className="flex-1 bg-neon-blue text-black py-3 rounded-xl font-black uppercase font-oswald text-xl shadow-lg">YES</button>
                      <button onClick={handleRefuseHint} className="flex-1 bg-zinc-800 border-2 border-zinc-600 text-zinc-400 py-3 rounded-xl font-bold uppercase font-oswald text-xl">NO</button>
                  </div>
              </div>
          </div>
       )}
      {showNextButton && !isReviewing && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center animate-fade-in bg-black/80 backdrop-blur-sm">
           <div className="relative z-10 flex flex-col items-center min-w-[300px] text-center animate-celebrate">
               <NextLevelButton onClick={handleNextLevelClick} levelIndex={levelIndex} />
               <div onClick={() => setIsReviewing(true)} className="mt-4 text-white font-oswald uppercase tracking-widest text-sm hover:text-cyan-400 cursor-pointer animate-pulse transition-colors uppercase">TAP HERE TO REVIEW SOLVED PUZZLE</div>
           </div>
        </div>
      )}
      <div className="relative flex flex-col justify-center w-full items-end mb-1 py-1 shrink-0 h-auto min-h-[50px] pr-2">
        <div className="flex items-center gap-3">
             <div className="flex flex-col items-end">
                 <h2 className="text-right text-3xl font-bold tracking-widest text-deco-gold uppercase font-righteous drop-shadow-md leading-none">HIDDEN TILES</h2>
                 <div className="text-white font-oswald text-sm tracking-widest mt-1 text-right uppercase">ROWS LEFT: <span className="text-neon-blue font-bold text-lg uppercase">{rowsLeft}</span></div>
             </div>
             {isReviewing ? (
                <button onClick={handleNextLevelClick} className="px-3 py-1 bg-neon-green text-black font-bold font-oswald uppercase rounded shadow-lg animate-pulse hover:scale-105 transition-transform uppercase">NEXT LEVEL &gt;&gt;</button>
             ) : (
                <button onClick={() => onOpenSettings?.(targetCategories)} className="p-1 rounded-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 hover:border-white transition-all text-zinc-300 hover:text-white uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a7.75 7.75 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
             )}
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col gap-2 min-h-0 relative z-10 py-2">
         {Array.from({ length: VISIBLE_ROWS }).map((_, r) => {
             const rowStart = r * GRID_WIDTH; const rowTiles = activeTiles.slice(rowStart, rowStart + GRID_WIDTH);
             if (rowTiles.length === 0) return null;
             const isRowSolved = rowTiles.length === GRID_WIDTH && rowTiles.every(t => t.status === 'solved');
             const labelColorClass = isRowSolved && rowTiles[0].color ? rowTiles[0].color.split(' ')[0] : "bg-zinc-800";
             
             return (
                 <div key={r} className="w-full flex-1 relative min-h-0">
                     {isRowSolved && <div className="absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium" />}
                     {isRowSolved && (
                        <div className="absolute top-0 left-8 z-[100] transform" style={{ transform: 'translateY(calc(-100% + 4px))' }}>
                            <div className={`animate-pop px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-12px_24px_rgba(0,0,0,0.8)] font-oswald text-white drop-shadow-md ${labelColorClass}`}>
                                {rowTiles[0].categoryName}
                            </div>
                        </div>
                     )}
                     <div className={`w-full h-full grid grid-cols-4 gap-2 relative z-10 transition-all duration-300 ${isRowSolved ? 'p-3 drop-shadow-xl' : ''}`}>
                         {rowTiles.map(tile => (
                             <div key={tile.id} className="relative w-full h-full">
                                 <Tile data={tile} data-tile-id={tile.id} onClick={(id) => handleTileClick(id)} gradientClass={currentTheme.gradient} exitAnimation={exitAnimClass} ref={(el) => { if(el) tileRefs.current.set(tile.id, el); else tileRefs.current.delete(tile.id); }} />
                             </div>
                         ))}
                     </div>
                 </div>
             );
         })}
      </div>
    </div>
  );
};
export default Level3_Infinite;
