import React from 'react';

interface MenuProps {
  onStart: () => void;
  onSettings: () => void;
  onStats: () => void;
  lastLevel?: number;
  onDebug?: () => void;
}

export const LevelMenu: React.FC<MenuProps> = ({ onStart, onSettings, onStats, lastLevel }) => {
  const levelToDisplay = lastLevel ? lastLevel : 1;
  const buttonText = levelToDisplay > 1 ? `CONTINUE LEVEL ${levelToDisplay}` : "START GAME";

  return (
    <div className="flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative">
      
      {/* Center Content: Logo + Start Button */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
          
          {/* Logo Image */}
          <div className="mb-8 flex justify-center w-full relative">
             
             {/* Subtle Glow Behind Brain */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/30 rounded-full blur-[60px] pointer-events-none animate-brain-glow" />

             <img src="https://lh3.googleusercontent.com/d/1GWUN6DaooRsnsj4ZaNPqbfvSJ8o7ILtw" 
                alt="Word Pairing Machine" 
                className="w-80 md:w-[500px] lg:w-[600px] h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] relative z-10"
             />
          </div>
          
          <div className="w-24 h-1 bg-neon-white mb-12 animate-fade-in opacity-80 shadow-[0_0_15px_white]" style={{ animationDelay: '0.3s' }}></div>
          
          <div className="flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center" style={{ animationDelay: '0.4s' }}>
            
            {/* Button Container with Hover Scale */}
            <div className="relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95">
                
                {/* Glow behind the button */}
                <div className="absolute inset-0 bg-neon-gold/20 rounded-[22px] blur-xl group-hover:bg-neon-gold/40 transition-all duration-300" />

                {/* The Border/Track Container - Dark Base for Contrast */}
                <div className="relative rounded-[22px] overflow-hidden p-[4px] bg-zinc-800 shadow-lg">
                    
                    {/* Rotating Light Effect */}
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
                        style={{
                            background: 'conic-gradient(transparent 180deg, white 360deg)',
                            animation: 'spin 4s linear infinite'
                        }}
                    />

                    {/* The Button Face - Beveled */}
                    <button
                        onClick={onStart}
                        className="
                            relative w-full h-full bg-zinc-900 rounded-[18px] px-8 py-4
                            text-white text-4xl font-bold tracking-widest uppercase font-oswald
                            flex items-center justify-center
                            border-t-[3px] border-l-[3px] border-zinc-600
                            border-b-[4px] border-r-[4px] border-black
                            shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]
                            active:border-t-black active:border-l-black active:border-b-zinc-700 active:border-r-zinc-700
                            active:translate-y-[2px]
                            transition-all duration-75 z-10
                        "
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

          </div>
      </div>

      {/* Bottom Buttons - Pushed to absolute bottom of container */}
      <div className="w-full flex justify-center gap-4 pb-4 mt-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <button
          onClick={onStats}
          className="
            group relative px-6 py-3 rounded-medium min-w-[120px]
            bg-zinc-900 text-zinc-500 hover:text-neon-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
            border border-zinc-800 hover:border-zinc-500
          "
        >
          STATS
        </button>
        <button
          onClick={onSettings}
          className="
            group relative px-6 py-3 rounded-medium min-w-[120px]
            bg-zinc-900 text-zinc-500 hover:text-neon-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
            border border-zinc-800 hover:border-zinc-500
          "
        >
          SETTINGS
        </button>
      </div>
    </div>
  );
};

export default LevelMenu;