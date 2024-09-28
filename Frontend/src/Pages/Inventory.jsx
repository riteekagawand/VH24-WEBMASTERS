// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const Inventory = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='flex justify-center text-black items-center h-screen'>
        <h1 className='text-2xl font-bold'>INVENTORY</h1> {/* Use a heading for better visibility */}
      </div>
    </div>
  );
}

export default Inventory;
