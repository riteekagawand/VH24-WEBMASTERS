import User from '../models/User.js';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs'; // For password hashing
import jwt from 'jsonwebtoken'; // For token generation

// Generate OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
};

// Controller for user registration
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const otp = generateOtp(); // Generate the OTP
    const otpExpires = Date.now() + 5 * 60 * 1000; // Set OTP expiration time (5 minutes)

    const newUser = new User({ username, email, password: hashedPassword, otp, otpExpires });
    await newUser.save();

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Store in .env
        pass: process.env.EMAIL_PASS,  // Store in .env
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
    res.status(500).json({ success: false, message: 'An error occurred during registration.' });
  }
};

// Controller for OTP verification
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
    }

    user.otp = undefined; // Clear OTP after successful verification
    user.otpExpires = undefined; // Clear expiration timestamp
    await user.save();

    res.json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'An error occurred during OTP verification.' });
  }
};

// Controller for user login
const loginUser = async (req, res) => {
  const { email, password } = req.body; // Capture email and password from the request body

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'An error occurred during login.' });
  }
};

export { registerUser, verifyOtp, loginUser }; // Use named exports
