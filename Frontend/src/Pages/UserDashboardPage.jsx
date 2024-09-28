// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../Components/Sidebar';
import DisasterMap from '../Components/DisasterMap';
import { Link } from 'react-router-dom';
import Community from '../Components/Community';

const UserDashboardPage = () => {
  // Sample disaster data (replace with real data as needed)
  const disasters = [
    { name: 'Flood in Kerala', location: 'Kerala' },
    { name: 'Earthquake in Delhi', location: 'Delhi' },
    { name: 'Cyclone in Andhra Pradesh', location: 'Andhra Pradesh' },
    { name: 'Forest Fire in Uttarakhand', location: 'Uttarakhand' },
    { name: 'Landslide in Himachal Pradesh', location: 'Himachal Pradesh' },
    { name: 'Drought in Rajasthan', location: 'Rajasthan' },
    { name: 'Tsunami Warning in Tamil Nadu', location: 'Tamil Nadu' },
    { name: 'Heatwave in Maharashtra', location: 'Maharashtra' },
    { name: 'Earthquake in Gujarat', location: 'Gujarat' },
    { name: 'Flood in Bihar', location: 'Bihar' },
  ];
  
  // Debugging: Check the disasters array
  console.log(disasters);

  return (
    <div>
      <Sidebar />
      <div className='flex justify-center text-black items-center h-screen bg-white'>
        <div className='flex flex-col w-full h-screen p-4'>
          <h1 className="text-center text-black font-semibold ml-[150px] text-[30px] mb-4">Volunteer Dashboard</h1>
          
          {/* Container for Disaster Map */}
          <div className='flex ml-[300px] items-center'>
            <DisasterMap className='h-[500px] w-[1000px] border border-red-500' />
          </div>
          <div className='mt-10 ml-[235px] w-[1150px] bg-white'>
      <Community />
    </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPage;
