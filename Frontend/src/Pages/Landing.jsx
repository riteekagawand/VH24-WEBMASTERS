import React from 'react';
import HeroSection from "../images/Hero Section.png"; // Correct import
import Navbar from './Navbar';

const Landing = () => {
  return (
    <div className='relative'>
      <img src={HeroSection} alt="Hero Section" className='w-screen h-screen' /> {/* Image full screen */}
      <div className='absolute top-0 left-0 w-full'>
        <Navbar /> {/* Navbar on top of the image */}
      </div>
    </div>
  );
}

export default Landing;
