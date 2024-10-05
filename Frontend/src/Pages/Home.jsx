// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../Components/Header";
import MainContent from '../Components/MainContent';
import ScrollingCards from '../Components/ScrollingCards';
import Serve from '../Components/Serve';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='h-full bg-white'>
      {/* <Header /> */}
      <MainContent className='min-h-full' />
    
      <Serve />
   
      <div id='test' className="flex flex-col  bg-white">
        {/* Centered Testimonials Text */}
        <h2 className="text-center text-3xl font-bold mb-8 mt-24">Testimonials</h2>
        
        <ScrollingCards direction="left" />
        <ScrollingCards direction="right" />
        <Footer />
      </div>

    </div>
  );
}

export default Home;
