import React, { useState } from 'react';
import bg from '../assets/registerbg.jpg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    gender: '',
    age: '',
    skills: '',
    qualification: '',
    address: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed.');
        toast.error(errorData.message || 'Registration failed.'); // Show error toast
        return;
      }

      const result = await response.json();
      toast.success('User registered successfully!'); // Show success toast
      console.log('User registered:', result);

      // Reset form after successful registration
      setFormData({
        name: '',
        email: '',
        username: '',
        password: '',
        gender: '',
        age: '',
        skills: '',
        qualification: '',
        address: '',
      });
    } catch (error) {
      setErrorMessage('An error occurred while registering.');
      toast.error('An error occurred while registering.'); // Show error toast for network issues
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full max-h-screen object-cover"
      />
      
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative max-w-lg p-8 rounded-lg shadow-xl h-[610px] bg-white overflow-hidden">
        <div className="relative w-full bg-transparent ">
          <h2 className="text-2xl font-bold text-center mb-3 ">
            Volunteer Registration
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Name and Username */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter Full Name'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-grow">
                <label className="block text-black font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder='Enter Username'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Email and Password */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black ">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter Email ID'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-grow">
                <label className="block text-black ">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter Password'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Gender and Age */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black ">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-[185px] px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex-grow">
                <label className="block text-black ">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder='Age'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Skills and Qualification */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black ">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder='Enter Skills (comma separated)'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-grow">
                <label className="block text-black ">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder='Enter Qualification'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-black ">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder='Enter Address'
                className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100 focus:outline-none focus:ring focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> {/* Include the ToastContainer here */}
    </div>
  );
};

export default Register;