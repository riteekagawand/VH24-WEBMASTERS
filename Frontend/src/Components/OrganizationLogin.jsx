import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../assets/registerbg.jpg';
import { Link } from 'react-router-dom';

const OrganizationLogin = ({ toggleForm }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/organization/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        navigate('/orgdash'); // Redirect to dashboard or any other page
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error.message);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#f3f4f6]">
      {/* Background image container */}
      <div className="absolute inset-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Login form container with absolute positioning */}
      <div className="relative z-10 w-full max-w-md">
        <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
          <h1 className="text-2xl text-[#293845] font-semibold text-center mb-6">Organization Login</h1>
          <div className="mb-4">
            <label className="block text-[#293845] text-md font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#293845] text-md font-medium mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              className="shadow-sm border rounded-lg bg-[#e6e7e9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
            {message && <p className="text-center text-md mt-4 text-red-500">{message}</p>}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-md">
                Don't have an account? <Link to='/organization-register' className="text-blue-500 underline">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

OrganizationLogin.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default OrganizationLogin;
