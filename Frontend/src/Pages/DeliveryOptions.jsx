// DeliveryOptions.jsx (in the pages folder)
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeliveryOptions = () => {
  const navigate = useNavigate();

  const situations = [
    { id: 1, title: "Delivery from Virar to Vasai" },
    { id: 2, title: "Delivery from Dadar to Borivali" },
    { id: 3, title: "Delivery from Thane to Kalyan" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Choose Your Delivery Situation</h2>
      <div className="flex justify-center space-x-4">
        {situations.map((situation) => (
          <div
            key={situation.id}
            className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/delivery/${situation.id}`)}
          >
            <h3 className="font-bold">{situation.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOptions;
