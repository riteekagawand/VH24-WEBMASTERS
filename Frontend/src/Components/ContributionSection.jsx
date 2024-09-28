// eslint-disable-next-line no-unused-vars
import React from 'react';
import join from '../assets/join.mp4';
import { useNavigate } from 'react-router-dom';

const ContributionSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleVolunteerClick = () => {
    navigate('/register'); // Navigate to the registration route
  };

  return (
    <section className="py-2 bg-white shadow-gray-400">
      <div id='contri' className="container mx-auto px-4">
        <div className="relative bg-gray-800 text-white rounded-lg shadow-gray-400 shadow-md overflow-hidden">
          <video 
            src={join} 
            alt="Children smiling and playing" 
            className="w-full h-64 object-cover opacity-50" 
            autoPlay 
            muted 
            loop
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-center">
              You can contribute to provide a place for children with special needs!
            </h2>
            <div className="mt-4 flex space-x-4">
              <button 
                onClick={handleVolunteerClick} 
                className="bg-yellow-500 text-gray-800 px-4 py-2 rounded font-semibold"
              >
                Join as a volunteer!
              </button>
              <button className="bg-white text-gray-800 px-4 py-2 rounded font-semibold">
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
