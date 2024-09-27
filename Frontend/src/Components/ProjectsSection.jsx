// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import ProjectCard from './ProjectCard';

const ProjectsSection = () => (
    <section className="py-1 bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 m-6 justify-center">
        <ProjectCard
          title="Mission smile 1k: Outdoor charity"
          description="Learn more about how to help children with special needs through outdoor activities."
          imgSrc={img1.jpg}
        />
        <ProjectCard
          title="Weekly excursions"
          description="Learn more about our weekly excursions for children with special needs."
          imgSrc={img2.jpg}
        />
        <ProjectCard
          title="Monthly public awareness"
          description="Learn more about our monthly public awareness events."
          imgSrc={img3.jpg}
        />
      </div>
    </section>
  );
  

export default ProjectsSection
