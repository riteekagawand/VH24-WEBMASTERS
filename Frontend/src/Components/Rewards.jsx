import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import amazon1 from '../assets/amazon-1.png'; 
import fireboltt from '../assets/fireboltt.jpeg';
import flipkart from '../assets/flipkart.jpeg';
import lenskart from '../assets/lenskart.jpeg';

const Rewards = () => {
  const [wallet, setWallet] = useState(1000); // Initial wallet balance
  const [cards, setCards] = useState([
    { id: 1, cost: 100, offer: '10% off', redeemed: false, image: fireboltt },
    { id: 2, cost: 150, offer: 'Free Shipping', redeemed: false, image: amazon1 },
    { id: 3, cost: 200, offer: 'Buy 1 Get 1 Free', redeemed: false, image: lenskart },
    { id: 4, cost: 250, offer: '15% off', redeemed: false, image: flipkart },
    { id: 5, cost: 300, offer: '20% off', redeemed: false, image: fireboltt },
    { id: 6, cost: 350, offer: 'Exclusive Access', redeemed: false, image: amazon1 },
  ]);

  const handleRedeem = (id, cost) => {
    if (wallet >= cost) {
      setWallet(wallet - cost);
      setCards(
        cards.map((card) =>
          card.id === id ? { ...card, redeemed: true } : card
        )
      );
      console.log('Localhost says: Your reward has been redeemed!');
    } else {
      console.log('Localhost says: Not enough 🪙!');
    }
  };  


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Balance Display */}
      <div className="absolute top-6 right-6 bg-white rounded-lg shadow-md p-4">
        <span className="text-lg font-bold">Balance:</span>
        <span className="text-lg font-bold ml-2">{wallet} 🪙</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 gap-6 mt-16"> {/* Added margin-top to create spacing below the balance */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-60 w-full relative"
          >
            {/* Image Display in Top Left */}
            <div className="absolute top-4 left-4">
              <img src={card.image} alt={`Reward ${card.id}`} className="w-12 h-12 rounded-full object-cover" />
            </div>

            {/* Coin Display in Top Right */}
            <div className="absolute top-4 right-4 flex items-center">
              <span className="text-lg font-bold">{card.cost}</span>
              <span className="ml-1">🪙</span>
            </div>

            {/* Offer Text */}
            <div className="text-center text-md font-bold mt-16">A special offer just for you!</div>
            <div className="text-center text-xl font-bold text-red-500">{card.offer}</div>

            {/* Redeem Button */}
            <button
              className={`${
              card.redeemed
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600'
              } text-white font-semi-bold py-1 px-2 text-sm rounded-full mx-auto block`} // Centering with mx-auto and block display
              onClick={() => handleRedeem(card.id, card.cost)}
              disabled={card.redeemed}
              >
              {card.redeemed ? 'Redeemed' : 'Apply Coupon'}
            </button>

            <div className="text-center text-gray-500 text-sm mt-2">
              No thanks, later!
            </div>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default Rewards;