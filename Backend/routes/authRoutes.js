// routes/authRoutes.js
import express from 'express';
import { registerUser, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser); // Route for registration
router.post('/verify-otp', verifyOtp);  // Route for OTP verification

export default router; // Use default export
