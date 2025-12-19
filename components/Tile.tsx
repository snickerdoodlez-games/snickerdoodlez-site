import React, { useRef } from 'react';
import { TileData } from '../types';

interface TileProps {
  data: TileData;
  onClick: (id: string) => void;
  disabled?: boolean;
  gradientClass?: string;
  'data-tile-id'?: string;
  exitAnimation?: string;
}

const FONT_STYLE = { 
  fontFamily: '"Oswald", sans-serif',
  backfaceVisibility: 'hidden' as const,
  WebkitFontSmoothing: 'antialiased' as const,
  transform: 'translateZ(0)'
};

const Tile = React.forwardRef<HTMLDivElement, TileProps>(({ data, onClick, disabled, gradientClass, exitAnimation, ...props }, ref) => {
  
  // Dynamic text sizing based on length to prevent overflow
  const wordLength = data.word ? data.word.length : 0;
  
  // Adjusted text sizing for multiline fit - optimized for Oswald
  let textSizeClass = "text-sm sm:text-base leading-tight font-bold tracking-wide";
  if (data.isEmoji) {
    textSizeClass = "text-4xl sm:text-5xl md:text-6xl";
  } else if (wordLength > 12) {
    textSizeClass = "text-[11px] sm:text-xs leading-none font-bold tracking-normal";
  } else if (wordLength > 8) {
    textSizeClass = "text-xs sm:text-sm leading-tight font-bold";
  }

  // Set to uppercase for the arcade/puzzle machine look
  // Removed backdrop-blur-sm to ensure maximum crispness as requested
  const baseClasses = `relative w-full h-full rounded-medium flex items-center justify-center ${textSizeClass} cursor-pointer select-none shadow-sm p-1 text-center whitespace-normal break-words border-4 transition-all duration-200 uppercase antialiased`;
  
  let statusClasses = "";
  let content = data.word || "";
  let isLocked = false;
  
  const textColorClass = 'text-white';
  // Extra heavy drop shadow as requested for better visibility
  const textShadowClass = 'drop-shadow-[0_2px_2px_rgba(0,0,0,1)] drop-shadow-[0_0_1px_rgba(0,0,0,1)]';

  switch (data.status) {
    case 'neutral':
      statusClasses = `${gradientClass || 'bg-zinc-800'} border-white/40 ${textColorClass} hover:border-theme-primary hover:bg-zinc-700`;
      break;
    case 'selected':
      statusClasses = `bg-theme-primary border-theme-outline ${textColorClass} animate-selected-pulse z-20 ring-2 ring-white`;
      break;
    case 'solved':
      statusClasses = `${data.color || 'bg-zinc-800'} border-white/50 ${textColorClass} animate-solve-impact z-10`;
      break;
    case 'wrong':
       statusClasses = "bg-neon-red border-white text-white animate-shake z-10";
       break;
    case 'correct-preview':
       const bgClass = data.color || 'bg-zinc-900';
       statusClasses = `${bgClass} border-white/50 ${textColorClass} scale-95 z-10 shadow-md`;
       break;
    case 'placeholder':
       statusClasses = "opacity-0 pointer-events-none cursor-default border-none";
       break;
    case 'placeholder-colored':
       statusClasses = `${data.color || 'bg-zinc-800'} z-0`;
       content = ""; 
       break;
    case 'hint':
       statusClasses = "bg-black/80 border-neon-yellow text-white animate-pulse z-20 scale-105";
       break;
    case 'locked':
       statusClasses = "bg-zinc-800/80 border-neon-yellow text-white z-10 shadow-[inset_0_0_10px_rgba(255,212,0,0.3)]";
       isLocked = true;
       break;
    case 'exiting':
       const animClass = exitAnimation || 'animate-scale-out';
       const exitColor = data.color || gradientClass || 'bg-zinc-800';
       statusClasses = `${exitColor} ${textColorClass} border-transparent ${animClass} pointer-events-none z-50`;
       break;
    case 'flipping-out':
       statusClasses = `${data.color || 'bg-zinc-800'} ${textColorClass} animate-flip-out-x z-20 pointer-events-none`;
       break;
    case 'flipping-in':
       statusClasses = `${gradientClass || 'bg-zinc-800'} ${textColorClass} animate-flip-in-x z-20`;
       break;
  }

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
      if (disabled) return;
      if (['solved', 'placeholder', 'exiting', 'placeholder-colored', 'flipping-out', 'locked'].includes(data.status)) return;
      onClick(data.id);
  };

  return (
    <div 
      ref={(el) => {
          if (typeof ref === 'function') ref(el);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      onClick={handleClick}
      className={`${baseClasses} ${statusClasses}`}
      style={FONT_STYLE}
      {...props}
    >
       <span 
          className={`z-10 px-0.5 inline-block ${textShadowClass} pointer-events-none`}
       >
         {content}
       </span>
       
       {isLocked && (
           <div className="absolute top-1 right-1 w-3 h-3 text-neon-yellow opacity-80">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
               </svg>
           </div>
       )}
    </div>
  );
});

Tile.displayName = 'Tile';

export default React.memo(Tile);