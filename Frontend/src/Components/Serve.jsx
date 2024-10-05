// eslint-disable-next-line no-unused-vars
import React from 'react';
import guarantee from "../assets/image/guarantee.png";
import del from "../assets/image/del.png";
import learn from "../assets/image/learn.png";

const Serve = () => {
  return (
    <div id='why' className="flex flex-col items-center justify-center min-h-screen bg-white text-center mt-[-60px]">
      <h2 className="text-red-500 text-md font-semibold mb-2">WHAT WE SERVE</h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Favourite Delivery Expert</h1>
      <br />
      <div className="flex justify-center space-x-20">
        <div className="flex flex-col justify-center items-center">
          <img src={learn} alt="Person ordering food on a mobile app" className="w-60 h-48 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">Easy To Train</h3>
          <p className="text-gray-600">Training made easy with games.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={del} alt="Delivery person on a scooter" className="w-60 h-48 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">Fastest Delivery</h3>
          <p className="text-gray-600">Deliver always on time even faster.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={guarantee} alt="Two people serving food" className="w-60 h-48 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">Best Quality</h3>
          <p className="text-gray-600">Not only fast, for us quality is also No.1.</p>
        </div>
      </div>
    </div>
  );
};

export default Serve;
