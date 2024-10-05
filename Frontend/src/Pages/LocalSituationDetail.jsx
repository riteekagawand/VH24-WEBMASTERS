import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import backg from '../assets/backg.jpg';
import backg2 from '../assets/backg2.jpg';
import backg3 from '../assets/backg3.jpg';
import MapComponent from '../Components/MapComponent';

const LocalSituationDetail = () => {
  const { situationId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { currentLocation, destination } = location.state || {};

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Define optimal routes for each local situation
  const optimalRoutes = {
    1: 2, // Optimal route for "Local Situation 1" is Route 2
    2: 3, // Optimal route for "Local Situation 2" is Route 3
    3: 1, // Optimal route for "Local Situation 3" is Route 1
  };

  // Local situation details with options
  const situationDetails = {
    1: {
      title: "Local Delivery from Park Street to High Road",
      description: "The delivery involves narrow roads and potential traffic jams. Choose wisely!",
      options: [
        { id: 1, description: "Route 1: Scenic route with possible delays", details: "A beautiful scenic route but often has unexpected traffic." },
        { id: 2, description: "Route 2: Shortcut with moderate traffic", details: "A shorter option with manageable traffic." },
        { id: 3, description: "Route 3: Longer route with no traffic", details: "This longer route ensures no traffic and a smooth journey." },
      ],
    },
    2: {
      title: "Local Delivery from City Center to North Plaza",
      description: "You must choose the best route to avoid delays.",
      options: [
        { id: 1, description: "Route 1: Busy market route", details: "A route through a busy market area, with potential delays." },
        { id: 2, description: "Route 2: Shortcut with occasional traffic", details: "This shortcut is efficient but may have light traffic." },
        { id: 3, description: "Route 3: Scenic route with minimal traffic", details: "A scenic route that is usually clear of traffic." },
      ],
    },
    3: {
      title: "Local Delivery from West End to East Park",
      description: "Pick the best route for a timely delivery.",
      options: [
        { id: 1, description: "Route 1: Direct route with minimal traffic", details: "A direct route that usually avoids congestion." },
        { id: 2, description: "Route 2: Shortcut with high traffic", details: "A shorter route, but prone to heavy traffic during peak hours." },
        { id: 3, description: "Route 3: Longer route with clear roads", details: "A longer route that guarantees a smooth journey." },
      ],
    },
  };

  const backgroundImages = {
    1: backg,
    2: backg2,
    3: backg3,
  };

  const { title, description, options } = situationDetails[situationId];

  const handleRouteSelect = (optionId) => {
    if (hasSelected) return;

    setSelectedOptionId(optionId);
    setHasSelected(true);

    // Check if the selected route is optimal
    if (optionId === optimalRoutes[situationId]) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setShowModal(true);
  };

  const goToLocalSituations = () => {
    navigate('/local');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold mb-4 mt-[-5px] text-blue-500">{title}</h2>
      <p className="text-lg text-center mb-6 max-w-4xl">{description}</p>
      <div><MapComponent origin={currentLocation} destination={destination} /></div>
      <h3 className="text-3xl mb-6 text-center">Choose Your Route Option</h3>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {options.map((option) => (
          <div
            key={option.id}
            className={`relative bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-80 max-w-xs mx-auto
              ${selectedOptionId === option.id && isCorrect ? 'bg-green-200' : ''} 
              ${hasSelected ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={() => handleRouteSelect(option.id)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${backgroundImages[option.id]})` }}
            ></div>
            <div className="relative p-4 flex flex-col items-center z-10">
              <h4 className="text-xl font-semibold mb-2">{option.description}</h4>
              <p className="text-gray-600">{option.details}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isCorrect ? 'bg-green-300' : 'bg-red-300'} transition-opacity duration-300`}>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            {isCorrect ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Correct Choice!</h2>
                <Confetti />
                <p className="text-lg">You chose the optimal route.</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Oops!</h2>
                <p className="text-lg">That was not the optimal route. Try again!</p>
              </>
            )}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={goToLocalSituations}>Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalSituationDetail;
