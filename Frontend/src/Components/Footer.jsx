// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-center py-8 mt-36">
      <div className="flex justify-between items-center mx-10 mb-4">
        <h1 className="text-2xl font-bold text-white">SwiftPath</h1>
        <nav className="flex flex-col space-y-2">
  <a href="#" className="text-white">About</a>
  <a href="#" className="text-white">Terms & Conditions</a>
  <a href="#" className="text-white">Privacy Policy</a>
  <a href="#" className="text-white">Contact</a>
</nav>

      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <a href="#" className="text-white">
          <FaFacebook />
        </a>
        <a href="#" className="text-white">
          <FaTwitter />
        </a>
        <a href="#" className="text-red-500">
          <FaInstagram />
        </a>
        <a href="#" className="text-red-500">
          <FaYoutube />
        </a>
      </div>
      <p className="text-white">Copyright ©2021 SwiftPath</p>
    </footer>
  );
};

export default Footer;
