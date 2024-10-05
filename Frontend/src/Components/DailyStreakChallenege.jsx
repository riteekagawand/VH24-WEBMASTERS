import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Toast for notifications

const DailyStreakChallenge = () => {
  // State to track the collected status for each day
  const [daysCollected, setDaysCollected] = useState(Array(7).fill(false)); // 7 days collection status (false initially)
  const [currentDay, setCurrentDay] = useState(1); // Start with day 1
  const [daysUnlocked, setDaysUnlocked] = useState(Array(7).fill(false)); // Unlock days for collection
  
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
      // If the reward for the day is already collected, show an error toast
      toast.error('Daily rewards already collected');
    } else {
      // If it's the first collection, mark it as collected and show a success toast
      const newDaysCollected = [...daysCollected];
      newDaysCollected[day - 1] = true; // Mark the day as collected
      setDaysCollected(newDaysCollected);

      toast.success('Daily rewards collected');
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl mb-2 font-semibold">Daily Rewards</h2>

        <div className="flex items-center space-x-6">
          {/* Day Progress */}
          {daysUnlocked.map((dayUnlocked, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center ${
                  dayUnlocked ? 'bg-red-500' : 'bg-red-50'
                }`} // Increased size: w-24 h-24
              >
                {dayUnlocked ? (
                  <span>{index + 1}</span>
                ) : (
                  <span className="text-black">🔒</span> // Lock icon color updated to black
                )}
              </div>
              <p className="mt-2">Day {index + 1}</p>
            </div>
          ))}
        </div>

        {/* Collect button */}
        <button
          className="mt-6 bg-red-500 text-black px-6 py-3 rounded-md hover:bg-red-400 disabled:opacity-50"
          disabled={!daysUnlocked[currentDay - 1]} // Disable if the current day is not unlocked yet
          onClick={() => handleCollect(currentDay)} // Handle collection for the current day
        >
          {daysCollected[currentDay - 1] ? 'Collected' : 'Collect'}
        </button>
      </div>

      {/* Display Toast */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DailyStreakChallenge;
