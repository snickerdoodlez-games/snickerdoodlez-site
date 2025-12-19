
export interface CSVRow {
  id: string;
  name: string;
  words: string[];
}

export interface TileData {
  id: string;
  word: string;
  categoryId: string;
  categoryName: string;
  status: 'neutral' | 'selected' | 'solved' | 'wrong' | 'correct-preview' | 'placeholder' | 'hint' | 'exiting' | 'flipping-out' | 'flipping-in' | 'placeholder-colored' | 'locked';
  color?: string;
  isEmoji?: boolean;
}

export enum GameMode {
  MENU = 'MENU',
  CLASSIC = 'CLASSIC',
  LEVEL_2_FILTER = 'LEVEL_2_FILTER',
  LEVEL_3_INFINITE = 'LEVEL_3_INFINITE',
  LEVEL_4_THEMED = 'LEVEL_4_THEMED',
  LEVEL_EMOJI = 'LEVEL_EMOJI',
  LEVEL_5_GROUP = 'LEVEL_5_GROUP',
  LEVEL_SYNONYMS = 'LEVEL_SYNONYMS',
  LEVEL_RHYMES = 'LEVEL_RHYMES',
  SPEED_ROUND = 'SPEED_ROUND',
  LEVEL_TRANSLATION = 'LEVEL_TRANSLATION',
}

export interface Theme {
  name: string;
  gradient: string; 
  solvedColors: string[];
}

export const SUCCESS_PHRASES = [
  "FANTASTIC!",
  "BRILLIANT!",
  "EXCELLENT!",
  "UNSTOPPABLE!",
  "PURE GENIUS!",
  "SPECTACULAR!",
  "CRUSHED IT!",
  "MAGNIFICENT!",
  "OUTSTANDING!",
  "PERFECT!",
  "LEGENDARY!",
  "MIND BLOWING!",
  "FLAWLESS!",
  "VICTORY!",
  "TOP TIER!",
  "MASTERPIECE!",
  "SENSATIONAL!",
  "PHENOMENAL!",
  "INCREDIBLE!",
  "UNBEATABLE!",
  "SHARP!",
  "ON FIRE!",
  "SKILLFUL!",
  "BRAVO!",
  "GENIUS!"
];

export const EXIT_ANIMATIONS = [
  'animate-fade-out',
  'animate-scale-out-subtle',
  'animate-zoom-out'
];

// Mapping of class names to Hex codes for particle effects
export const NEON_PALETTE: Record<string, string> = {
  'bg-neon-red': '#FF073A',
  'bg-neon-orange': '#FF6A00',
  'bg-neon-hot-orange': '#FF2A00',
  'bg-neon-gold': '#FFD400',
  'bg-neon-yellow': '#F9FF00',
  'bg-neon-lime': '#39FF14',
  'bg-neon-green': '#00FF66',
  'bg-neon-mint': '#7CFFDA',
  'bg-neon-teal': '#00FFC3',
  'bg-neon-aqua': '#00FFF6',
  'bg-neon-sky-blue': '#33FFFF',
  'bg-neon-blue': '#00E5FF',
  'bg-neon-violet': '#9B00FF',
  'bg-neon-purple': '#D400FF',
  'bg-neon-lavender': '#C87CFF',
  'bg-neon-magenta': '#FF00FF',
  'bg-neon-pink': '#FF1FBF',
  'bg-neon-rose': '#FF4DA6',
  'bg-zinc-800': '#27272a',
  'bg-black': '#000000',
};

export const getHexFromColorClass = (className: string | undefined): string => {
  if (!className) return '#ffffff';
  // Handle complex classes like "bg-neon-red border-white"
  const parts = className.split(' ');
  for (const p of parts) {
      if (NEON_PALETTE[p]) return NEON_PALETTE[p];
  }
  return '#ffffff';
};

// Full spectrum ordered for gradient effects
export const SOLVED_COLORS = [
  'bg-neon-red shadow-sm border-white',
  'bg-neon-hot-orange shadow-sm border-white',
  'bg-neon-orange shadow-sm border-white',
  'bg-neon-gold shadow-sm border-white',
  'bg-neon-yellow shadow-sm border-white',
  'bg-neon-lime shadow-sm border-white', 
  'bg-neon-green shadow-sm border-white',
  'bg-neon-mint shadow-sm border-white',
  'bg-neon-teal shadow-sm border-white',
  'bg-neon-aqua shadow-sm border-white',
  'bg-neon-sky-blue shadow-sm border-white',
  'bg-neon-blue shadow-sm border-white',
  'bg-neon-violet shadow-sm border-white',
  'bg-neon-purple shadow-sm border-white',
  'bg-neon-lavender shadow-sm border-white',
  'bg-neon-magenta shadow-sm border-white',
  'bg-neon-pink shadow-sm border-white',
  'bg-neon-rose shadow-sm border-white'
];

export const THEMES: Theme[] = [
  {
    name: 'Spectrum',
    gradient: 'bg-black', 
    solvedColors: [
        'bg-neon-red border-white', 
        'bg-neon-hot-orange border-white', 
        'bg-neon-orange border-white', 
        'bg-neon-gold border-white',
        'bg-neon-yellow border-white', 
        'bg-neon-lime border-white', 
        'bg-neon-green border-white', 
        'bg-neon-teal border-white',
        'bg-neon-aqua border-white',
        'bg-neon-sky-blue border-white',
        'bg-neon-blue border-white',
        'bg-neon-violet border-white', 
        'bg-neon-purple border-white', 
        'bg-neon-magenta border-white',
        'bg-neon-pink border-white', 
        'bg-neon-rose border-white'
    ]
  },
  {
    name: 'Cool Breeze',
    gradient: 'bg-zinc-900',
    solvedColors: [
        'bg-neon-lime border-white',
        'bg-neon-green border-white',
        'bg-neon-mint border-white',
        'bg-neon-teal border-white',
        'bg-neon-aqua border-white', 
        'bg-neon-sky-blue border-white',
        'bg-neon-blue border-white', 
        'bg-neon-violet border-white',
        'bg-neon-purple border-white'
    ]
  },
  { 
    name: 'Warm Sunset', 
    gradient: 'bg-zinc-900',
    solvedColors: [
        'bg-neon-magenta border-white',
        'bg-neon-pink border-white', 
        'bg-neon-rose border-white',
        'bg-neon-red border-white', 
        'bg-neon-hot-orange border-white', 
        'bg-neon-orange border-white', 
        'bg-neon-gold border-white',
        'bg-neon-yellow border-white'
    ]
  },
  { 
    name: 'Synthwave', 
    gradient: 'bg-black',
    solvedColors: [
        'bg-neon-aqua border-white',
        'bg-neon-sky-blue border-white',
        'bg-neon-blue border-white',
        'bg-neon-violet border-white',
        'bg-neon-purple border-white',
        'bg-neon-magenta border-white',
        'bg-neon-pink border-white',
        'bg-neon-rose border-white'
    ]
  }
];
