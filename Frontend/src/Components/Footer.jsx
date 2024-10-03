// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-6 bg-black opacity-80 h-[210px] mt-16 text-white px-4">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Section */}
        <div className="flex flex-col">
          {/* Logo Placeholder */}
          <Link to='/'><div className="h-16 w-44 bg-gray-500 mt-[-10px]"></div></Link>
        
          {/* Placeholder for text */}
          <p className="mt-2 text-sm">
            [ Placeholder for Empowerment Slogan ]
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center">
          {/* Placeholder for Rights Reserved */}
          <h3 className="text-sm font-bold">[ Placeholder for Rights Reserved ]</h3>
          <p className="mt-2 text-sm">
            [ Placeholder for Additional Slogan ]
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end">
          {/* Placeholder for Subscribe Title */}
          <h3 className="text-xl font-bold mb-2">[ Subscribe Title Placeholder ]</h3>
          
          {/* Email Input and Button Placeholders */}
          <form className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="[ Email Input Placeholder ]" 
              className="px-4 py-2 rounded-md bg-gray-800 text-white w-full"
            />
            <button 
              className="bg-yellow-500 text-gray-800 px-4 py-2 ml-3 rounded-md"
            >
              [ Subscribe Button ]
            </button>
          </form>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
