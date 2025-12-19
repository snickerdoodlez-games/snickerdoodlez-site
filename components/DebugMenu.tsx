
import React from 'react';

interface DebugMenuProps {
  onMainMenu: () => void;
  onSolveOne: () => void;
  onSolvePuzzle: () => void;
  onUndo: () => void;
}

const DebugMenu: React.FC<DebugMenuProps> = ({ onMainMenu, onSolveOne, onSolvePuzzle, onUndo }) => {
  return (
    <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-3 rounded-full z-[200] border border-white/20 shadow-2xl transition-opacity duration-300">
      <DebugButton onClick={onMainMenu} label="MAIN MENU" color="bg-zinc-600" />
      <DebugButton onClick={onSolveOne} label="SOLVE 1" color="bg-blue-600" />
      <DebugButton onClick={onSolvePuzzle} label="SOLVE PUZZLE" color="bg-green-600" />
      <DebugButton onClick={onUndo} label="UNDO" color="bg-orange-600" />
    </div>
  );
};

const DebugButton = ({ onClick, label, color }: { onClick: () => void, label: string, color: string }) => (
  <button 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className={`px-4 py-2 ${color} text-white text-xs font-bold font-oswald rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap uppercase tracking-wider`}
  >
    {label}
  </button>
);

export default DebugMenu;
