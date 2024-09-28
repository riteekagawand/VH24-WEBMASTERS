import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#FFFFFF] w-64 fixed left-0 top-[70px] flex flex-col h-full shadow-md shadow-gray-400">
      {/* Button Container */}
      <div className="flex flex-1 flex-col items-center">
        <Link 
          to="/userdash" 
          className='bg-[#ffcc66] text-black hover:bg-slate-600 hover:text-white rounded-lg shadow-sm shadow-gray-400 mt-16 my-8 w-[200px] h-[50px] flex items-center justify-center py-3 font-bold text-xl'
        >
          Overview
        </Link>
        <Link 
          to="/inventory" // Ensure this is correct
          className='bg-[#ffcc66] text-black hover:bg-slate-600 hover:text-white rounded-lg shadow-sm shadow-gray-400 my-14 mt-1 w-[200px] h-[50px] flex items-center justify-center py-3 font-bold text-xl'
        >
          Inventory
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
