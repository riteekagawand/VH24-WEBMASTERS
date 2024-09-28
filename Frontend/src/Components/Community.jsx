// src/components/Community.js

import React, { useState } from 'react';

const Community = () => {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState('');

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (newExperience) {
      setExperiences([...experiences, newExperience]);
      setNewExperience('');
    }
  };
return (
    <div className="flex justify-center items-center w-full h-min bg-white p-6">
      <div className="flex flex-col w-full">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 text-Center-X">Sahay Community</h2>
  
        <div className="flex flex-row w-full">
          <form onSubmit={handleAddExperience} className="flex-1 mr-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:ring-teal-500 transition duration-300 ease-in-out"
              rows="4"
              placeholder="Share your experience..."
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
            />
            <button
              type="submit"
              className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Experience
            </button>
          </form>
  
          <div className="flex flex-col space-y-4 flex-1">
            {experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-md shadow-sm transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100"
                >
                  <p className="text-gray-800">{experience}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No experiences shared yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community
