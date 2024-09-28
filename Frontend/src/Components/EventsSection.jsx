// eslint-disable-next-line no-unused-vars
import React from 'react'

const EventsSection = () => (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Our Events</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-500 text-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold">13 Apr</h3>
            <p className="mt-2">A day out with our wonderful children</p>
            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">Next Events</button>
          </div>
          <div className="bg-yellow-500 text-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold">25 Apr</h3>
            <p className="mt-2">Seminar: Caring for children with autism</p>
            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">Next Events</button>
          </div>
        </div>
      </div>
    </section>
  );
  

export default EventsSection
