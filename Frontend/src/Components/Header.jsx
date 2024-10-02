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

  return (
    <>
      <header className={`bg-white shadow-md z-10 fixed w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to='/'>
              <img src={logo} className="h-16 w-44 mt-[-10px]" alt="Logo" />
            </Link>
          </div>
          <nav className="space-x-12">
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
          <button
            onClick={handleLoginClick}
            className="bg-yellow-500 text-white px-6 py-2 font-semibold rounded-lg border-2 border-white"
          >
            Login
          </button>
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
