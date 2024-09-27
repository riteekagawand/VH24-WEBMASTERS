// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => (
    <header className="bg-white shadow-md">
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Donate</button>
      </div>
    </header>
  );
  

export default Header
