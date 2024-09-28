// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import AlertSystem from '../Components/AlertSystem';
import NotificationSettings from '../Components/NotificationSettings';

const UserDashboardPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='flex justify-center text-black items-center h-screen'>
      <h1>Volunteer Alert System</h1>
      <AlertSystem />
      <NotificationSettings />
      </div>
    </div>
  );
}

export default UserDashboardPage;
