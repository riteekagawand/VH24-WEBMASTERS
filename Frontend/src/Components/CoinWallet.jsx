import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa';

const CoinWallet = () => {
  // Initial coin count state
  const [coins, setCoins] = useState(0);

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
    </div>
  );
};

export default CoinWallet;
