// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../Components/Sidebar2';
import Navbar from '../Components/Navbar';
import ch from '../assets/ch.jpeg'

const Inventory = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='flex justify-center text-black items-center h-screen'>
        <h1 className='text-2xl font-bold'>
          <img src={ch} className='h-[400px] w-[800px] ml-72 mt-20 rounded-xl border-2 border-gray-400 shadow-md shadow-gray-500' /></h1> {/* Use a heading for better visibility */}
      </div>
    </div>
  );
}

export default Inventory;
