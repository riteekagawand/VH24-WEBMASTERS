// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../Components/Header";
import MainContent from '../Components/MainContent';
import ScrollingCards from '../Components/ScrollingCards';

const Home = () => {
  return (
    <div className='h-full'>
      <Header />
      <MainContent />
      
      <div className="flex flex-col mt-20">
        {/* Centered Testimonials Text */}
        <h2 className="text-center text-3xl font-bold mb-6">Testimonials</h2>
        
        <ScrollingCards direction="left" />
        <ScrollingCards direction="right" />
      </div>
    </div>
  );
}

export default Home;
