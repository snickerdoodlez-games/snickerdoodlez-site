
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { TileData, THEMES, Theme, SUCCESS_PHRASES, EXIT_ANIMATIONS } from '../types';
import Tile from './Tile';
import { getEmojiData } from '../services/emojiData';
import { audio } from '../services/audioService';
import { updateStats } from '../services/storage';
import NextLevelButton from './NextLevelButton';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import DebugMenu from './DebugMenu';

interface LevelEmojiProps {
  onComplete: (stats?: any) => void;
  onExit: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  debugMode?: boolean;
  onOpenAnimLab?: () => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
}

const Level1_Emoji: React.FC<LevelEmojiProps> = ({ 
    onComplete, onExit, levelIndex, onThemeChange, hintsEnabled, debugMode, onOpenAnimLab, onOpenSettings
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
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
  const [isReviewing, setIsReviewing] = useState(false);
  const [moves, setMoves] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const startTimeRef = useRef(Date.now());
  const [history, setHistory] = useState<TileData[][]>([]);
  const lastActionTime = useRef(Date.now());
  const tileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const particleRef = useRef<ParticleHandle>(null);
  const GRID_WIDTH = 3; 
  const MAX_MISTAKES = 5;

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
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    setCurrentTheme(randomTheme);
    if (onThemeChange) onThemeChange(randomTheme.solvedColors);
    const emojiCategories = getEmojiData();
    const shuffledCategories = [...emojiCategories].sort(() => 0.5 - Math.random());
    const newTiles: TileData[] = [];
    const usedEmojis = new Set<string>();
    let categoriesAdded = 0;
    const TARGET_ROWS = 7;
    for (const cat of shuffledCategories) {
        if (categoriesAdded >= TARGET_ROWS) break; 
        const uniqueWords = Array.from(new Set(cat.words));
        // FIX: Change 'usedWords' to 'usedEmojis' to match the variable declaration above
        const availableEmojis = uniqueWords.filter(w => !usedEmojis.has(w));
        const uniqueAvailable = [...new Set(availableEmojis)];
        if (uniqueAvailable.length >= GRID_WIDTH) {
             const selection = [...uniqueAvailable].sort(() => 0.5 - Math.random()).slice(0, GRID_WIDTH);
             selection.forEach(emoji => { usedEmojis.add(emoji); newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: emoji, categoryId: cat.id, categoryName: cat.name, status: 'neutral', isEmoji: true }); });
             categoriesAdded++;
        }
    }
    setTiles(newTiles.sort(() => 0.5 - Math.random())); setHistory([]); setIsComplete(false); setShowNextButton(false); setIsExitingLevel(false); setIsInitializing(false); setHintsUsed(0); setShowHintPrompt(false); setIsSwapping(false); setIsReviewing(false); setMoves(0); setMistakes(0); setTimeLeft(120);
    lastActionTime.current = Date.now(); startTimeRef.current = Date.now();
  }, [levelIndex, onThemeChange]);

  useEffect(() => {
    if (isComplete || isExitingLevel || isInitializing || isReviewing) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isComplete, isExitingLevel, isInitializing, isReviewing]);

  useEffect(() => {
    if (!hintsEnabled || isComplete || isExitingLevel || isInitializing || hintsUsed >= 1) return;
    const interval = setInterval(() => {
        const elapsed = Date.now() - lastActionTime.current; if (elapsed > 90000 && !showHintPrompt) setShowHintPrompt(true);
    }, 5000); 
    return () => clearInterval(interval);
  }, [hintsEnabled, isComplete, isExitingLevel, isInitializing, hintsUsed, showHintPrompt]);

  useEffect(() => {
      if (isComplete) {
          const timeSpent = Date.now() - startTimeRef.current; 
          updateStats({ levelsCompleted: 1, totalTimeMs: timeSpent, totalMoves: moves });
          const timer = setTimeout(() => { 
            setShowNextButton(true); 
          }, 800); 
          return () => clearTimeout(timer);
      } else {
        setShowNextButton(false);
      }
  }, [isComplete]);

  const saveToHistory = (currentTiles: TileData[]) => {
      setHistory(prev => { const newHistory = [...prev, JSON.parse(JSON.stringify(currentTiles))]; return newHistory.slice(-10); });
  };

  const checkMatches = useCallback((currentTiles: TileData[]): boolean => {
    const rowCount = Math.floor(currentTiles.length / GRID_WIDTH);
    let newSolvedCount = 0; const updatedTiles = [...currentTiles]; let changed = false;
    for (let r = 0; r < rowCount; r++) {
      const startIndex = r * GRID_WIDTH; const rowTiles = updatedTiles.slice(startIndex, startIndex + GRID_WIDTH);
      if (!rowTiles[0] || rowTiles[0]?.status === 'solved' || rowTiles[0]?.status === 'exiting') { 
        if (rowTiles[0]?.status === 'solved') newSolvedCount++; 
        continue; 
      }
      const firstCat = rowTiles[0].categoryId; const allMatch = rowTiles.every(t => t?.categoryId === firstCat);
      if (allMatch) {
        changed = true; newSolvedCount++; audio.playRowSolved(); updateStats({ rowsSolved: 1, solvedCategoryIds: [firstCat] });
        const color = currentTheme.solvedColors[r % currentTheme.solvedColors.length];
        for (let i = startIndex; i < startIndex + GRID_WIDTH; i++) updatedTiles[i] = { ...updatedTiles[i], status: 'solved', color };
      }
    }
    if (changed) { 
        setTiles(updatedTiles); 
        lastActionTime.current = Date.now(); 
        setShowHintPrompt(false); 
    }
    
    if (newSolvedCount === rowCount && rowCount > 0) {
      if (!isComplete) {
        audio.playWin();
        setIsComplete(true);
      }
    }
    return changed;
  }, [isComplete, currentTheme]);

  const handleTileClick = (id: string) => {
    if (isComplete || isExitingLevel || isSwapping || isReviewing) return;
    const tileExists = tiles.find(t => t.id === id); if (!tileExists) return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    if (selectedId === null) { audio.playSelect(); setSelectedId(id); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'selected' } : t)); }
    else if (selectedId === id) { audio.playSelect(); setSelectedId(null); setTiles(prev => prev.map(t => t.id === id ? { ...t, status: 'neutral' } : t)); }
    else {
      const index1 = tiles.findIndex(t => t.id === selectedId); const index2 = tiles.findIndex(t => t.id === id);
      if (index1 === -1 || index2 === -1) { setSelectedId(null); return; }
      saveToHistory(tiles);
      setMoves(prev => prev + 1);
      const id1 = tiles[index1].id; const id2 = tiles[index2].id;
      const tile1El = tileRefs.current.get(id1); const tile2El = tileRefs.current.get(id2);
      setIsSwapping(true);
      if (tile1El && tile2El) {
          audio.playSwap(); const rect1 = tile1El.getBoundingClientRect(); const rect2 = tile2El.getBoundingClientRect();
          const dx = rect2.left - rect1.left; const dy = rect2.top - rect1.top;
          tile1El.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s, z-index 0s';
          tile1El.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`; tile1El.style.zIndex = '50'; tile1El.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
          tile2El.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s, z-index 0s';
          tile2El.style.transform = `translate(${-dx}px, ${-dy}px) scale(0.95)`; tile2El.style.zIndex = '40';
          setTimeout(() => {
              if (tile1El) { tile1El.style.transition = ''; tile1El.style.transform = ''; tile1El.style.zIndex = ''; tile1El.style.boxShadow = ''; }
              if (tile2El) { tile2El.style.transition = ''; tile2El.style.transform = ''; tile2El.style.zIndex = ''; }
              const newTiles = [...tiles];
              if (newTiles[index1] && newTiles[index1].status !== 'locked') newTiles[index1] = { ...newTiles[index1], status: 'neutral' };
              if (newTiles[index2] && newTiles[index2].status !== 'locked') newTiles[index2] = { ...newTiles[index2], status: 'neutral' };
              const temp = newTiles[index1]; newTiles[index1] = newTiles[index2]; newTiles[index2] = temp;
              setTiles(newTiles); setSelectedId(null); setIsSwapping(false); 
              const solved = checkMatches(newTiles);
              if (!solved) {
                setMistakes(prev => Math.min(MAX_MISTAKES, prev + 1));
              }
          }, 300);
      } else {
          const newTiles = [...tiles]; const temp = newTiles[index1]; newTiles[index1] = newTiles[index2]; newTiles[index2] = temp;
          setTiles(newTiles); setSelectedId(null); setIsSwapping(false); 
          const solved = checkMatches(newTiles);
          if (!solved) {
            setMistakes(prev => Math.min(MAX_MISTAKES, prev + 1));
          }
      }
    }
  };

  const handleHint = (overrideLimit = false) => {
    if (!overrideLimit && (hintsUsed >= 1 || isSwapping)) return;
    lastActionTime.current = Date.now(); setShowHintPrompt(false);
    const availableCategories = new Set<string>();
    tiles.forEach(t => { if (t.status === 'neutral' || t.status === 'selected' || t.status === 'locked') availableCategories.add(t.categoryId); });
    let targetCat = ''; for (const catId of Array.from(availableCategories)) {
        const count = tiles.filter(t => t.categoryId === catId && t.status !== 'solved').length;
        if (count === GRID_WIDTH) { targetCat = catId; break; }
    }
    if (!targetCat) return; 
    const rowCount = Math.floor(tiles.length / GRID_WIDTH); let targetRowIdx = -1;
    for (let r = 0; r < rowCount; r++) {
        const start = r * GRID_WIDTH; const rowTiles = tiles.slice(start, start + GRID_WIDTH);
        const isSolved = rowTiles.every(t => t.status === 'solved'); if (!isSolved) { targetRowIdx = r; break; }
    }
    if (targetRowIdx === -1) return;
    saveToHistory(tiles); const newTiles = [...tiles];
    const destIndices = []; for(let k=0; k<GRID_WIDTH; k++) destIndices.push(targetRowIdx * GRID_WIDTH + k);
    const targetTileIds = newTiles.filter(t => t.categoryId === targetCat && t.status !== 'solved').map(t => t.id);
    for (let k = 0; k < GRID_WIDTH; k++) {
        const destIdx = destIndices[k]; const tileAtDest = newTiles[destIdx];
        if (targetTileIds.includes(tileAtDest.id)) continue;
        const tileToMoveIdx = newTiles.findIndex((t, i) => targetTileIds.includes(t.id) && !destIndices.includes(i));
        if (tileToMoveIdx !== -1) { const temp = newTiles[destIdx]; newTiles[destIdx] = newTiles[tileToMoveIdx]; newTiles[tileToMoveIdx] = temp; }
    }
    const color = currentTheme.solvedColors[targetRowIdx % currentTheme.solvedColors.length];
    destIndices.forEach(idx => { newTiles[idx] = { ...newTiles[idx], status: 'solved', color }; });
    setTiles(newTiles); audio.playRowSolved();
    if (!overrideLimit) { setHintsUsed(prev => prev + 1); updateStats({ hintsUsed: 1, rowsSolved: 1, solvedCategoryIds: [targetCat] }); }
    setTimeout(() => checkMatches(newTiles), 200);
  };

  const handleRefuseHint = () => { setShowHintPrompt(false); updateStats({ hintsRefused: 1 }); };
  
  const handleNextLevelClick = () => {
    setIsExitingLevel(true);
    let animIndex = Math.floor(Math.random() * EXIT_ANIMATIONS.length);
    const chosenAnim = EXIT_ANIMATIONS[animIndex]; setExitAnimClass(chosenAnim);
    setTiles(prev => prev.map(t => ({ ...t, status: 'exiting' })));
    setTimeout(() => {
        onComplete({ mode: 'EMOJI MATCH', mistakes });
    }, 500);
  };

  const debugSolveOne = () => handleHint(true);
  const debugSolvePuzzle = () => {
      saveToHistory(tiles); const newTiles = tiles.map((t, i) => { const rowIndex = Math.floor(i / GRID_WIDTH); const color = currentTheme.solvedColors[rowIndex % currentTheme.solvedColors.length]; return { ...t, status: 'solved', color } as TileData; });
      setTiles(newTiles); audio.playWin(); setIsComplete(true);
  };
  const debugUndo = () => { if (history.length > 0) { const prev = history[history.length - 1]; setTiles(prev); setHistory(h => h.slice(0, h.length - 1)); audio.playSelect(); } };

  if (isInitializing) return <div className="text-white text-center mt-20 animate-pulse font-oswald uppercase">LOADING EMOJIS...</div>;

  const renderRows = () => {
    const rows = []; const rowCount = Math.floor(tiles.length / GRID_WIDTH);
    for (let i = 0; i < rowCount; i++) {
      const realStart = i * GRID_WIDTH; const rowTiles = tiles.slice(realStart, realStart + GRID_WIDTH);
      if (!rowTiles[0]) continue; 
      const isRowSolved = rowTiles.every(t => t?.status === 'solved' || t?.status === 'exiting');
      const labelColorClass = isRowSolved && rowTiles[0].color ? rowTiles[0].color.split(' ')[0] : "bg-zinc-800";

      rows.push(
        <div key={i} className={`w-full relative z-10 flex-1 flex flex-col justify-center transition-opacity duration-500 min-h-0`} style={{ zIndex: 10 + i }} >
           <div className="relative w-full h-full p-1">
             {isRowSolved && <div className={`absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-xl`} />}
             {isRowSolved && (
                <div className="absolute top-0 left-8 z-[100] transform" style={{ transform: 'translateY(calc(-100% + 4px))' }}>
                    <div className={`animate-pop px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-12px_24px_rgba(0,0,0,0.8)] font-oswald text-white drop-shadow-md ${labelColorClass}`}>
                        {rowTiles[0].categoryName}
                    </div>
                </div>
             )}
             <div className={`grid grid-cols-3 gap-2 w-full h-full relative z-10 p-1 ${isRowSolved ? 'drop-shadow-xl p-2' : ''}`}>
               {rowTiles.map((tile) => (
                 tile ? (
                   <div key={tile.id} className="relative w-full h-full">
                       <Tile data={tile} data-tile-id={tile.id} onClick={(id) => handleTileClick(id)} gradientClass={currentTheme.gradient} exitAnimation={exitAnimClass} ref={(el) => { if (el) tileRefs.current.set(tile.id, el); else tileRefs.current.delete(tile.id); }} />
                   </div>
                 ) : null
               ))}
             </div>
           </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto h-full px-2 relative select-none overflow-hidden pb-1">
       <ParticleOverlay ref={particleRef} />
       
       {debugMode && <DebugMenu onMainMenu={onExit} onSolveOne={debugSolveOne} onSolvePuzzle={debugSolvePuzzle} onUndo={debugUndo} />}
       
       {showHintPrompt && (
          <div className="absolute inset-0 z-[90] flex items-center justify-center animate-fade-in bg-black/60">
              <div className="bg-zinc-900 border-4 border-neon-blue rounded-2xl p-6 flex flex-col items-center gap-6 shadow-[0_0_40px_rgba(0,229,255,0.3)] animate-pop w-[90%] max-sm">
                  <span className="text-white font-black font-oswald text-2xl uppercase tracking-widest text-center drop-shadow-md">NEED SOME HELP?</span>
                  <div className="flex gap-4 w-full">
                      <button onClick={() => handleHint(false)} className="flex-1 bg-neon-blue text-black hover:bg-white hover:scale-105 active:scale-95 transition-all py-3 rounded-xl font-black uppercase font-oswald text-xl shadow-lg">YES</button>
                      <button onClick={handleRefuseHint} className="flex-1 bg-zinc-800 border-2 border-zinc-600 text-zinc-400 hover:text-white hover:border-white hover:bg-zinc-700 hover:scale-105 active:scale-95 transition-all py-3 rounded-xl font-bold uppercase font-oswald text-xl">NO</button>
                  </div>
              </div>
          </div>
       )}

      {showNextButton && !isReviewing && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center animate-fade-in bg-black/80">
           <div className="relative z-20 flex flex-col items-center min-w-[300px] text-center animate-celebrate">
               <NextLevelButton onClick={handleNextLevelClick} levelIndex={levelIndex} />
               <div onClick={() => setIsReviewing(true)} className="mt-4 text-white font-oswald uppercase tracking-widest text-sm hover:text-cyan-400 cursor-pointer animate-pulse transition-colors uppercase">TAP HERE TO REVIEW SOLVED PUZZLE</div>
           </div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative flex flex-col justify-center w-full items-end mb-1 shrink-0 z-[60] h-auto min-h-[50px] py-1 pr-4">
        <div className="flex items-center gap-3 relative">
            <h2 className="text-right pointer-events-none text-2xl md:text-4xl font-black tracking-widest text-deco-gold uppercase font-righteous drop-shadow-md leading-none">EMOJI MATCH</h2>
            {isReviewing ? (
                <button onClick={handleNextLevelClick} className="px-3 py-1 bg-neon-green text-black font-bold font-oswald uppercase rounded shadow-lg animate-pulse hover:scale-105 transition-transform uppercase">NEXT LEVEL &gt;&gt;</button>
            ) : (
                <button onClick={() => onOpenSettings?.(targetCategories)} className="p-1 rounded-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 active:animate-spin transition-all text-zinc-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a7.75 7.75 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            )}
        </div>
      </div>

      <div className="w-full flex-1 flex flex-col animate-fade-in gap-1 min-h-0" style={{ animationDelay: '0.1s' }}>{renderRows()}</div>
    </div>
  );
};
export default Level1_Emoji;
