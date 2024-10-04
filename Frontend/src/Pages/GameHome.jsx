// Pages/GameHome.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import delivery from "../assets/delivery.jpg"; // Ensure the path is correct
import traffic from "../assets/traffic.jpg"; // Ensure the path is correct
import local from "../assets/local.jpg"; // Ensure the path is correct

const GameHome = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: "Delivery Situations",
      description: "Choose optimal routes for deliveries with varying traffic conditions.",
      image: delivery, // Use the imported image
      route: "/delivery",
    },
    {
      id: 2,
      title: "Traffic Escape",
      description: "Navigate through heavy traffic and find the quickest escape route.",
      image: traffic, // Use the imported image
      route: "/traffic-escape",
    },
    {
      id: 3,
      title: "Local Situation Handling",
      description: "Handle various local situations and make the best choices.",
      image: local, // Use the imported image
      route: "/local-situation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h2 className="text-5xl font-bold mb-4 mt-[-50px]">
        Choose Your{" "}
        <span className="text-red-600 font-pacifico"> Training</span> Path!
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8 h-[400px] max-w-6xl">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(game.route)}
          >
            <img src={game.image} alt={game.title} className="w-full h-48 object-cover hover:opacity-80" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameHome;
