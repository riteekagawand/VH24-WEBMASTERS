import express from 'express';
import { registerUser, verifyOtp, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for OTP verification
router.post('/verify-otp', verifyOtp);

// Route for user login
router.post('/login', loginUser);  // Added login route

export default router;  // Use default export
