// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Header';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => (
    <section className="py-12 bg-white">
      <Header />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard
          title="Mission smile 1k: Outdoor charity"
          description="Learn more about how to help children with special needs through outdoor activities."
          imgSrc="https://placehold.co/600x400"
        />
        <ProjectCard
          title="Weekly excursions"
          description="Learn more about our weekly excursions for children with special needs."
          imgSrc="https://placehold.co/600x400"
        />
        <ProjectCard
          title="Monthly public awareness"
          description="Learn more about our monthly public awareness events."
          imgSrc="https://placehold.co/600x400"
        />
      </div>
    </section>
  );
  

export default ProjectsSection
