
import React, { useState, useEffect } from 'react';

interface AnimationLabProps {
  onExit: () => void;
}

const CATEGORIES = [
  {
    title: "Movement",
    items: [
      { name: "Slide Left", class: "animate-slide-in-left", icon: "⬅️" },
      { name: "Slide Right", class: "animate-slide-in-right", icon: "➡️" },
      { name: "Slide Down", class: "animate-slide-in-down", icon: "⬇️" },
      { name: "Slide Up", class: "animate-slide-in-up", icon: "⬆️" },
      { name: "Drift", class: "animate-drift-in", icon: "🍃" },
      { name: "Pop", class: "animate-pop-in", icon: "💥" },
      { name: "Throw", class: "animate-throw-in", icon: "🥎" },
      { name: "Orbit", class: "animate-orbit-in", icon: "🪐" },
    ]
  },
  {
    title: "Scale & Size",
    items: [
      { name: "Zoom In", class: "animate-zoom-in", icon: "🔍" },
      { name: "Zoom Out", class: "animate-zoom-out-enter", icon: "🔭" },
      { name: "Pulse", class: "animate-pulse-once", icon: "💓" },
      { name: "Inflate", class: "animate-inflate", icon: "🎈" },
    ]
  },
  {
    title: "Opacity & Light",
    items: [
      { name: "Crossfade", class: "animate-crossfade", icon: "🌗" },
      { name: "Flash", class: "animate-flash-in", icon: "📸" },
      { name: "Glow", class: "animate-glow-reveal", icon: "✨" },
      { name: "Flicker", class: "animate-flicker-in", icon: "🕯️" },
    ]
  },
  {
    title: "Rotation",
    items: [
      { name: "Spin", class: "animate-spin-in", icon: "🔄" },
      { name: "Flip X", class: "animate-flip-in-x", icon: "💳" },
      { name: "Settle", class: "animate-rotate-settle", icon: "🏷️" },
      { name: "Vert 360", class: "animate-rotate-vert-center", icon: "😵‍💫" },
    ]
  },
  {
    title: "Distortion",
    items: [
      { name: "Typewriter", class: "animate-typewriter overflow-hidden whitespace-nowrap", text: "HELLO WORLD" },
      { name: "Blur", class: "animate-blur-in", icon: "🌫️" },
      { name: "Chromatic", class: "animate-chromatic-flash", icon: "👓" },
      { name: "Pixelate", class: "animate-pixelate-in", icon: "👾" },
      { name: "Melt", class: "animate-melt-in", icon: "🫠" },
      { name: "Smoke", class: "animate-smoke-in", icon: "🚬" },
      { name: "Shadow Pop", class: "animate-text-shadow-pop-tr", icon: "⛱️" },
    ]
  },
  {
    title: "Physics",
    items: [
      { name: "Bounce", class: "animate-bounce-in", icon: "🏀" },
      { name: "Drop", class: "animate-drop-in", icon: "📦" },
    ]
  },
  {
    title: "Specialty",
    items: [
      { name: "Glitch", class: "animate-glitch-in", icon: "📺" },
      { name: "Terminal", class: "animate-terminal overflow-hidden whitespace-nowrap border-r-2 border-green-500 pr-1", text: "> SYSTEM READY" },
      { name: "Hero", class: "animate-hero-overshoot", icon: "🦸" },
    ]
  },
  {
    title: "Exit Animations",
    items: [
      { name: "Spin Out", class: "animate-spin-out-page", icon: "🌀" },
      { name: "Orbit Blur", class: "animate-orbit-blur-out", icon: "💫" },
      { name: "Spin Flip", class: "animate-spin-flip-out", icon: "🔄" },
      { name: "Pop Slide Up", class: "animate-pop-slide-up-out", icon: "⬆️" },
      { name: "Pop Slide Down", class: "animate-pop-slide-down-out", icon: "⬇️" },
      { name: "Pop Up Spin", class: "animate-pop-slide-up-spin", icon: "🌀⬆️" },
      { name: "Pop Down Spin", class: "animate-pop-slide-down-spin", icon: "🌀⬇️" },
      { name: "Roll Out Left", class: "animate-roll-out-left", icon: "🥎⬅️" },
      { name: "Rotate Vert", class: "animate-rotate-vert-center-exit", icon: "😵‍💫" },
      { name: "Fade Out", class: "animate-fade-out", icon: "🌫️" },
      { name: "Swing Out Btm", class: "animate-swing-out-bottom-fwd", icon: "👋" },
      { name: "Slide Out Back", class: "animate-slide-out-bck-center", icon: "🔙" },
      { name: "Rotate Out", class: "animate-rotate-out-center", icon: "😵" },
      { name: "Swing Out Top", class: "animate-swing-out-top-bck", icon: "🔝" },
      { name: "Flip Out Top", class: "animate-flip-out-hor-top", icon: "🙃" },
      { name: "Slide Fwd", class: "animate-slide-out-fwd-center", icon: "⏩" },
    ]
  }
];

const AnimationLab: React.FC<AnimationLabProps> = ({ onExit }) => {
  const [trigger, setTrigger] = useState(0);

  const refreshAnimations = () => {
    setTrigger(prev => prev + 1);
  };

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden relative">
      <div className="p-4 flex justify-between items-center border-b border-zinc-800 bg-black z-20 shadow-md">
        <h2 className="text-2xl font-black font-righteous text-deco-gold tracking-widest uppercase text-sm md:text-2xl">Animation Lab</h2>
        <div className="flex gap-4">
            <button onClick={refreshAnimations} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded font-oswald uppercase text-sm">
                Replay All
            </button>
            <button onClick={onExit} className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded font-oswald uppercase text-sm">
                Exit Lab
            </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
            {CATEGORIES.map((cat, catIdx) => (
                <div key={catIdx} className="space-y-4">
                    <h3 className="text-cyan-400 font-oswald text-xl uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">{cat.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cat.items.map((item, idx) => (
                            <AnimationCard key={`${catIdx}-${idx}-${trigger}`} item={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const AnimationCard: React.FC<{ item: any }> = ({ item }) => {
    const [key, setKey] = useState(0);

    return (
        <div 
            className="group bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-white transition-colors cursor-pointer min-h-[120px] overflow-hidden"
            onMouseEnter={() => setKey(k => k + 1)}
            onClick={() => setKey(k => k + 1)}
        >
            <div key={key} className={`text-4xl ${item.class} ${item.text ? 'text-lg font-mono text-green-400' : ''}`}>
                {item.text ? item.text : item.icon}
            </div>
            <div className="text-zinc-400 font-oswald text-sm uppercase tracking-wider text-center group-hover:text-white transition-colors">
                {item.name}
            </div>
        </div>
    );
};

export default AnimationLab;
