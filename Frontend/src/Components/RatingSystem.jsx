import React, { useState } from 'react';

const organizations = [
  { id: 1, name: 'Organization A' },
  { id: 2, name: 'Organization B' },
  // Add more organizations as needed
];

const RatingSystem = ({ onSubmitRatings }) => {
  const [ratings, setRatings] = useState({});

  const handleRatingChange = (orgId, rating) => {
    setRatings({ ...ratings, [orgId]: rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const emptyRatings = Object.values(ratings).some((rating) => rating === undefined);
    if (emptyRatings) {
      alert('Please provide ratings for all organizations.');
      return;
    }

    // Call the onSubmitRatings prop to pass data to the parent component
    onSubmitRatings(ratings);

    // Reset the ratings state after submission
    setRatings({});
    alert('Ratings submitted successfully!');
  };

  return (
    <form className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Rate Organizations</h2>
      {organizations.map((org) => (
        <div key={org.id} className="mb-4">
          <h3 className="text-lg font-semibold">{org.name}</h3>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="cursor-pointer">
                <input
                  type="radio"
                  value={star}
                  checked={ratings[org.id] === star}
                  onChange={() => handleRatingChange(org.id, star)}
                  className="hidden"
                />
                <span className={`text-2xl ${ratings[org.id] >= star ? 'text-yellow-500' : 'text-gray-400'}`}>★</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        Submit Ratings
      </button>
    </form>
  );
};

export default RatingSystem;