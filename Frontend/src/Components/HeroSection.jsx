import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State to control card visibility
  const [showCard, setShowCard] = useState(false);

  // Handle navigation when "Volunteer" is clicked
  const handleVolunteerClick = () => {
    navigate('/register'); // Change '/register' to your registration route
  };

  // Handle navigation when "Organization" is clicked
  const handleOrganizationClick = () => {
    navigate('/organization-register'); // Add your organization registration route
  };

  return (
    <section className="relative h-screen"> {/* Full height section */}
      {/* Placeholder for the video or image */}
      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
        <p className="text-gray-700 font-semibold text-2xl">[ Video/Media Placeholder ]</p>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        {/* Placeholder for heading */}
        <h1 className="text-4xl md:text-6xl font-bold">
          [ Heading Placeholder ]<br />
          [ Subheading Placeholder ]
        </h1>
      </div>

      {/* Card that appears after page loads */}
      {showCard && (
        <div
          onClick={() => setShowCard(false)} // Close when clicking background
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent click inside card from closing
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Join Us!</h2>
            <p className="text-gray-600 text-center mb-6">
              To begin this journey, tell us what type of account you’d be opening.
            </p>

            {/* Volunteer and Organization buttons */}
            <div className="space-y-4">
              {/* Individual Account (Volunteer) */}
              <button
                onClick={handleVolunteerClick} // Navigate to registration page
                className="w-full p-4 border border-gray-300 rounded-lg hover:bg-blue-50 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {/* Icon Placeholder */}
                    <p className="w-6 h-6 text-blue-500">[Icon]</p>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">Volunteer</p>
                    <p className="text-gray-500">Personal account to manage all your activities.</p>
                  </div>
                </div>
                <p className="w-6 h-6 text-gray-500">[Arrow]</p>
              </button>

              {/* Business Account (Organization) */}
              <button
                onClick={handleOrganizationClick} // Navigate to organization registration page
                className="w-full p-4 border border-gray-300 rounded-lg hover:bg-blue-50 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {/* Icon Placeholder */}
                    <p className="w-6 h-6 text-blue-500">[Icon]</p>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">Organization</p>
                    <p className="text-gray-500">Own or belong to a company, this is for you.</p>
                  </div>
                </div>
                <p className="w-6 h-6 text-gray-500">[Arrow]</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
