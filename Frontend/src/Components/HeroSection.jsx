// eslint-disable-next-line no-unused-vars
import React from 'react'

const HeroSection = () => (
    <section className="relative">
      <img src="https://placehold.co/1920x600" alt="Children smiling and playing" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold">Inclusive care for children with special needs</h1>
        <div className="mt-4 space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded">What we do</button>
          <button className="bg-transparent border border-white px-4 py-2 rounded">Play Video</button>
        </div>
        <div className="absolute bottom-4 left-4 text-sm">230 children under our care</div>
        <div className="absolute bottom-4 right-4 text-sm">58 donations collected</div>
      </div>
    </section>
  );
  

export default HeroSection
