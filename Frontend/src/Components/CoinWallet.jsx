import React from 'react';
import { FaCoins } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CoinWallet = () => {
  const [coins, setCoins] = useState(0);

  // Fetch initial coins from the backend
  const fetchCoins = async () => {
    try {
      const response = await axios.get('/update'); // Update with your actual endpoint
      setCoins(response.data.coins); // Adjust based on your response structure
    } catch (error) {
      console.error('Error fetching coins:', error);
    }
  };

  // Collect daily rewards and update coins
  const collectDailyReward = async (amount) => {
    try {
      const newCoins = coins + amount;
      setCoins(newCoins);
      await axios.post('/api/update-coins', { coins: newCoins }); // Post updated coins to backend
    } catch (error) {
      console.error('Error updating coins:', error);
    }
  };

  useEffect(() => {
    fetchCoins(); // Fetch coins on component mount
  }, []);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center space-y-2 bg-white p-2 rounded-l-full shadow-lg">
      {/* Wallet Icon */}
      <div className="bg-yellow-400 rounded-full p-3 shadow-lg flex justify-center items-center">
        <FaCoins className="text-blue-800 h-8 w-8" />
      </div>

      {/* Coin Count */}
      <div className="bg-white text-black py-1 px-4 rounded-full shadow-md flex items-center justify-center text-lg font-bold">
        {coins}
      </div>

      {/* Collect Daily Rewards Button */}
      <button 
        onClick={() => collectDailyReward(100)} // Assuming a reward of 100 coins
        className="bg-blue-500 text-white py-1 px-3 rounded-full mt-4 shadow-md"
      >
        Collect Daily Reward
      </button>
    </div>
  );
};

export default CoinWallet;
