// eslint-disable-next-line no-unused-vars
import React from 'react'

const ProjectCard = ({ title, description, imgSrc }) => (
  <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover opacity-50"/>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded">Learn more</button>
    </div>
  </div>
);


export default ProjectCard
