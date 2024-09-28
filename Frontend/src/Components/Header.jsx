// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoDark.png'

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
            <img src={ logo } className="h-24 w-60"/> 
          </div>
          <nav className="space-x-12">
            <a href="#" className="text-gray-700 font-semibold">
            Home</a>
            <a href="#" className="text-gray-700 font-semibold">About us</a>
            <a href="#" className="text-gray-700 font-semibold">Contact</a>
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
