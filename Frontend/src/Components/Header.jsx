// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10">
      <div className="flex items-center">
        <div className="bg-red-600 text-white px-4 py-2 rounded-md">
          <span className="font-bold text-lg">FO</span>
          <span className="font-bold text-lg">DO</span>
        </div>
        <span className="ml-3 text-xl font-bold">Foodeli</span>
      </div>
      <nav className="flex space-x-12 items-center font-semibold">
        <a href="#" className="text-gray-700 hover:text-red-600">
          Why Foodeli?
        </a>
        
        <a href="#" className="text-gray-700 hover:text-red-600">
          Contact Us
        </a>
        {/* <a href="#" className="text-gray-700 hover:text-red-600">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="#" className="text-gray-700 hover:text-red-600">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a> */}
        <a
          href="#"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
