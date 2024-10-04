// controllers/authController.js
import User from '../models/User.js';
import nodemailer from 'nodemailer';

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    const otp = newUser.generateOtp(); // Generate OTP

    await newUser.save(); // Save the user along with OTP and expiry time

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is ${otp}`,
    });

    res.status(201).json({ success: true, message: 'OTP sent to your email!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
};


const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  console.log('Verifying OTP for email:', email); // Log incoming email

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log('User not found:', email); // Log if user is not found
      return res.status(400).json({ success: false, message: 'User not found.' });
    }

    // Log user and OTP for debugging
    console.log('User found:', user);
    console.log('User OTP:', user.otp);
    console.log('Incoming OTP:', otp);
    
    // Check if OTP matches and hasn't expired
    if (user.otp !== otp || user.otpExpires < Date.now()) {
      console.log('Invalid or expired OTP:', otp); // Log OTP mismatch
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
    }

    // Clear OTP after successful verification
    user.otp = undefined; 
    user.otpExpires = undefined;
    await user.save();

    res.json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
};



export { registerUser, verifyOtp }; // Use named exports
