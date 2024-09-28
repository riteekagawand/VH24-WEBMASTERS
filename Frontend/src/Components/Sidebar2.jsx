// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Sidebar2 = () => {
  return (
    <div className="bg-[#FFFFFF]  w-64 fixed left-0  flex flex-col h-full shadow-md shadow-gray-400">
     
      <div className='flex ml-5 my-1 items-start h-20 '>
      <Link to='/'><img src={logo} alt="Logo" width={190} height={10} /></Link>
        {/* <h2 className='font-bold ml-2 mt-2 text-4xl flex items-center'> Dashboard </h2> */}
    </div>
      {/* Button Container */}
      <div className="flex flex-1 flex-col items-center">
        <Link 
          to="/orgdash" 
          className='bg-[#ffcc66] text-black hover:bg-slate-600 hover:text-white rounded-lg shadow-sm shadow-gray-400 mt-16 my-8 w-[200px] h-[50px] flex items-center justify-center py-3 font-bold text-xl'
        >
        Insights
        </Link>
        <Link 
          to="/org/inventor" // Ensure this is correct
          className='bg-[#ffcc66] text-black hover:bg-slate-600 hover:text-white rounded-lg shadow-sm shadow-gray-400 my-14 mt-1 w-[200px] h-[50px] flex items-center justify-center py-3 font-bold text-xl'
        >
          Inventory
        </Link>
      </div>
    </div>
  );
};

export default Sidebar2;
