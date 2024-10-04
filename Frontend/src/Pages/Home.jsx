// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
// import AboutUs from '../Components/AboutUs'
// import ContributionSection from '../Components/ContributionSection'
import Footer from "../Components/Footer";
import ScrollingCards from "../Components/ScrollingCards";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <HeroSection />
      {/* <AboutUs />
      <ContributionSection /> */}
      <div className="flex flex-col  mt-12 gap-4">
        <ScrollingCards direction="left" />
        <ScrollingCards direction="right" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
