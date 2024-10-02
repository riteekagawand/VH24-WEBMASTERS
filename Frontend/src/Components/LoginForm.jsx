import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const LoginForm = ({ toggleForm }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Login Successful');
  };

  return (
    <div>
      {/* Card Container */}
      <div className="max-w-5xl h-auto flex">
        {/* Left side (Login Form) */}
        <div className="w-2/3 pr-4">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
          <p className="text-center text-gray-500 mb-6">for endless learning!</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <MdMail className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end text-sm">
              <a href="#" className="text-gray-500 hover:text-black">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Login
            </button>

            <div className="text-center mt-4">
              <span>
                Don't have an account?{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={toggleForm}
                >
                  Register
                </span>
              </span>
            </div>
          </form>
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

export default LoginForm;
