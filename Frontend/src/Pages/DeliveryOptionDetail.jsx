// Pages/DeliveryOptionDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeliveryOptionDetail = () => {
  const { situationId } = useParams();
  const navigate = useNavigate();

  const situationDetails = {
    1: {
      title: "Delivery from Virar to Vasai",
      options: [
        { id: 1, description: "Route 1: Long route with heavy traffic" },
        { id: 2, description: "Route 2: Shortcut with high traffic" },
        { id: 3, description: "Route 3: Shortcut with medium traffic" },
      ],
    },
    2: {
      title: "Delivery from Dadar to Borivali",
      options: [
        { id: 1, description: "Route 1: Long route with no traffic" },
        { id: 2, description: "Route 2: Short route with construction" },
        { id: 3, description: "Route 3: Scenic route with minimal traffic" },
      ],
    },
    3: {
      title: "Delivery from Thane to Kalyan",
      options: [
        { id: 1, description: "Route 1: Direct route with mild traffic" },
        { id: 2, description: "Route 2: Route with a detour" },
        { id: 3, description: "Route 3: Route via expressway" },
      ],
    },
  };

  const { title, options } = situationDetails[situationId];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <h3 className="text-xl mb-4">Choose Your Route Option:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {options.map((option) => (
          <div key={option.id} className="bg-white shadow-md rounded-lg p-5 cursor-pointer hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold">{option.description}</h4>
            <button
              className="mt-2 text-blue-500 underline"
              onClick={() => alert(`You selected: ${option.description}`)} // Replace this with your route handling
            >
              Select this route
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOptionDetail;
