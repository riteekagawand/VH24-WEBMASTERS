import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Toast for notifications

const DailyStreakChallenge1 = () => {
  // State to track the collected status for each day
  const [daysCollected, setDaysCollected] = useState(Array(7).fill(false)); // 7 days collection status (false initially)
  const [currentDay, setCurrentDay] = useState(1); // Start with day 1
  const [daysUnlocked, setDaysUnlocked] = useState(Array(7).fill(false)); // Unlock days for collection
  const [streakCount, setStreakCount] = useState(0); // To track the continuous collection streak

  useEffect(() => {
    // Unlock the current day
    const newDaysUnlocked = [...daysUnlocked];
    newDaysUnlocked[currentDay - 1] = true; // Unlock current day
    setDaysUnlocked(newDaysUnlocked);

    // Set up time interval to unlock the next day after 24 hours
    const unlockNextDay = setTimeout(() => {
      if (currentDay < 7) {
        setCurrentDay(prevDay => prevDay + 1); // Move to the next day
      }
    }, 86400000); // 24 hours in milliseconds

    return () => clearTimeout(unlockNextDay); // Clean up timer
  }, [currentDay]);

  const handleCollect = (day) => {
    if (daysCollected[day - 1]) {
      toast.error('Daily rewards already collected');
    } else {
      const newDaysCollected = [...daysCollected];
      newDaysCollected[day - 1] = true;
      setDaysCollected(newDaysCollected);

      // Update streak count if the current day is collected
      setStreakCount(streakCount + 1);

      toast.success('Daily rewards collected');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3"> {/* Reduced vertical space */}
      {/* Header */}
      <h2 className="text-4xl font-semibold">Daily Rewards</h2> {/* Removed bottom margin */}
      <div className="text-center text-gray-900">
        Learn every day to build a streak.
      </div>

      {/* Progress Circle */}
      <div className="relative">
        <div className="w-28 h-28 rounded-full border-4 border-red-500 flex items-center justify-center">
          <span className="text-4xl text-red-500">{streakCount}</span>
        </div>
        <span className="absolute bottom-0 right-0 text-red-500 text-3xl">🔥</span> {/* Increased icon size */}
      </div>

      {/* Day Progress */}
      <div className="flex items-center space-x-4">
        {daysUnlocked.map((dayUnlocked, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${
                dayUnlocked ? 'bg-red-500 text-white' : 'bg-gray-100'
              }`}>
              {dayUnlocked ? (
                <span className='font-lg'>{index + 1}</span>
              ) : (
                <span className="text-black">🔒</span>
              )}
            </div>
            <p className="text-center text-sm mt-1">{'FS'.charAt(index % 2)} Day {index + 1}</p> {/* Reduced gap */}
          </div>
        ))}
      </div>

      {/* Collect Button */}
      <button
        className="mt-4 bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-400 disabled:opacity-50"
        disabled={!daysUnlocked[currentDay - 1]} // Disable if the current day is not unlocked yet
        onClick={() => handleCollect(currentDay)}>
        {daysCollected[currentDay - 1] ? 'Collected' : 'Collect'}
      </button>

      {/* Display Toast */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DailyStreakChallenge1;
