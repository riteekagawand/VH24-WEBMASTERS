import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import LoginForm from "./Login";
import { HashLink } from 'react-router-hash-link'; 

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); 
  const location = useLocation(); // Get the current location

  // Check for token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  // Close the modal when navigating to "/"
  useEffect(() => {
    if (location.pathname === '/') {
      setShowLoginModal(false); // Close the modal
    }
  }, [location]);

  const handleLoginClick = () => {
    setShowLoginModal(true); 
  };

  const handleCloseModal = () => {
    setShowLoginModal(false); 
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsAuthenticated(false); 
    setShowDropdown(false); // Close dropdown on logout
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigateDashboard = () => {
    navigate('/dashboard'); // Navigate to the dashboard
    setShowDropdown(false); // Close dropdown after navigation
  };

  return (
    <>
      <header className="bg-white flex justify-between shadow-sm shadow-gray-400 items-center py-6 px-10">
        <div className="flex items-center">
          <div className="bg-red-600 text-white px-4 py-2 rounded-md">
            <span className="font-bold text-lg">S</span>
            <span className="font-bold text-lg">P</span>
          </div>
          <span className="ml-3 text-xl font-bold">SwiftPath</span>
        </div>
        <nav className="flex space-x-12 items-center font-semibold">
          <HashLink smooth to='/#why' className="text-gray-700 hover:text-red-600">
            Why SwiftPath?
          </HashLink>
          <HashLink smooth to="/#test" className="text-gray-700 hover:text-red-600">
            Testimonials
          </HashLink>
          <HashLink to="#" className="text-gray-700 hover:text-red-600">
            Contact Us
          </HashLink>
          
          {/* Conditional rendering based on authentication status */}
          {!isAuthenticated ? (
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
              >
                User Menu
              </button>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button
                    onClick={handleNavigateDashboard}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Modal div for Login Form */}
      {showLoginModal && (
        <div onClick={handleModalClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <button
            onClick={handleCloseModal}
            className="absolute top-[100px] right-[260px] text-gray-900 hover:text-red-600"
          >
            X
          </button>
          <div className=""><LoginForm /></div>
        </div>
      )}
    </>
  );
};

export default Header;
