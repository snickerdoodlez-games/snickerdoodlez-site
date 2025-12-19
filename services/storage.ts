export const STORAGE_KEYS = {
  LEVEL: 'wpm_level',
  TUTORIAL_SEEN: 'wpm_tutorial_seen_v2', // Versioned in case we update it later
  TUTORIAL_SEEN_L2: 'wpm_tutorial_seen_l2', // Specific for Level 2
  TUTORIAL_SEEN_L5: 'wpm_tutorial_seen_l5', // Specific for Level 5
  GAME_STATS: 'wpm_game_stats',
  DAILY_HISTORY: 'wpm_daily_history',
};

// Robust local date formatter YYYY-MM-DD
export const getLocalISODate = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getSavedLevel = (): number => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEVEL);
    if (!saved) return 1;
    const parsed = parseInt(saved, 10);
    return isNaN(parsed) ? 1 : parsed;
  } catch {
    return 1;
  }
};

export const saveLevel = (level: number) => {
  localStorage.setItem(STORAGE_KEYS.LEVEL, level.toString());
};

export const isTutorialSeen = (): boolean => {
  return !!localStorage.getItem(STORAGE_KEYS.TUTORIAL_SEEN);
};

export const markTutorialSeen = () => {
  localStorage.setItem(STORAGE_KEYS.TUTORIAL_SEEN, 'true');
};

export const isLevel2TutorialSeen = (): boolean => {
  return !!localStorage.getItem(STORAGE_KEYS.TUTORIAL_SEEN_L2);
};

export const markLevel2TutorialSeen = () => {
  localStorage.setItem(STORAGE_KEYS.TUTORIAL_SEEN_L2, 'true');
};

export const isLevel5TutorialSeen = (): boolean => {
  return !!localStorage.getItem(STORAGE_KEYS.TUTORIAL_SEEN_L5);
};

export const markLevel5TutorialSeen = () => {
  localStorage.setItem(STORAGE_KEYS.TUTORIAL_SEEN_L5, 'true');
};

// --- STATS SYSTEM ---

export interface GameStats {
  rowsSolved: number;
  levelsCompleted: number;
  totalTimeMs: number;
  hintsUsed: number;
  hintsRefused: number;
  totalMoves: number;
  solvedCategoryIds: string[];
}

const DEFAULT_STATS: GameStats = {
  rowsSolved: 0,
  levelsCompleted: 0,
  totalTimeMs: 0,
  hintsUsed: 0,
  hintsRefused: 0,
  totalMoves: 0,
  solvedCategoryIds: []
};

export const getStats = (): GameStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.GAME_STATS);
    if (!stored) return DEFAULT_STATS;
    return { ...DEFAULT_STATS, ...JSON.parse(stored) };
  } catch {
    return DEFAULT_STATS;
  }
};

export const updateStats = (updates: Partial<GameStats>) => {
  try {
    const current = getStats();
    
    // Merge array explicitly
    let updatedCats = current.solvedCategoryIds;
    if (updates.solvedCategoryIds) {
        // Add unique only
        const newSet = new Set([...current.solvedCategoryIds, ...updates.solvedCategoryIds]);
        updatedCats = Array.from(newSet);
    }

    const updated: GameStats = {
        rowsSolved: current.rowsSolved + (updates.rowsSolved || 0),
        levelsCompleted: current.levelsCompleted + (updates.levelsCompleted || 0),
        totalTimeMs: current.totalTimeMs + (updates.totalTimeMs || 0),
        hintsUsed: current.hintsUsed + (updates.hintsUsed || 0),
        hintsRefused: current.hintsRefused + (updates.hintsRefused || 0),
        totalMoves: current.totalMoves + (updates.totalMoves || 0),
        solvedCategoryIds: updatedCats
    };

    localStorage.setItem(STORAGE_KEYS.GAME_STATS, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to update stats", e);
  }
};

// Added getDailyHistory to fix reported module error in DailyCalendar.tsx
export const getDailyHistory = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.DAILY_HISTORY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

// Added helper to mark a day as completed in the daily history
export const markDailyCompleted = (dateStr: string) => {
  try {
    const history = getDailyHistory();
    if (!history.includes(dateStr)) {
      history.push(dateStr);
      localStorage.setItem(STORAGE_KEYS.DAILY_HISTORY, JSON.stringify(history));
    }
  } catch (e) {
    console.error("Failed to update daily history", e);
  }
};
