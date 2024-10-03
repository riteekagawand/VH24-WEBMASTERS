import React, { useState } from 'react';
import { FaLock, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { RxEyeOpen } from "react-icons/rx";

const LoginForm = ({ toggleForm }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Login Successful');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Black background div */}
      <div className="absolute rotate-3 h-[400px] w-[800px] rounded-[50px] bg-black hover:bg-[#F07C7C] "></div>

      {/* White form container */}
      <div className="relative h-[400px] w-[800px] rounded-[50px] border border-black bg-white p-6 z-10">
        <div className="max-w-5xl h-auto flex justify-center items-center">
          {/* Main Container */}

          {/* Left side (Login Form) */}
          <div className="w-2/3 pr-4">
            <div className="flex flex-col ml-5 justify-start items-start">
              <h2 className="text-2xl font-bold text-left mb-2">Welcome back</h2>
              <p className="text-left text-gray-500 mb-8">for endless learning!</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="relative">
                <input
                  className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                  className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your password"
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-3 text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <BiHide className="size-5" /> : <RxEyeOpen className="size-5" />}
                </button>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end text-sm">
                <a href="#" className="text-gray-500 hover:text-black">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <div className="flex justify-center items-center">
                <button className="w-[150px] bg-yellow-500 text-white py-3 rounded-[50px] hover:bg-yellow-600 transition-colors">
                  Login
                </button>
              </div>

              <div className="text-center mt-4">
                <span>
                  Don't have an account?{' '}
                  <Link to="/register"
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={toggleForm}
                  >
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>

          {/* Separator - dotted line */}
          <div className="border-l border-dotted border-gray-300"></div>

          {/* Right side (Social logins) */}
          <div className="w-1/3 pl-4 flex flex-col justify-normal mt-[-90px]">
            <h2 className="text-lg font-bold text-center mb-4">Sign in with</h2>
            <div className="space-y-4 w-full">
              <button
                className="w-full bg-gray-100 p-3 rounded-full hover:bg-gray-200 flex justify-center items-center transition-all"
                onClick={() => console.log('Google sign-in')}
              >
                <FcGoogle className="h-8 w-8" />
              </button>
              <button
                className="w-full bg-gray-100 p-3 rounded-full hover:bg-gray-200 flex justify-center items-center transition-all"
                onClick={() => console.log('GitHub sign-in')}
              >
                <FaGithub className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
