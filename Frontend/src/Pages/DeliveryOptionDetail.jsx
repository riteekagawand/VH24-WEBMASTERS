import  { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import backg from '../assets/backg.jpg';
import backg2 from '../assets/backg2.jpg';
import backg3 from '../assets/backg3.jpg';
import MapComponent from '../Components/MapComponent';

const DeliveryOptionDetail = () => {
  const { situationId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { currentLocation, destination } = location.state || {}; // Destructure currentLocation and destination from state

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Define optimal routes for each situation
  const optimalRoutes = {
    1: 3, // Optimal route for "Delivery from Palghar to Vasai" is Route 3
    2: 1, // Optimal route for "Delivery from Dadar to Borivali" is Route 1
    3: 3, // Optimal route for "Delivery from Thane to Kalyan" is Route 3
  };

  const situationDetails = {
    1: {
      title: "Delivery from Palghar to Vasai",
      description: "The delivery involves multiple traffic choke points. Choose wisely to avoid long delays.",
      options: [
        { id: 1, description: "Route 1: Long route with heavy traffic", details: "This route takes you through busy market areas and narrow roads, which often cause significant delays due to congestion, especially during peak hours." },
        { id: 2, description: "Route 2: Shortcut with high traffic", details: "Although shorter, this route goes through a high-traffic zone and has many intersections with slow-moving vehicles, causing potential delays." },
        { id: 3, description: "Route 3: Shortcut with medium traffic", details: "This route is a balanced choice, with moderate traffic." },
      ],
    },
    2: {
      title: "Delivery from Dadar to Borivali",
      description: "You can take the scenic route, but one is faster and has no traffic at all.",
      options: [
        { id: 1, description: "Route 1: Long route with no traffic", details: "This route is longer but ensures a smooth ride without any traffic congestion." },
        { id: 2, description: "Route 2: Short route with construction", details: "A shorter option, but ongoing construction works often lead to unexpected delays." },
        { id: 3, description: "Route 3: Scenic route with minimal traffic", details: "This scenic route passes through less congested roads." },
      ],
    },
    3: {
      title: "Delivery from Thane to Kalyan",
      description: "There are a few different routes, including a detour and expressway. Choose the best for a quick delivery.",
      options: [
        { id: 1, description: "Route 1: Direct route with mild traffic", details: "This route is straightforward with occasional traffic." },
        { id: 2, description: "Route 2: Route with a detour", details: "This route has a detour that bypasses a few traffic spots." },
        { id: 3, description: "Route 3: Route via expressway", details: "The expressway provides the fastest and smoothest journey." },
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

    // Check if optimal route
    if (optionId === optimalRoutes[situationId]) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setShowModal(true);
  };

  const goToTraining = () => {
    navigate('/delivery');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold mb-4 mt-[-5px] text-red-500">{title}</h2>
      <p className="text-lg text-center mb-6 max-w-4xl">{description}</p>
      <div><MapComponent origin={currentLocation} destination={destination}/></div>
      <h3 className="text-3xl mb-6 text-center text">Choose Your Route Option</h3>
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
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={goToTraining}>Go Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryOptionDetail;
