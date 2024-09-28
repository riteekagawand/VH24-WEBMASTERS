import React, { useState } from 'react';

const TrainingModules = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Training Modules</h1>

      {/* Preparedness Resources Section */}
      <div className="mb-6">
        <h2
          className="text-2xl font-semibold cursor-pointer mb-2"
          onClick={handleToggleResources}
        >
          Preparedness Resources
        </h2>
        {isResourcesOpen && (
          <div>
            <p className="text-gray-700">
              Access to training materials on topics like first aid and crisis management.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>First Aid Basics</li>
              <li>Crisis Management Strategies</li>
              <li>Emergency Response Protocols</li>
            </ul>
          </div>
        )}
      </div>

      {/* Certification Programs Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Certification Programs
        </h2>
        <p className="text-gray-700 mb-2">
          Volunteers can earn certificates to enhance their profiles.
        </p>
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" 
          onClick={handleOpenModal}
        >
          View Certification Programs
        </button>
      </div>

      {/* Modal for Certification Programs */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Certification Programs</h3>
            <ul className="list-disc list-inside">
              <li>CPR and AED Certification</li>
              <li>Advanced First Aid Certification</li>
              <li>Crisis Management Certification</li>
            </ul>
            <button 
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700" 
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingModules;
