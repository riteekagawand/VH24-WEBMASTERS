import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProfileForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  // Retrieve email from local storage when component mounts
  const email = localStorage.getItem('email'); // Get email from local storage

  // State to check if the profile exists
  const [isProfileExisting, setIsProfileExisting] = useState(false);

  // Check if the profile data exists on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/profile?email=${email}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const profileData = await response.json();
        if (profileData) {
          setName(profileData.name);
          setGender(profileData.gender);
          setAge(profileData.age);
          setPhoneNumber(profileData.phoneNumber);
          setCity(profileData.city);
          setState(profileData.state);
          setPin(profileData.pin);
          setIsProfileExisting(true); // Mark profile as existing
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const profileData = {
      email: email, // Use the email from local storage
      profile: {
        name: name,
        gender: gender,
        age: parseInt(age),
        phoneNumber: phoneNumber,
        city: city,
        state: state,
        pin: pin,
      }
    };

    try {
      const method = isProfileExisting ? 'PUT' : 'POST'; // Determine method
      const response = await fetch(`http://localhost:5000/api/profile`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Profile saved successfully:', result);
      toast.success('Profile submitted successfully!');

      // Display the tokens earned toast
      toast.info('100 Swift Tokens Earned!'); // This is the new popup

      // Call the onClose function to close the card
      onClose();

      // Navigate to another page if necessary
      navigate('/');
    } catch (error) {
      console.error('Error submitting user data:', error);
      toast.error('Error submitting profile. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-8 font-bold text-3xl text-gray-800">User Profiles</h1>

        <div className="relative mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className='grid grid-cols-2 gap-2'>
          <div className="relative mb-4">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="relative mb-4">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              required
              className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
              className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              required
              className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Pin Code"
              required
              className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-[150px] bg-red-500 text-white py-3 rounded-[50px] transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
