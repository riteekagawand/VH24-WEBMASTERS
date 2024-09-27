// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-2 py-2 flex justify-between items-center">
      <div className="text-md font-bold flex justify-center items-center">
        largerthan<i className="fas fa-heart text-red-500"></i>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <nav className="space-x-8 text-md font-semibold">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">About Us</a>
          <a href="#" className="text-gray-700">Contact Us</a>
        </nav>
      </div>
      <button className="bg-yellow-500 text-white px-6 py-2 font-semibold rounded-lg border-2 border-white">
        Join Our Community!
      </button>
    </div>
  </header>
);

export default Header;
