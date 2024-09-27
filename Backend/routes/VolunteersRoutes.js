import express from 'express';
import { registerVolunteers, login, getProfile } from '../controller/VolunteersController.js'; // Updated file path
import { verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router();

// Register route
router.post('/register', registerVolunteers);

// Login route (with username)
router.post('/login', login);

// Profile route
router.get('/profile', verifyToken, getProfile);

export default router;
