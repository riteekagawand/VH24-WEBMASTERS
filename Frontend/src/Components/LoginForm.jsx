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
    <div className="flex justify-center items-center h-screen">
      {/* Card Container */}
      <div className="bg-gray-800 relative max-w-3xl w-full h-auto rounded-3xl shadow-2xl p-6 flex justify-between">
        {/* Decorative Shapes */}
        <div className="absolute -top-10 -left-10 bg-yellow-500 w-40 h-40 rounded-full filter blur-lg opacity-60"></div>
        <div className="absolute -bottom-10 -right-10 bg-yellow-500 w-40 h-40 rounded-full filter blur-lg opacity-60"></div>

        {/* Left side (Login Form) */}
        <div className="w-2/3 pr-4">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-white opacity-70 mb-6">for endless learning!</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <input
                className="w-full border-none bg-gray-700 text-white rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="enter your email"
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
                className="w-full border-none bg-gray-700 text-white rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="enter your Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <FaLock className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
            </div>

            {/* Forgot password */}
            <div className="flex justify-start text-sm">
              <a href="#" className="text-white opacity-70 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-yellow-500 text-black py-3 rounded-full hover:bg-yellow-600 transition-colors font-bold">
              login
            </button>

            <div className="text-center mt-4">
              <span className="text-white opacity-70">
                New on edquest?{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={toggleForm}
                >
                  signup
                </span>
              </span>
            </div>
          </form>
        </div>

        {/* Separator - dotted line */}
        <div className="flex flex-col items-center justify-center px-4">
          <span className="text-white mb-2">OR</span>
          <div className="border-l border-dotted border-white h-20"></div>
        </div>

        {/* Right side (Social logins) */}
        <div className="w-1/3 pl-4 flex flex-col items-center justify-center space-y-4">
          <button
            className="bg-white p-3 rounded-full hover:bg-gray-100 flex justify-center items-center"
            onClick={() => console.log('Google sign-in')}
          >
            <FcGoogle className="h-10 w-10" />
          </button>
          <button
            className="bg-white p-3 rounded-full hover:bg-gray-100 flex justify-center items-center"
            onClick={() => console.log('GitHub sign-in')}
          >
            <FaGithub className="h-10 w-10 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
