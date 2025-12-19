
import React from 'react';
import { getDailyHistory, getLocalISODate } from '../services/storage';

interface CalendarProps {
  onClose: () => void;
  onPlayToday: () => void;
}

const DailyCalendar: React.FC<CalendarProps> = ({ onClose, onPlayToday }) => {
  const history = getDailyHistory();
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const todayString = getLocalISODate(today);
  
  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun
  
  const days = [];
  // Empty slots for start of month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  // Actual days
  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(currentYear, currentMonth, i);
    const dateStr = getLocalISODate(d);
    days.push({
      day: i,
      dateStr: dateStr,
      isCompleted: history.includes(dateStr),
      isToday: dateStr === todayString,
      isPast: dateStr < todayString
    });
  }

  const isTodayCompleted = history.includes(todayString);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-zinc-900 border-2 border-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-black font-righteous text-deco-gold uppercase text-center mb-2">Daily Log</h2>
        <p className="text-zinc-400 text-center font-oswald mb-6 uppercase tracking-widest">
          {today.toLocaleString('default', { month: 'long' })} {currentYear}
        </p>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {['S','M','T','W','T','F','S'].map((d, i) => (
            <div key={i} className="text-center text-zinc-600 font-bold text-sm">{d}</div>
          ))}
          
          {days.map((d, i) => {
            if (!d) return <div key={i} />;
            
            let bgClass = 'bg-zinc-800 text-zinc-500';
            let borderClass = 'border-transparent';
            
            if (d.isCompleted) {
              bgClass = 'bg-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]';
            } else if (d.isToday) {
               bgClass = 'bg-zinc-700 text-white';
               borderClass = 'border-cyan-400 animate-pulse';
            }

            return (
              <div 
                key={i} 
                className={`
                  aspect-square rounded-lg flex items-center justify-center font-bold text-sm relative
                  border-2 ${borderClass} ${bgClass}
                `}
              >
                {d.day}
                {d.isCompleted && (
                  <div className="absolute -bottom-1 -right-1 text-yellow-400 text-xs">★</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
            {isTodayCompleted ? (
                 <div className="px-8 py-3 bg-zinc-800 text-green-400 font-bold font-oswald rounded-full border border-green-500/30 cursor-default">
                    PUZZLE COMPLETE
                 </div>
            ) : (
                <button 
                    onClick={onPlayToday}
                    className="px-8 py-3 bg-white text-black font-bold font-oswald rounded-full hover:bg-cyan-400 transition-colors shadow-lg hover:scale-105 active:scale-95"
                >
                    PLAY TODAY'S PUZZLE
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default DailyCalendar;
