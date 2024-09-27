// eslint-disable-next-line no-unused-vars
import React from 'react'

const AboutUs = () => (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-yellow-500 text-sm font-semibold">KNOW ABOUT US</h2>
          <h3 className="text-3xl font-bold mt-2">We provide a place for children with special needs</h3>
          <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <p className="text-gray-700 mt-2">Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">Learn more</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <div className="relative">
            <img src="https://placehold.co/600x400" alt="Children running and playing in a field" className="rounded-lg shadow-lg" />
            <button className="absolute inset-0 flex justify-center items-center text-white text-3xl">
              <i className="fas fa-play-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  

export default AboutUs
