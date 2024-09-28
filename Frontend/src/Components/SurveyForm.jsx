import React, { useState } from 'react';

const SurveyForm = ({ onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!feedback || rating === 0) {
      alert('Please provide feedback and a rating.');
      return;
    }

    // Call the onSubmitFeedback prop to pass data to the parent component
    onSubmitFeedback({ feedback, rating });

    // Reset the form
    setFeedback('');
    setRating(0);
    alert('Feedback submitted successfully!');
  };

  return (
    <form className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Post-Response Survey</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        placeholder="Share your experience..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Rating:</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="cursor-pointer">
            <input
              type="radio"
              value={star}
              checked={rating === star}
              onChange={() => setRating(star)}
              className="hidden"
            />
            <span className={`text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}>★</span>
          </label>
        ))}
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        Submit Feedback
      </button>
    </form>
  );
};

export default SurveyForm;