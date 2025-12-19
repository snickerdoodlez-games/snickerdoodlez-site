import React, { useEffect, useState } from 'react';
import { getStats, GameStats } from '../services/storage';
import { getConsolidatedData, parseRawCSV } from '../services/csvData';
import { getEmojiData } from '../services/emojiData';
import { getSynonymData } from '../services/synonymData';
import { getRhymeData } from '../services/rhymeData';
import { GLOBAL_CSV_DATA } from '../services/globalCSV';

interface StatsProps {
  onClose: () => void;
}

const StatsOverlay: React.FC<StatsProps> = ({ onClose }) => {
  const [stats, setStats] = useState<GameStats | null>(null);
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    setStats(getStats());
    
    // Calculate total unique categories across ALL content sources
    const masterCount = getConsolidatedData().length;
    const emojiCount = getEmojiData().length;
    const synonymCount = getSynonymData().length;
    const rhymeCount = getRhymeData().length;
    
    // Translations from global data
    const globalRows = parseRawCSV(GLOBAL_CSV_DATA);
    const translationCount = globalRows.length;

    setTotalCategories(masterCount + emojiCount + synonymCount + rhymeCount + translationCount);
  }, []);

  if (!stats) return null;

  const averageTimeSeconds = stats.levelsCompleted > 0 
    ? Math.round((stats.totalTimeMs / 1000) / stats.levelsCompleted) 
    : 0;
  
  const averageMoves = stats.levelsCompleted > 0
    ? (stats.totalMoves / stats.levelsCompleted).toFixed(1)
    : "0.0";

  const formatTime = (seconds: number) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}m ${s}s`;
  };

  const StatCard = ({ title, value, subtext }: { title: string, value: string | number, subtext?: string }) => (
    <div className="bg-zinc-800 border border-zinc-600 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg font-oswald">
        <div className="text-zinc-400 uppercase text-xs tracking-widest mb-1">{title}</div>
        <div className="text-white text-3xl text-deco-gold font-bold">{value}</div>
        {subtext && <div className="text-zinc-500 text-[10px] mt-1 uppercase tracking-tighter">{subtext}</div>}
    </div>
  );

  return (
    <div className="absolute inset-0 z-[150] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in font-oswald">
      <div className="w-full max-w-lg bg-zinc-900 border-2 border-white rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-4xl font-black text-deco-gold uppercase text-center mb-8 tracking-widest">
            Player Stats
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <StatCard title="Levels Complete" value={stats.levelsCompleted} />
            <StatCard title="Avg Time / Level" value={formatTime(averageTimeSeconds)} />
            <StatCard title="Avg Moves / Level" value={averageMoves} />
            <StatCard title="Rows Solved" value={stats.rowsSolved} />
            <StatCard 
                title="Categories Found" 
                value={`${stats.solvedCategoryIds.length} / ${totalCategories}`} 
                subtext={`${Math.round((stats.solvedCategoryIds.length / (totalCategories || 1)) * 100)}% Discovered`}
            />
        </div>

        <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 mb-6">
            <h3 className="text-white uppercase tracking-wider text-center mb-4 border-b border-zinc-600 pb-2 font-bold">Hint Usage</h3>
            <div className="flex justify-around">
                <div className="text-center">
                    <div className="text-green-400 font-black text-3xl">{stats.hintsUsed}</div>
                    <div className="text-zinc-400 text-xs uppercase tracking-widest">Used</div>
                </div>
                <div className="text-center">
                    <div className="text-red-400 font-black text-3xl">{stats.hintsRefused}</div>
                    <div className="text-zinc-400 text-xs uppercase tracking-widest">Refused</div>
                </div>
            </div>
        </div>

        <button 
            onClick={onClose}
            className="w-full py-4 bg-white text-black font-black text-2xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg tracking-widest"
        >
            Close
        </button>
      </div>
    </div>
  );
};

export default StatsOverlay;