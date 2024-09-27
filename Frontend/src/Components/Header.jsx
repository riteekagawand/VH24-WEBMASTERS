import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Navigate to registration page when "Volunteer" is clicked
  const handleVolunteerClick = () => {
    navigate('/login'); // Change '/register' to your registration route
  };

  return (
    <>
      <header className="bg-white shadow-md z-10 relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            largerthan<i className="fas fa-heart text-red-500"></i>
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700">Home</a>
            <a href="#" className="text-gray-700">About us</a>
            <a href="#" className="text-gray-700">What We Do</a>
            <a href="#" className="text-gray-700">Media</a>
            <a href="#" className="text-gray-700">Contact</a>
          </nav>
          <button onClick={handleVolunteerClick} className="bg-yellow-500 text-white px-6 py-2 font-semibold rounded-lg border-2 border-white">
            Login!
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
