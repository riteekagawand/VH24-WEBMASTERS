import  { useState } from 'react';
import video from '../assets/mainvid.mp4';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State to control card visibility
  const [showCard, setShowCard] = useState(false);

  // Toggle the card visibility when clicking "Join our Community!"
  const handleJoinClick = () => {
    setShowCard(!showCard);
  };

  // Close the card when clicking outside of it
  const handleBackgroundClick = () => {
    setShowCard(false);
  };

  // Prevent click events inside the card from propagating to the background
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  // Handle navigation when "Volunteer" is clicked
  const handleVolunteerClick = () => {
    navigate('/register'); // Change '/register' to your registration route
  };

  // Handle navigation when "Organization" is clicked
  const handleOrganizationClick = () => {
    navigate('/organization-register'); // Add your organization registration route
  };

  return (
    <section className="relative">
      <video
        src={video}
        alt="Children smiling and playing"
        className="w-full h-98 mt-1"
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold">
          Uniting Hearts,<br />
          Together We Make a Difference
        </h1>
        <div className="mt-4 space-x-4">
          <button
            onClick={handleJoinClick}
            className="bg-white opacity-50 border border-white px-4 py-2 rounded-lg text-gray-900 font-semibold"
          >
            Join our Community!
          </button>
        </div>
      </div>

      {/* Card that appears when "Join our Community!" is clicked */}
      {showCard && (
        <div
          onClick={handleBackgroundClick} // Close when clicking background
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div
            onClick={handleCardClick} // Prevent click inside card from closing
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Join Us!</h2>
            <p className="text-gray-600 text-center mb-6">
              To begin this journey, tell us what type of account you’d be opening.
            </p>
            <div className="space-y-4">
              {/* Individual Account (Volunteer) */}
              <button
                onClick={handleVolunteerClick} // Navigate to registration page
                className="w-full p-4 border border-gray-300 rounded-lg hover:bg-blue-50 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A5.5 5.5 0 1112 15.25m-6.879 2.554a7 7 0 1112.758 0M12 15.25v6"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">Volunteer</p>
                    <p className="text-gray-500">Personal account to manage all your activities.</p>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>

              {/* Business Account (Organization) */}
              <button
                onClick={handleOrganizationClick} // Navigate to organization registration page
                className="w-full p-4 border border-gray-300 rounded-lg hover:bg-blue-50 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {/* Icon */}
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12h18M3 6h18M3 18h18"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">Organization</p>
                    <p className="text-gray-500">Own or belong to a company, this is for you.</p>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
