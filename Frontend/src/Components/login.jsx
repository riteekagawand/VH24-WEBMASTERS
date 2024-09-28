import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bg from '../assets/registerbg.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock API request (replace this with your actual API call)
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      // Assuming a successful login redirects to a dashboard or home page
      navigate('/userdash'); // Change this to your desired route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <img src={bg} className="max-h-screen w-full object-cover" alt="Background" />
      <div className="absolute inset-0 bg-black opacity-65"></div> {/* Dark shadow */}
      <div className="absolute p-6 rounded-lg shadow-lg w-full max-w-md z-10 bg-white "> {/* Form overlay */}
        <h2 className="text-2xl font-bold  mb-4">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email address'
              className="mt-1 block w-full p-2 rounded-md border border-gray-300 bg-blue-100 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block " htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Enter Your Password'
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}<br></br>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-400 underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
