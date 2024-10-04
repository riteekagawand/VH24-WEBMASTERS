// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../Components/Header";
import MainContent from '../Components/MainContent';
import ScrollingCards from '../Components/ScrollingCards';
import Serve from '../Components/Serve';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='h-full'>
      <Header />
      <MainContent />
    
      <Serve />
   
      <div className="flex flex-col mt-9">
        {/* Centered Testimonials Text */}
        <h2 className="text-center text-3xl font-bold mb-6">Testimonials</h2>
        
        <ScrollingCards direction="left" />
        <ScrollingCards direction="right" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
