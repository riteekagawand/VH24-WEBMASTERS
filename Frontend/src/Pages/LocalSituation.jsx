// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import sit1 from "../assets/sit1.png"; // Import your images

const LocalSituation = () => {
  const navigate = useNavigate();

  const situations = [
    { 
      id: 1, 
      title: "Vasai Station to Vartak Polytechnic",
      description: "Navigate through local traffic to reach your destination.",
      currentLocation: "Vasai Station",
      destination: "Vartak Polytechnic",
      image: sit1,
    },
    { 
      id: 2, 
      title: "Borivali Station to Kandivali Station",
      description: "Navigate through local traffic to reach your destination.",
      currentLocation: "Borivali Station",
      destination: "Kandivali Station",
      image: sit1,
    },
    { 
      id: 3, 
      title: "Thane Station to Viviana Mall",
      description: "Navigate through local traffic to reach your destination.",
      currentLocation: "Thane Station",
      destination: "Viviana Mall",
      image: sit1,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold mb-4 mt-[-40px]">
        Choose Your <span className="text-bred-500 font-pacifico">Local</span> Situation!
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-9 max-w-6xl">
        {situations.map((situation) => (
          <div
            key={situation.id}
            className="bg-white shadow-md shadow-gray-600 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-gray-600 transition-shadow duration-300"
            onClick={() => navigate(`/local-situation/${situation.id}`, { state: { currentLocation: situation.currentLocation, destination: situation.destination } })}
          >
            <div className="flex justify-center">
              <img 
                src={situation.image} 
                alt={situation.title} 
                className="w-48 h-48 rounded-full mt-1 object-cover border-2 border-gray-300" 
              /> 
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">{situation.title}</h3>
              <br />
              <p className="text-gray-800">Current Location: {situation.currentLocation}</p>
              <p className="text-gray-800">Destination: {situation.destination}</p>
              <p className="text-gray-800">You need to navigate from {situation.currentLocation} to {situation.destination} using the most optimal route.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalSituation;
