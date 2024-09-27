// eslint-disable-next-line no-unused-vars
import React from 'react';
import video from '../assets/mainvid.mp4';

const HeroSection = () => (
  <section className="relative">
    <video
      src={video}
      alt="Children smiling and playing"
      className="w-full h-98 mt-1"
      autoPlay
      muted
      loop
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl font-bold">Uniting Hearts,<br></br>
        Together We Make a Difference</h1>
      <div className="mt-4 space-x-4">
        <button className="bg-white opacity-50 border border-white px-4 py-2 rounded-lg text-gray-900 font-semibold">What We Do At Sahaayata!</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
