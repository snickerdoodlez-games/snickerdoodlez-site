
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CSVRow, TileData, THEMES, Theme, SUCCESS_PHRASES, EXIT_ANIMATIONS, getHexFromColorClass, SOLVED_COLORS } from '../types';
import Tile from './Tile';
import { getRandomCategories } from '../services/csvData';
import { audio } from '../services/audioService';
import { updateStats } from '../services/storage';
import ParticleOverlay, { ParticleHandle } from './ParticleOverlay';
import NextLevelButton from './NextLevelButton';
import DebugMenu from './DebugMenu';

interface Level5Props {
  csvData: CSVRow[];
  onComplete: (stats?: any) => void;
  onExit: () => void;
  levelIndex: number;
  onThemeChange?: (colors: string[]) => void;
  hintsEnabled: boolean;
  debugMode?: boolean;
  onOpenAnimLab?: () => void;
  onOpenSettings?: (cats?: {name: string, isSolved: boolean}[]) => void;
}

interface Group { id: string; tileIds: string[]; color: string; }

const Level5_Group: React.FC<Level5Props> = ({ 
    csvData, onComplete, onExit, levelIndex, 
    onThemeChange, hintsEnabled, debugMode, onOpenAnimLab, onOpenSettings
}) => {
  const [tiles, setTiles] = useState<TileData[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [pendingGroups, setPendingGroups] = useState<Group[]>([]);
  const [solvedGroups, setSolvedGroups] = useState<Group[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [mistakes, setMistakes] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isValidating, setIsValidating] = useState(false);
  const [isExitingLevel, setIsExitingLevel] = useState(false);
  const [exitAnimClass, setExitAnimClass] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);
  const [moves, setMoves] = useState(0);
  const [round, setRound] = useState(1);
  const ROUND_TIME_LIMIT = 90; 
  const [timeLeft, setTimeLeft] = useState(ROUND_TIME_LIMIT);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());
  const isMounted = useRef(true);
  const lastActionTime = useRef(Date.now());
  const [revealedCategories, setRevealedCategories] = useState<string[]>([]);
  const particleRef = useRef<ParticleHandle>(null);
  const TOTAL_GROUPS = 5; const TOTAL_ROUNDS = 3; const MAX_MISTAKES = 5;

  useEffect(() => { audio.resume(); startTimeRef.current = Date.now(); isMounted.current = true; return () => { isMounted.current = false; }; }, []);

  useEffect(() => { 
      if (isComplete) { 
          const timeSpent = Date.now() - startTimeRef.current; 
          updateStats({ levelsCompleted: 1, totalTimeMs: timeSpent, totalMoves: moves }); 
      } 
  }, [isComplete]);

  useEffect(() => {
      if (isInitializing || isComplete || isExitingLevel || isValidating) { if (timerRef.current) clearInterval(timerRef.current); return; }
      timerRef.current = setInterval(() => {
          if (!isMounted.current) return;
          setTimeLeft(prev => { 
              if (prev <= 1) { 
                  if (timerRef.current) clearInterval(timerRef.current); 
                  handleTimeUp(); 
                  return 0; 
              } 
              return prev - 1; 
          });
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isInitializing, isComplete, isExitingLevel, isValidating]);

  const handleTimeUp = () => {
      audio.playError(); setMistakes(MAX_MISTAKES); setIsValidating(true);
      if (round < TOTAL_ROUNDS) {
         setTimeout(() => { 
            if (!isMounted.current) return; 
            setRound(r => r + 1); 
            startRound(); 
         }, 1200);
      } else {
         audio.playWin();
         setIsComplete(true);
      }
  };

  const startRound = (resetLevel = false) => {
    setIsInitializing(true); const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    setCurrentTheme(randomTheme); if (onThemeChange) onThemeChange(randomTheme.solvedColors);
    if (!csvData || csvData.length === 0) return;
    const candidateCategories = getRandomCategories(30, csvData);
    const newTiles: TileData[] = []; const usedWords = new Set<string>(); const selectedCategories: CSVRow[] = [];
    for (const cat of candidateCategories) {
        if (selectedCategories.length >= TOTAL_GROUPS) break;
        const availableWords = cat.words.filter(w => !usedWords.has(w));
        if (availableWords.length >= 4) {
             const shuffled = [...availableWords].sort(() => 0.5 - Math.random()).slice(0, 4);
             shuffled.forEach(w => { usedWords.add(w); newTiles.push({ id: Math.random().toString(36).substr(2, 9), word: w, categoryId: cat.id, categoryName: cat.name.includes(':') ? cat.name.split(':')[1].trim() : cat.name, status: 'neutral' }); });
             selectedCategories.push(cat);
        }
    }
    setTiles(newTiles.sort(() => 0.5 - Math.random())); setHintsUsed(0); setSelectedIds([]); setPendingGroups([]); setSolvedGroups([]);
    setRevealedCategories([]); setIsExitingLevel(false); setIsValidating(false); setTimeLeft(ROUND_TIME_LIMIT); setIsReviewing(false); setIsInitializing(false);
    setMistakes(0); if (resetLevel) { setRound(1); setMoves(0); } lastActionTime.current = Date.now();
  };

  useEffect(() => { startRound(true); }, [csvData, levelIndex]);

  const formPendingGroup = (ids: string[]) => {
    const usedColors = new Set([...pendingGroups, ...solvedGroups].map(g => g.color));
    const pool = currentTheme.solvedColors;
    const color = pool.find(c => !usedColors.has(c)) || pool[Math.floor(Math.random() * pool.length)];
    const newGroup: Group = { id: Math.random().toString(36), tileIds: ids, color: color };
    setTiles(currentTiles => currentTiles.map(t => ids.includes(t.id) ? { ...t, status: 'correct-preview', color: color } : t));
    setPendingGroups(prev => { const updated = [...prev, newGroup]; setTimeout(() => { if(isMounted.current) validateBoard(updated); }, 500); return updated; });
    setSelectedIds([]); audio.playSwap();
    setMoves(prev => prev + 1);
  };

  const validateBoard = (currentPending: Group[]) => {
    setIsValidating(true); let errorFound = false; let newSolvedCount = 0; const justSolvedNames: string[] = []; const justSolvedIds: string[] = []; let updatedTiles = [...tiles];
    currentPending.forEach(group => {
      const groupTiles = tiles.filter(t => group.tileIds.includes(t.id)); const firstCat = groupTiles[0].categoryId; const isMatch = groupTiles.every(t => t.categoryId === firstCat);
      if (isMatch) { newSolvedCount++; justSolvedNames.push(groupTiles[0].categoryName); justSolvedIds.push(firstCat); setSolvedGroups(prev => [...prev, group]); updatedTiles = updatedTiles.map(t => group.tileIds.includes(t.id) ? { ...t, status: 'solved', color: group.color } : t); }
      else { errorFound = true; updatedTiles = updatedTiles.map(t => group.tileIds.includes(t.id) ? { ...t, status: 'wrong' } : t); }
    });
    setTiles(updatedTiles);
    if (errorFound) {
      audio.playError(); const newMistakes = mistakes + 1; setMistakes(newMistakes);
      if (newMistakes >= MAX_MISTAKES) { 
          if (round < TOTAL_ROUNDS) { 
            setTimeout(() => { 
                if (!isMounted.current) return; 
                setRound(r => r + 1); 
                startRound(); 
            }, 1200); 
          } else { 
            audio.playWin(); 
            setIsComplete(true);
          } 
      }
      else { setTimeout(() => { if (!isMounted.current) return; setTiles(curr => curr.map(t => t.status === 'wrong' ? { ...t, status: 'neutral', color: undefined } : t)); setPendingGroups([]); setIsValidating(false); }, 1000); }
    } else {
      audio.playRowSolved(); setPendingGroups([]); setIsValidating(false);
      if (newSolvedCount > 0) updateStats({ rowsSolved: newSolvedCount, solvedCategoryIds: justSolvedIds });
      showCategoryReveals(justSolvedNames);
      if (solvedGroups.length + newSolvedCount === TOTAL_GROUPS) { 
          if (round < TOTAL_ROUNDS) { 
              setTimeout(() => { 
                  if (!isMounted.current) return; 
                  audio.playWin(); 
                  setRound(r => r + 1); 
                  startRound(); 
              }, 1200); 
          } else { 
              audio.playWin(); 
              setIsComplete(true);
          } 
      }
    }
  };

  const showCategoryReveals = (names: string[]) => { names.forEach((name, i) => { setTimeout(() => { if (!isMounted.current) return; setRevealedCategories([name]); setTimeout(() => { if (isMounted.current) setRevealedCategories(prev => prev.filter(n => n !== name)); }, 2500); }, i * 1200); }); };

  const handleNextLevelClick = () => {
    setIsExitingLevel(true);
    setExitAnimClass(EXIT_ANIMATIONS[0]); 
    setTiles(prev => prev.map(t => ({ ...t, status: 'exiting' }))); 
    setTimeout(() => { 
        onComplete({ mode: 'MIND MATCH', mistakes });
    }, 500); 
  };

  const currentLevelCats = useMemo(() => {
      const cats = new Map<string, boolean>();
      tiles.forEach(t => cats.set(t.categoryName, t.status === 'solved'));
      return Array.from(cats.entries()).map(([name, isSolved]) => ({ name, isSolved }));
  }, [tiles]);

  const solvedPersistentList = useMemo(() => {
    return solvedGroups.map(group => {
      const firstTile = tiles.find(t => group.tileIds.includes(t.id));
      return { name: firstTile?.categoryName || "???", color: group.color };
    });
  }, [solvedGroups, tiles]);

  if (isInitializing) return <div className="text-white text-center mt-20 animate-pulse font-righteous text-xl uppercase">LOADING ROUND {round}...</div>;

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto h-full px-4 relative select-none overflow-hidden pb-1">
      <ParticleOverlay ref={particleRef} />
      {debugMode && <DebugMenu onMainMenu={onExit} onSolveOne={() => {}} onSolvePuzzle={() => {}} onUndo={() => {}} />}
      
      {isComplete && !isReviewing && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center animate-fade-in bg-black/80">
           <div className="relative z-10 flex flex-col items-center min-w-[300px] text-center animate-celebrate">
             <NextLevelButton onClick={handleNextLevelClick} levelIndex={levelIndex} />
             <div onClick={() => setIsReviewing(true)} className="mt-4 text-white font-oswald uppercase tracking-widest text-sm hover:text-cyan-400 cursor-pointer animate-pulse transition-colors uppercase">TAP HERE TO REVIEW SOLVED PUZZLE</div>
          </div>
        </div>
      )}

      <div className="relative flex flex-col justify-center w-full items-end mb-1 py-1 shrink-0 z-[60] h-auto min-h-[50px] py-1 pr-4">
        <div className="flex items-center gap-3 relative">
            <h2 className="text-right pointer-events-none text-2xl md:text-4xl font-black tracking-widest text-deco-gold uppercase font-righteous drop-shadow-md leading-none">MIND MATCH</h2>
            {isReviewing ? (
                <button onClick={handleNextLevelClick} className="px-3 py-1 bg-neon-green text-black font-bold font-oswald uppercase rounded shadow-lg animate-pulse hover:scale-105 transition-transform uppercase">NEXT LEVEL &gt;&gt;</button>
            ) : (
                <button onClick={() => onOpenSettings?.(currentLevelCats)} className="p-1 rounded-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 active:animate-spin transition-all text-zinc-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a7.75 7.75 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            )}
        </div>
        <div className="flex items-center gap-1.5 mt-1 justify-end flex-wrap max-w-full">
            <div className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <span className="text-zinc-500 font-oswald text-[9px] mr-1.5 tracking-wider uppercase">TIMER</span>
                <span className={`font-bold font-oswald text-xs ${timeLeft <= 15 ? 'text-red-500 animate-pulse' : 'text-white'}`}>00:{timeLeft.toString().padStart(2, '0')}</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <span className="text-zinc-500 font-oswald text-[9px] mr-1.5 tracking-wider uppercase">MISTAKES</span>
                <span className={`font-bold font-oswald text-xs ${mistakes >= MAX_MISTAKES - 1 ? 'text-red-500' : 'text-white'}`}>{mistakes}/{MAX_MISTAKES}</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <span className="text-zinc-500 font-oswald text-[9px] mr-1.5 tracking-wider uppercase">ROUND</span>
                <span className="text-white font-bold font-oswald text-xs">{round}/{TOTAL_ROUNDS}</span>
            </div>
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col py-1 overflow-hidden min-h-0 relative z-10">
         <div key={`grid-round-${round}`} className="w-full h-full grid grid-cols-4 grid-rows-5 gap-1.5">{tiles.map(tile => (<div key={tile.id} className="relative w-full h-full"><Tile data={tile} data-tile-id={tile.id} onClick={(id) => { if (!isReviewing && !isValidating) { const t = tiles.find(x => x.id === id); if (t && t.status !== 'solved') { setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id].slice(0, 4)); setTiles(curr => curr.map(x => x.id === id ? { ...x, status: x.status === 'selected' ? 'neutral' : 'selected' } : x)); if (selectedIds.length === 3 && !selectedIds.includes(id)) { formPendingGroup([...selectedIds, id]); } } } }} /></div>))}</div>
      </div>

      {/* Solved Category Tabs - Pinned above footer */}
      <div className="w-full flex-shrink-0 flex flex-wrap items-center justify-center z-[70] min-h-[60px] pointer-events-none py-2 gap-1.5">
          {solvedPersistentList.map((cat, i) => (
             <div key={cat.name + i} className="animate-pop origin-bottom">
                 <div className={`px-3 py-1 rounded-t-lg text-[9px] md:text-xs font-bold uppercase tracking-widest border-x-2 border-t-2 border-b-0 border-white shadow-[0_-12px_24px_rgba(0,0,0,0.8)] font-oswald text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] ${cat.color.split(' ')[0]}`}>
                    {cat.name}
                 </div>
             </div>
          ))}
          {/* Temporary popping reveal for current match */}
          <div className="absolute inset-x-0 bottom-full flex flex-col-reverse items-center gap-1">
            {revealedCategories.map((name, i) => (
              <div key={name + i} className="animate-pop origin-center">
                <span className="text-deco-gold font-righteous text-2xl md:text-3xl uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{name}</span>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
export default Level5_Group;
