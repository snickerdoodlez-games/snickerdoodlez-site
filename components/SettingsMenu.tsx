
import React from 'react';
import { GameMode } from '../types';

export interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMainMenu: () => void;
  isMusicOn: boolean;
  toggleMusic: () => void;
  enabledModes: GameMode[];
  toggleMode: (mode: GameMode) => void;
  hintsEnabled: boolean;
  setHintsEnabled: (val: boolean) => void;
  onShowTutorial: () => void;
  onResetProgress: () => void;
  debugMode: boolean;
  setDebugMode: (val: boolean) => void;
  categories?: { name: string, isSolved: boolean }[];
}

const MODE_LABELS: Partial<Record<GameMode, string>> = {
  [GameMode.CLASSIC]: "Classic",
  [GameMode.LEVEL_3_INFINITE]: "Hidden",
  [GameMode.LEVEL_4_THEMED]: "Themed",
  [GameMode.LEVEL_5_GROUP]: "Mind",
  [GameMode.LEVEL_SYNONYMS]: "Synonyms",
  [GameMode.LEVEL_EMOJI]: "Emoji",
  [GameMode.LEVEL_TRANSLATION]: "Translation",
};

const SettingsMenu: React.FC<SettingsMenuProps> = ({ 
  isOpen, onClose, onMainMenu, isMusicOn, toggleMusic, 
  enabledModes, toggleMode, hintsEnabled, setHintsEnabled,
  onShowTutorial, onResetProgress, debugMode, setDebugMode, categories = []
}) => {
  if (!isOpen) return null;

  const hasCategories = categories && categories.length > 0;

  return (
    <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in">
      <div className="w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-4 shadow-2xl flex flex-col gap-3 overflow-hidden max-h-[95vh]">
        
        <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0">
          <h2 className="text-xl font-black font-righteous text-deco-gold uppercase tracking-widest">CONTROL CENTER</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Global Actions */}
        <div className="grid grid-cols-2 gap-2 shrink-0">
            <button 
              onClick={onMainMenu}
              className="col-span-2 py-2 bg-red-600 border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              EXIT TO MAIN MENU
            </button>
            <button 
              onClick={toggleMusic}
              className={`flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${isMusicOn ? 'bg-zinc-800 border-neon-green text-white' : 'bg-black border-zinc-800 text-zinc-600'}`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${isMusicOn ? 'bg-neon-green shadow-[0_0_8px_#00FF66]' : 'bg-zinc-700'}`} />
              SOUND
            </button>
            <button 
              onClick={() => setHintsEnabled(!hintsEnabled)}
              className={`flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${hintsEnabled ? 'bg-zinc-800 border-neon-blue text-white' : 'bg-black border-zinc-800 text-zinc-600'}`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${hintsEnabled ? 'bg-neon-blue shadow-[0_0_8px_#00E5FF]' : 'bg-zinc-700'}`} />
              HINTS
            </button>
            <button 
              onClick={() => setDebugMode(!debugMode)}
              className={`col-span-2 flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${debugMode ? 'bg-zinc-800 border-neon-gold text-white' : 'bg-black border-zinc-800 text-zinc-600'}`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${debugMode ? 'bg-neon-gold shadow-[0_0_8px_#FFD400]' : 'bg-zinc-700'}`} />
              ADMIN TOOLS
            </button>
        </div>

        {/* Categories Section - Only if in a level */}
        {hasCategories && (
          <div className="flex flex-col gap-1 shrink-0">
             <h3 className="text-deco-gold font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5">CURRENT GOALS</h3>
             <div className="grid grid-cols-2 gap-1.5 py-1">
                 {categories.map((cat) => (
                     <div 
                        key={cat.name}
                        className={`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter leading-none transition-all ${cat.isSolved ? 'bg-zinc-800/50 border-neon-green text-neon-green' : 'bg-black border-zinc-700 text-zinc-300'}`}
                     >
                        <span className="truncate mr-1">{cat.name}</span>
                        {cat.isSolved && <span className="text-xs">✓</span>}
                     </div>
                 ))}
             </div>
          </div>
        )}

        {/* Game Modes - Ultra Compact Grid */}
        <div className="flex flex-col gap-1 shrink-0">
          <h3 className="text-cyan-400 font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5">GAME MODES</h3>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {(Object.keys(MODE_LABELS) as GameMode[]).map((m) => {
              const isEnabled = enabledModes.includes(m);
              return (
                <button
                  key={m}
                  onClick={() => toggleMode(m)}
                  className={`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${isEnabled ? 'bg-zinc-800 border-cyan-500 text-white' : 'bg-black border-zinc-800 text-zinc-600'}`}
                >
                  <span className="font-bold font-oswald text-[9px] uppercase leading-none mb-0.5">{MODE_LABELS[m]}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isEnabled ? 'bg-cyan-500 shadow-[0_0_5px_cyan]' : 'bg-zinc-800'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Final Actions */}
        <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0">
            <div className="flex gap-2">
                <button onClick={onShowTutorial} className="flex-1 py-2 bg-zinc-800 border border-zinc-700 rounded-medium font-bold text-white text-[10px] font-oswald uppercase hover:bg-zinc-700 transition-colors">HOW TO PLAY</button>
                <button onClick={onResetProgress} className="flex-1 py-2 bg-zinc-900 border border-red-900 text-red-500 font-bold text-[10px] font-oswald uppercase hover:bg-red-950 transition-colors">RESET ALL</button>
            </div>
            <button 
              onClick={onClose}
              className="w-full py-3 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              RESUME PLAY
            </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
