import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./Login";
import ProfileForm from "./ProfileForm"; // Import the ProfileForm
import { HashLink } from 'react-router-hash-link'; 
import logo from '../assets/LogoPro.png';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false); 
  const [showProfileForm, setShowProfileForm] = useState(false); 
  const [headerVisible, setHeaderVisible] = useState(true); // State to control header visibility
  const [userEmail, setUserEmail] = useState(""); // State to hold user email
  const navigate = useNavigate(); 
  const location = useLocation();

  const dropdownRef = useRef(null); // Reference to the dropdown

  // Check for authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email'); // Assuming the email is stored in localStorage
    if (token) {
      setIsAuthenticated(true); 
      if (email) {
        setUserEmail(email); // Set the user email
      }
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setShowLoginModal(false);
    }
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Handle scrolling
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setHeaderVisible(true); // Show header when scrolling up
      } else {
        setHeaderVisible(false); // Hide header when scrolling down
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    localStorage.removeItem('email'); // Remove email from localStorage
    setIsAuthenticated(false); 
    setShowDropdown(false); 
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigateDashboard = () => {
    navigate('/dashboard'); 
    setShowDropdown(false); 
  };

  // Get the first letter of the user's email
  const userInitial = userEmail ? userEmail.charAt(0).toUpperCase() : ''; 

  return (
    <>
      <header className={`bg-white flex justify-between shadow-sm shadow-gray-400 items-center py-6 px-10 transition-transform duration-300 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center">
          <Link to="/"><img src={logo} className="w-80" alt="Logo" /></Link>
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
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            <div className="relative">
              <button onClick={toggleDropdown} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none">
                User Menu
              </button>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button onClick={handleNavigateDashboard} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                    Dashboard
                  </button>
                  <button onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          {/* Circular profile update button outside of dropdown */}
          {isAuthenticated && (
            <button onClick={() => setShowProfileForm(true)} className="w-10 h-10 bg-red-600 rounded-full ml-[20px] flex items-center justify-center text-white hover:bg-red-700">
              <span className="font-bold">{userInitial}</span> {/* Display first letter of email */}
            </button>
          )}
        </nav>
      </header>

      {/* Modal div for Login Form */}
      {showLoginModal && (
        <div onClick={handleModalClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <button onClick={handleCloseModal} className="absolute top-[100px] right-[260px] text-gray-900 hover:text-red-600">X</button>
          <div className=""><LoginForm /></div>
        </div>
      )}

      {/* Modal div for Profile Form */}
      {showProfileForm && (
        <div onClick={() => setShowProfileForm(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <button onClick={() => setShowProfileForm(false)} className="absolute top-[100px] right-[260px] text-gray-900 hover:text-red-600">X</button>
          {/* Stop click propagation within the form */}
          <div onClick={(e) => e.stopPropagation()}>
            <ProfileForm onClose={() => setShowProfileForm(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
