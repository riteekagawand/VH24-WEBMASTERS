// eslint-disable-next-line no-unused-vars
import React from 'react';
import volunteer from '../assets/volunteer.jpg'; // Correct import of the image file

const AboutUs = () => (
  <section className="container flex justify-center items-center h-auto mx-auto px-4 py-16"> {/* Reduced min-h-screen and py-16 to py-8 */}
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-yellow-500 text-sm font-bold">KNOW ABOUT US</h2>
        <h3 className="text-3xl font-bold mt-2">Responding to Crisis</h3>
        <p className="text-gray-700 mt-4">At Sahaayata, we extend our hands to support those in crisis, offering care and immediate response where it&apos;s needed most. </p>
        <p className="text-gray-700 mt-2">Our volunteers work tirelessly to bring hope, comfort, and relief during challenging times. Together, we aim to uplift communities and create a network of compassion.</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 font-semibold">Learn more</button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <div className="relative">
          {/* Correct usage of the imported image */}
          <img src={ volunteer } alt="Children running and playing in a field" className="rounded-lg  shadow-gray-600 shadow-lg" />
          <button className="absolute inset-0 flex justify-center items-center text-white text-3xl">
            <i className="fas fa-play-circle"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
