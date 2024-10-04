import express from 'express';
import { registerOrganization, loginOrganization, getProfile } from '../Controller/organizationController.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // Ensure correct path

const router = express.Router();

// Registration route
router.post('/register', registerOrganization);

// Login route
router.post('/login', loginOrganization);

// Get Profile route
router.get('/profile', verifyToken, getProfile); // Protecting the profile route with authMiddleware

export default router;
