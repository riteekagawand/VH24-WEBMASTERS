import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import backg from '../assets/bgdark.jpg';
import backg2 from '../assets/backg2.jpg';
import backg3 from '../assets/bgdark2.jpg';
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
      title: "Urgent Cake Delivery in Rainy Weather",
      description: "A cake needs to be delivered during a rainstorm, but it must reach the destination in 5 minutes. Choose wisely whether to prioritize time or the cake's quality.",
      options: [
        { 
          id: 1, 
          description: "Option 1: Drive fast and deliver the cake on time", 
          details: "You can try to deliver the cake in 5 minutes, but driving fast in the rain may damage the cake due to bumps on the road or sudden stops." 
        },
        { 
          id: 2, 
          description: "Option 2: Drive slowly to preserve the cake's quality", 
          details: "Driving cautiously will ensure the cake arrives in perfect condition, but you might be late and miss the deadline." 
        },
        { 
          id: 3, 
          description: "Option 3: Wait for the rain to stop", 
          details: "Waiting for the rain to ease ensures no damage to the cake, but it will result in significant delays." 
        },
      ],
    },
    2: {
      title: "Hot Pizza Delivery in Heavy Traffic",
      description: "You're tasked with delivering a hot pizza to a customer, but there is heavy traffic. Choose between arriving late with a warm pizza or risking the freshness by taking alternate routes.",
      options: [
        { 
          id: 1, 
          description: "Option 1: Take the longer route with minimal traffic", 
          details: "This route avoids traffic but will take longer, risking the pizza becoming less hot." 
        },
        { 
          id: 2, 
          description: "Option 2: Take a shortcut through a busy market", 
          details: "A shorter route that may get you there on time, but the pizza could cool down due to traffic jams and wait times." 
        },
        { 
          id: 3, 
          description: "Option 3: Call the customer and inform them of the delay", 
          details: "By explaining the delay to the customer, you can take your time and ensure the pizza is delivered in good condition, but you risk upsetting the customer." 
        },
      ],
    },
    3: {
      title: "Flower Bouquet Delivery During Road Construction",
      description: "A fragile bouquet of flowers needs to be delivered, but there's road construction on the way. Do you rush through the bumpy roads or take a longer, safer route?",
      options: [
        { 
          id: 1, 
          description: "Option 1: Drive quickly through construction", 
          details: "Rushing through construction zones might deliver the bouquet on time, but the flowers could get damaged due to uneven roads and bumps." 
        },
        { 
          id: 2, 
          description: "Option 2: Take a detour around construction", 
          details: "Taking the detour ensures the flowers are safe, but it will take significantly longer and might miss the delivery deadline." 
        },
        { 
          id: 3, 
          description: "Option 3: Walk the final part of the route", 
          details: "Parking your vehicle and walking past the construction might take a little longer but will keep the flowers intact and avoid potential damage." 
        },
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
    navigate('/local-situation');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold mb-4 mt-[-5px] text-red-500">{title}</h2>
      <p className="text-lg text-center mb-6 max-w-4xl">{description}</p>
      <div><MapComponent origin={currentLocation} destination={destination} /></div>
      <h3 className="text-3xl mb-6 text-center text-red-500">Choose Your Route Option</h3>
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
              className="absolute inset-0 bg-cover bg-center opacity-85 shadow-lg"
              style={{ backgroundImage: `url(${backgroundImages[option.id]})` }}
            ></div>
            <div className="relative p-4 flex flex-col items-center z-10">
              <h4 className="text-xl font-semibold text-white mb-2">{option.description}</h4>
              <p className="text-white text-semibold mb-44">{option.details}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300`}>
          <div className={`bg-white rounded-lg shadow-lg p-8 text-center ${isCorrect ? 'bg-green-300' : 'bg-red-300'}`}>
            {isCorrect ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Correct Choice!</h2>
                <Confetti />
                <p className="text-lg">You chose the optimal route.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={goToLocalSituations}>Go Back</button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Oops!</h2>
                <p className="text-lg">That was not the optimal route. Try again!</p>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg" onClick={goToLocalSituations}>Go Back</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalSituationDetail;