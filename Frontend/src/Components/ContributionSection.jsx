// eslint-disable-next-line no-unused-vars
import React from 'react'

const ContributionSection = () => (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
          <img src="https://placehold.co/1200x400" alt="Children smiling and playing" className="w-full h-64 object-cover opacity-50"/>
          <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-center">You can contribute to provide a place for children with special needs!</h2>
            <div className="mt-4 flex space-x-4">
              <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded">Join as a volunteer</button>
              <button className="bg-white text-gray-800 px-4 py-2 rounded">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  

export default ContributionSection
