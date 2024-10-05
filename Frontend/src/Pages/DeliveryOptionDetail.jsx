import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeliveryOptionDetail = () => {
  const { situationId } = useParams();
  const navigate = useNavigate();

  // State to track selected option, whether it's correct, and if user has made a choice
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  // Define optimal routes for each situation
  const optimalRoutes = {
    1: 3, // Optimal route for "Delivery from Palghar to Vasai" is Route 3
    2: 1, // Optimal route for "Delivery from Dadar to Borivali" is Route 1
    3: 3, // Optimal route for "Delivery from Thane to Kalyan" is Route 3
  };

  // Delivery situation data
  const situationDetails = {
    1: {
      title: "Delivery from Virar to Vasai",
      description: "The delivery involves multiple traffic choke points. Choose wisely to avoid long delays.",
      options: [
        { id: 1, description: "Route 1: Long route with heavy traffic" },
        { id: 2, description: "Route 2: Shortcut with high traffic" },
        { id: 3, description: "Route 3: Shortcut with medium traffic" },
      ],
    },
    2: {
      title: "Delivery from Dadar to Borivali",
      description: "You can take the scenic route, but one is faster and has no traffic at all.",
      options: [
        { id: 1, description: "Route 1: Long route with no traffic" },
        { id: 2, description: "Route 2: Short route with construction" },
        { id: 3, description: "Route 3: Scenic route with minimal traffic" },
      ],
    },
    3: {
      title: "Delivery from Thane to Kalyan",
      description: "There are a few different routes, including a detour and expressway. Choose the best for a quick delivery.",
      options: [
        { id: 1, description: "Route 1: Direct route with mild traffic" },
        { id: 2, description: "Route 2: Route with a detour" },
        { id: 3, description: "Route 3: Route via expressway" },
      ],
    },
  };

  const { title, description, options } = situationDetails[situationId];

  // Handle route selection
  const handleRouteSelect = (optionId) => {
    if (hasSelected) return; // Prevent multiple selections

    if (optionId === optimalRoutes[situationId]) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      alert("So close! Better Luck Next Time.");
    }

    setSelectedOptionId(optionId);
    setHasSelected(true); // Disable further selection
  };

  // Navigate to the training page
  const goToTraining = () => {
    navigate('/delivery');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold mb-4 mt-[-120px]">
        {title}
      </h2>
      <p className="text-lg text-center mb-6 max-w-4xl">{description}</p>
      <h3 className="text-3xl mb-6 text-center">Choose Your Route Option</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {options.map((option) => (
          <div
            key={option.id}
            className={`bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-80 ${
              selectedOptionId === option.id && isCorrect ? "bg-green-200" : ""
            } ${hasSelected ? "cursor-not-allowed opacity-50" : ""}`} // Disable cards after selection
            onClick={() => handleRouteSelect(option.id)}
          >
            <div className="p-4 flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-2 text-center">{option.description}</h4>
              <button
                className="mt-auto text-blue-500 underline hover:text-blue-600"
                disabled={hasSelected} // Disable button after selection
              >
                Select this route
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasSelected && (
        <div className="mt-6">
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            onClick={goToTraining}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryOptionDetail;
