// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoDark.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isVisible, setIsVisible] = useState(true); // State to manage header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To store last scroll position

  // Scroll event listener
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Show header when scrolling up, hide when scrolling down
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true); // Show header when scrolling up or when near the top
    } else {
      setIsVisible(false); // Hide header when scrolling down
    }
    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
    };
  }, [lastScrollY]);

  // Navigate to registration page when "Volunteer" is clicked
  const handleVolunteerClick = () => {
    navigate('/login'); // Change '/register' to your registration route
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
            {/* HashLinks with smooth scroll */}
            <HashLink smooth to='/#aboutUs' className="text-gray-700 font-semibold">
              About Us
            </HashLink>
            <HashLink smooth to='/#contri' className="text-gray-700 font-semibold">
              Contributions
            </HashLink>
          </nav>
          <button
            onClick={handleVolunteerClick}
            className="bg-yellow-500 text-white px-6 py-2 font-semibold rounded-lg border-2 border-white"
          >
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
