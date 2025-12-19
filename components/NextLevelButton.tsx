
import React, { useState, useEffect } from 'react';

interface Props {
  onClick: () => void;
  label?: string;
  isMain?: boolean; // For "Main Menu" distinction
  themeColors?: string[]; // New prop for dynamic glow
  levelIndex?: number; // Added to display level count
}

const NextLevelButton: React.FC<Props> = ({ onClick, label = "NEXT PUZZLE", isMain = false, themeColors, levelIndex }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [opacity, setOpacity] = useState(0);

  // Map to new neon colors if possible, otherwise use fallback classes
  const primaryColorClass = themeColors && themeColors.length > 0 ? themeColors[0] : 'bg-neon-blue';
  const secondaryColorClass = themeColors && themeColors.length > 1 ? themeColors[1] : 'bg-neon-pink';

  useEffect(() => {
    if (!isMain && levelIndex) {
        // Initial state: Level Complete text fades in
        setDisplayedText(`LEVEL ${levelIndex} COMPLETE`);
        setOpacity(1);

        // At 1.25s, start fading out "Level Complete"
        const timer1 = setTimeout(() => {
            setOpacity(0);
        }, 1250);

        // At 1.55s (300ms transition), change text to "Next Puzzle" and fade in
        const timer2 = setTimeout(() => {
            setDisplayedText(label);
            setOpacity(1);
        }, 1550);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    } else {
        setDisplayedText(label);
        setOpacity(1);
    }
  }, [isMain, levelIndex, label]);

  return (
    <div className="relative group cursor-pointer p-4 flex justify-center" onClick={onClick}>
      {/* Outer Glow Ring */}
      <div className={`absolute inset-4 rounded-large blur-lg opacity-40 group-hover:opacity-60 transition duration-500 bg-gradient-to-r from-neon-white via-zinc-400 to-zinc-600`}></div>
      
      {/* Dynamic Color Glow */}
       <div className={`absolute inset-4 rounded-large blur-lg opacity-40 group-hover:opacity-60 transition duration-500 bg-gradient-to-r ${primaryColorClass.replace('bg-', 'from-')} ${secondaryColorClass.replace('bg-', 'to-')}`}></div>

      {/* Main Button Body - Using rounded-large (22px) */}
      <button className="relative px-12 py-4 md:px-16 md:py-6 bg-theme-surface border-4 border-white rounded-large leading-tight flex items-center justify-center gap-6 overflow-hidden transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] z-20 min-w-[300px] min-h-[80px]">
        
        {/* Shimmer Effect Overlay */}
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none z-20"></div>

        {/* Text Container */}
        <div 
          className="flex flex-col items-center justify-center z-30 transition-opacity duration-300 ease-in-out"
          style={{ opacity: opacity }}
        >
            <span className="text-2xl md:text-3xl font-bold font-oswald uppercase tracking-widest text-neon-white whitespace-nowrap">
                {displayedText}
            </span>
        </div>
      </button>
    </div>
  );
};

export default NextLevelButton;
