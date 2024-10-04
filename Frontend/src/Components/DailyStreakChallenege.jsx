import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const DailyStreakChallenge = () => {
  const [daysCollected, setDaysCollected] = useState(Array(7).fill(false));
  const [currentDay, setCurrentDay] = useState(1);
  const [daysUnlocked, setDaysUnlocked] = useState(Array(7).fill(false));

  // Load stored state on component mount
  useEffect(() => {
    const savedCurrentDay = localStorage.getItem('currentDay');
    const savedDaysCollected = localStorage.getItem('daysCollected');

    if (savedCurrentDay) setCurrentDay(JSON.parse(savedCurrentDay));
    if (savedDaysCollected) setDaysCollected(JSON.parse(savedDaysCollected));
  }, []);

  // Update unlocked days when the current day changes
  useEffect(() => {
    const newDaysUnlocked = [...daysUnlocked];
    newDaysUnlocked[currentDay - 1] = true;
    setDaysUnlocked(newDaysUnlocked);
  }, [currentDay]);

  // Unlock the next day after 24 hours
  useEffect(() => {
    const unlockNextDay = setTimeout(() => {
      if (currentDay < 7) {
        setCurrentDay((prevDay) => {
          const newDay = prevDay + 1;
          localStorage.setItem('currentDay', JSON.stringify(newDay)); // Store current day in localStorage
          return newDay;
        });
      }
    }, 86400000); // 24 hours in milliseconds

    return () => clearTimeout(unlockNextDay);
  }, [currentDay]);

  const handleCollect = async (day) => {
    if (daysCollected[day - 1]) {
      toast.error('Daily rewards already collected');
    } else {
      try {
        const coins = 100; // Reward value
        const response = await axios.put('/api/leaderboard/update', { day, coins });
    
        if (response.status === 200) {
          const newDaysCollected = [...daysCollected];
          newDaysCollected[day - 1] = true;
          setDaysCollected(newDaysCollected);
          localStorage.setItem('daysCollected', JSON.stringify(newDaysCollected));
    
          toast.success('Daily rewards collected');
        } else {
          throw new Error('Failed to collect rewards');
        }
      } catch (error) {
        toast.error('Error collecting rewards');
        console.error('Error collecting rewards:', error);
      }
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl mb-6">Daily Streak Challenge</h2>

        <div className="flex items-center space-x-6">
          {daysUnlocked.map((dayUnlocked, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  dayUnlocked ? 'bg-yellow-400' : 'bg-gray-50'
                }`}
              >
                {dayUnlocked ? (
                  <span>{index + 1}</span>
                ) : (
                  <span className="text-black">🔒</span>
                )}
              </div>
              <p className="mt-2">Day {index + 1}</p>
            </div>
          ))}
        </div>

        <button
          className="mt-6 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 disabled:opacity-50"
          disabled={!daysUnlocked[currentDay - 1]}
          onClick={() => handleCollect(currentDay)}
        >
          {daysCollected[currentDay - 1] ? 'Collected' : 'Collect'}
        </button>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DailyStreakChallenge;
