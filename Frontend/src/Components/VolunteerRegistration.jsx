import React, { useState } from 'react';
import bg from '../assets/registerbg.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
    email: '',
    phone: '',
    address: '',
    location: '',
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
      name: '',
      age: '',
      gender: '',
      bloodGroup: '',
      height: '',
      weight: '',
      email: '',
      phone: '',
      address: '',
      location: '',
      password: '',
    });
    setErrorMessage('');
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full max-h-screen object-cover opacity-70 "
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative w-full max-w-lg p-8 rounded-lg shadow-xl h-[680px] bg-white overflow-hidden">
        

        <div className="relative w-full bg-transparent p-8">
          <h2 className="text-2xl font-bold text-center mb-6 ">
            Volunteer Registration
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
            
            {/* Name and Age */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black fot-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter Full Name'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-1/4">
                <label className="block text-black ">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder='Age'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-black ">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Blood Group, Height, and Weight */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black ">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  placeholder='Enter blood group'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-1/4">
                <label className="block text-black ">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder='Height'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-1/4">
                <label className="block text-black">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder='width'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black ">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter Email ID'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-grow">
                <label className="block text-black ">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder='Enter phone number'
                  onChange={handleChange}
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Address and Location */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-black ">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='Enter Address'
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex-grow">
                <label className=" text-black ">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder='Enter Location'
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 p-2 rounded-md border border-gray-300 bg-blue-100  focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
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
            <p className="">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-400 underline">
                Login here
                </Link>
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
