// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import AboutUs from '../Components/AboutUs'
import End from '../Components/End'
import Project from '../Components/Project'
import ProjectCard from '../Components/ProjectCard'
import ProjectsSection from '../Components/ProjectsSection'
import DonationsSection from '../Components/DonationsSection'
import ContributionSection from '../Components/ContributionSection'
import EventsSection from '../Components/EventsSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <End />
      <Project /> 
    / <ProjectCard />
      <ProjectsSection />
      <DonationsSection />
      <ContributionSection />
      <EventsSection />
      <Footer /> 
    </div>
  )
}

export default Home
