import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DailyStreakChallenge1 = () => {
  const [daysCollected, setDaysCollected] = useState(Array(7).fill(false));
  const [currentDay, setCurrentDay] = useState(1);
  const [daysUnlocked, setDaysUnlocked] = useState(Array(7).fill(false));
  const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    const newDaysUnlocked = [...daysUnlocked];
    newDaysUnlocked[currentDay - 1] = true;
    setDaysUnlocked(newDaysUnlocked);

    const unlockNextDay = setTimeout(() => {
      if (currentDay < 7) {
        setCurrentDay(prevDay => prevDay + 1);
      }
    }, 86400000);

    return () => clearTimeout(unlockNextDay);
  }, [currentDay]);

  const handleCollect = (day) => {
    if (daysCollected[day - 1]) {
      toast.error('Daily rewards already collected');
    } else {
      const newDaysCollected = [...daysCollected];
      newDaysCollected[day - 1] = true;
      setDaysCollected(newDaysCollected);

      setStreakCount(streakCount + 1);
      toast.success('Daily rewards collected');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-5xl font-bold">Daily Rewards</h2> 
      <div className="text-center text-gray-900 text-lg"></div>

      <div className="relative">
        <div className="w-48 h-48 rounded-full border-8 border-red-500 flex items-center justify-center">
          <span className="text-6xl text-red-500">{streakCount}</span>
        </div>
        <span className="absolute bottom-0 right-0 text-red-500 text-6xl">🔥</span>
      </div>

      <div className="flex items-center space-x-4">
        {daysUnlocked.map((dayUnlocked, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center ${
                dayUnlocked ? 'bg-red-500 text-white' : 'bg-gray-100'
              }`}>
              {dayUnlocked ? (
                <span className='text-2xl'>{index + 1}</span>
              ) : (
                <span className="text-black text-3xl">🔒</span>
              )}
            </div>
            <p className="text-center text-sm mt-1">{'FS'.charAt(index % 2)} Day {index + 1}</p>
          </div>
        ))}
      </div>

      <button
        className="mt-4 bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-400 disabled:opacity-50"
        disabled={!daysUnlocked[currentDay - 1]}
        onClick={() => handleCollect(currentDay)}>
        {daysCollected[currentDay - 1] ? 'Collected' : 'Collect'}
      </button>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DailyStreakChallenge1;
