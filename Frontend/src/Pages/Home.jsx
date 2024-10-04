// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from "../Components/Header";
import MainContent from '../Components/MainContent';
import ScrollingCards from '../Components/ScrollingCards';

const Home = () => {
  return (
    <div className='h-full'>
      <Header />
      <MainContent />
      <ScrollingCards/>
    </div>
  )
}

export default Home
