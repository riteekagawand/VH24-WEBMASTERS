import React, { useState } from 'react';
import bg from '../assets/registerbg.jpg';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const OrganizationRegister = ({ toggleForm }) => {
  const navigate = useNavigate();

  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [skillRequirement, setSkillRequirement] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organizationNameError, setOrganizationNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [skillRequirementError, setSkillRequirementError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!organizationName) {
      setOrganizationNameError('Please enter the organization name');
      isValid = false;
    } else {
      setOrganizationNameError('');
    }

    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!skillRequirement) {
      setSkillRequirementError('Please enter skill requirements');
      isValid = false;
    } else {
      setSkillRequirementError('');
    }

    if (!location) {
      setLocationError('Please enter the location');
      isValid = false;
    } else {
      setLocationError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (isValid) {
      try {
        const response = await fetch('http://localhost:5000/api/organization/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ organizationName, email, skillRequirement, location, password }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success('Registration successful!');
          navigate('/');
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.log(error.message);
        setMessage('An error occurred');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover bg-cover"
      />

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md bg-white shadow-lg h-[595px] rounded-lg p-4 border border-red-500">
        <form onSubmit={handleSubmit}>
          <h1 className='text-2xl text-[#293845] font-semibold text-center mb-4'>Organization Register</h1>

          {/* Organization Name */}
          <div className="mb-4">
            <label className="block text-[#293845] text-sm font-medium mb-1" htmlFor="organizationName">
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              required
            />
            
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[#293845] text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Skill Requirement */}
          <div className="mb-4">
            <label className="block text-[#293845] text-sm font-medium mb-1" htmlFor="skillRequirement">Skill Requirement</label>
            <input
              type="text"
              id="skillRequirement"
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={skillRequirement}
              onChange={(e) => setSkillRequirement(e.target.value)}
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-[#293845] text-sm font-medium mb-1" htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-[#293845] text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-[#293845] text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
            {message && <p className="text-center text-sm mt-4 text-red-500">{message}</p>}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Already have an account? <Link to='/organization-login' className="text-blue-500 underline">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

OrganizationRegister.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default OrganizationRegister;
