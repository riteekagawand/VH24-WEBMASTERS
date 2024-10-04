// eslint-disable-next-line no-unused-vars
import React from "react";
import Lottie from 'react-lottie';
import delivery from '../assets/json/Delivery.json';  // Make sure the path is correct for your animation file

const HeroSection = () => {
  // Lottie configuration
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: delivery,  // Use your imported JSON animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex items-center justify-between px-10 py-10">
      {/* Left: Text Content */}
      <div className="w-1/2 ml-10">
        {/* Tagline */}
        <div className="inline-block bg-red-100 text-red-600 px-8 py-2 rounded-full mb-4">
          More than Faster <span role="img" aria-label="cherry">🍒</span>
        </div>
        <br></br>
        <br></br>
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">
        Master the Art of {" "}
          <span className="text-red-600 font-pacifico">Fast</span> {" "}
          <span className="text-red-600 font-pacifico">Deliveries!</span>
        </h1>
        <br></br>
        {/* Description */}
        <p className="text-gray-600 mb-6">
        We’re here to equip you with the skills needed for optimal performance and speedy deliveries!
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold">
            Start Training 
          </button>
    
        </div>

        {/* Customer Reviews */}
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/50x50"
            alt="Happy customer 1"
            className="rounded-full"
          />
          <img
            src="https://placehold.co/50x50"
            alt="Happy customer 2"
            className="rounded-full"
          />
          <img
            src="https://placehold.co/50x50"
            alt="Happy customer 3"
            className="rounded-full"
          />
          <div>
            <p className="font-bold">Our Happy Customer</p>
            <div className="flex items-center">
              <i className="fas fa-star text-yellow-500"></i>
              <span className="ml-1">4.8 (12.5k Review)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Lottie Animation */}
      <div className="w-1/2 relative">
        {/* Lottie Animation */}
        <Lottie options={defaultOptions} height="100%" width="100%" />
{/* 
        Courier Info
        <div className="absolute bottom-0 left-10 transform translate-y-1/2 bg-white p-4 rounded-full shadow-lg flex items-center space-x-2">
          <img
            src="https://placehold.co/50x50"
            alt="Profile"
            className="rounded-full"
          />
          <div>
            <p className="font-bold"></p>
            <p className="text-gray-600 text-sm">Food Courier</p>
          </div>
          <i className="fas fa-phone-alt text-red-600"></i>
        </div> */}

        
        
      </div>
    </main>
  );
};

export default HeroSection;
