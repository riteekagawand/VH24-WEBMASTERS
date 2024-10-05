// routes/profileRoutes.js
import express from 'express';
// import { verifyToken } from '../middleware/authMiddleware.js';
import { getProfile, updateProfile } from '../controllers/profileController.js';

const router = express.Router();

router.get('/profile',  getProfile); // Get user profile
router.post('/profile', updateProfile)

export default router; // Use default export
