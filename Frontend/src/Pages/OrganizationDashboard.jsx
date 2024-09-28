// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar2 from '../Components/Sidebar2';
import Navbar from '../Components/Navbar';
import VolunteerMap from '../Components/VolunteerMap.jsx';

const UserDashboardPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar2 />

      {/* Main Content */}
      <div className='flex flex-col w-full h-screen p-4'>
        <h1 className="text-center text-black mb-4">Organization Dashboard</h1>
        
        {/* Container for Map, adjusted to move right */}
        <div className='flex ml-[350px] items-center'>
          <VolunteerMap className='h-[500px] w-[1000px]' />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPage;
