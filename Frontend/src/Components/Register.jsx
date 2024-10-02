import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Register = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = users.find((user) => user.email === formData.email);
    if (userExists) {
      setErrorMessage('User already exists with this email.');
      return;
    }

    setUsers([...users, { ...formData, password: formData.password }]);
    console.log('User registered:', formData);

    setFormData({
      username: '',
      email: '',
      password: '',
    });
    setErrorMessage('');
  };

  return (
    <div>
      {/* Card Container */}
      <div className="max-w-5xl h-auto flex">
        {/* Left side (Register Form) */}
        <div className="w-2/3 pr-4">
          <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}

            {/* Username */}
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none"
            >
              Sign up
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-black">
              Already have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                Login
              </span>
            </p>
          </div>
        </div>

        {/* Separator - dotted line */}
        <div className="border-l border-dotted border-gray-300 mx-4"></div>

        {/* Right side (Social logins) */}
        <div className="w-1/3 pl-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-center mb-4">Sign in with</h2>
          <div className="space-y-4 w-full">
            <button
              className="w-full bg-gray-100 p-3 rounded-full hover:bg-gray-200 flex justify-center items-center"
              onClick={() => console.log('Google sign-in')}
            >
              <FcGoogle className="h-8 w-8" />
            </button>
            <button
              className="w-full bg-gray-100 p-3 rounded-full hover:bg-gray-200 flex justify-center items-center"
              onClick={() => console.log('GitHub sign-in')}
            >
              <FaGithub className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
