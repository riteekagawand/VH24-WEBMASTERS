// controllers/profileController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken'; 

// Get user profile
// Get user profile or create a new one if not found
const getProfile = async (req, res) => {
    try {
      // Attempt to find the user by ID
      let user = await User.findById(req.volunteers.id).select('-password -otp -otpExpires'); // Exclude sensitive info
      
      // If no user is found, create a new one
      if (!user) {
        const newUser = new User({
          _id: req.volunteers.id, // Use the ID from the request
          // You can set other default values as needed here
          profile: {
            name: '', // Default name or handle as required
            gender: '', // Default gender
            age: null, // Default age
            phone: '', // Default phone
            city: '', // Default city
            pincode: '', // Default pincode
            state: '', // Default state
          }
        });
        user = await newUser.save(); // Save the new user to the database
      }
  
      // Return the user's profile
      res.json({ success: true, profile: user.profile });
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ success: false, message: 'An error occurred. Please try again Later.' });
    }
  };

// Update user profile
const updateProfile = async (req, res) => {
    const { name, gender, age, phone, city, pincode, state } = req.body; // Capture profile data
    const token = localStorage.getItem('token') // Extract token from Authorization header
  console.log(token)
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided, authorization denied.' });
    }
  
    try {
      // Verify and decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret
      const userId = decoded.id; // Extract the user ID from the token
  
      // Update the user profile using the user ID
      const user = await User.findByIdAndUpdate(
        userId,
        {
          'profile.name': name,
          'profile.gender': gender,
          'profile.age': age,
          'profile.phone': phone,
          'profile.city': city,
          'profile.pincode': pincode,
          'profile.state': state,
        },
        { new: true, runValidators: true }
      ).select('-password -otp -otpExpires');
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found.' });
      }
  
      res.json({ success: true, profile: user.profile });
    } catch (error) {
      console.error('Error updating profile:', error);
      
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ success: false, message: 'Invalid token.' });
      }
      
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ success: false, message: 'Token has expired.' });
      }
  
      res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
    }
  };
  

export { getProfile, updateProfile };
