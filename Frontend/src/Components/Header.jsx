import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logoDark.png';
import Auth from './Auth'; // Import your Auth component

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false); // State to toggle the auth modal

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLoginClick = () => {
    setShowAuthModal(true); // Open auth modal
  };

  const closeAuthModal = () => {
    setShowAuthModal(false); // Close auth modal
  };

  const handleFeatureSelect = (e) => {
    const selectedFeature = e.target.value;
    if (selectedFeature) {
      // Handle navigation based on selected feature
      window.location.href = selectedFeature;
    }
  };

  return (
    <>
      <header className={`bg-white shadow-md z-10 fixed w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to='/'>
              <img src={logo} className="h-16 w-44" alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <HashLink smooth to='/#home' className="text-gray-700 font-semibold">
              Home
            </HashLink>
            <HashLink smooth to='/#aboutUs' className="text-gray-700 font-semibold">
              About Us
            </HashLink>
            <HashLink smooth to='/#contri' className="text-gray-700 font-semibold">
              Contributions
            </HashLink>
          </nav>

          {/* Right-side Elements */}
          <div className="flex items-center space-x-4">
            {/* Literal Dropdown for Features */}
            <select
              onChange={handleFeatureSelect}
              className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            >
              <option value="" disabled selected>Features</option>
              <option value="/delivery-simulation">Delivery Simulation</option>
              <option value="/feature2">Feature 2</option>
              <option value="/feature3">Feature 3</option>
            </select>

            {/* Dashboard Button */}
            <Link to="/dashboard" className="bg-blue-500 text-white px-6 py-2 font-semibold rounded-lg border-2 border-white">
              Dashboard
            </Link>

            {/* Login Button */}
            <button
              onClick={handleLoginClick}
              className="bg-yellow-500 text-white px-6 py-2 font-semibold rounded-lg border-2 border-white"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Modal - Auth Form */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeAuthModal}
            >
              &times;
            </button>

            {/* Auth Component */}
            <Auth toggleForm={closeAuthModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
