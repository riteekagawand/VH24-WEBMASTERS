// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo.png'; // Update the path to your logo image

const Navbar = () => {
  return (
    <div className='fixed top-0  left-0 w-full h-[100px] bg-white z-50 shadow-md shadow-gray-400'>
      <div className='flex ml-5 my-1 items-start h-full'>
        <img src={logo} alt="Logo" width={190} height={10} />
        {/* <h2 className='font-bold ml-2 mt-2 text-4xl flex items-center'> Dashboard </h2> */}
      </div>
    </div>
  );
};

export default Navbar;
