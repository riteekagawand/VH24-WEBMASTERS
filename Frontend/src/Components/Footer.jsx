// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => (
  <footer className="py-6 bg-black opacity-80 h-[210px] mt-16 text-white px-4">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">largerthan</h3>
          <p className="mt-2 text-sm">
            Empowering through compassion and action.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col  items-center mt-[130px]">
          <h3 className="text-md font-bold">All Rights Reserved. @Sahaayata</h3>
          <p className="mt-2 text-sm">
            We care for and respond to the community.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end">
          <h3 className="text-xl font-bold mb-2">Subscribe to get latest updates</h3>
          
          <form className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-md bg-gray-800 text-white w-full"
            />
            <button 
              className="bg-yellow-500 text-gray-800 px-4 py-2 ml-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
