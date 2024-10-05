// routes/profileRoutes.js
import express from 'express';
import { createOrUpdateProfile, getProfiles } from '../controllers/profileController.js'; // Import the new function
import { addCoinsToProfile } from '../controllers/profileController.js';

const router = express.Router();

// POST /api/profile
router.post('/', createOrUpdateProfile);
// router.put('/', createOrUpdateProfile);
// GET /api/profile
router.get('/', getProfiles); // Add the GET route for fetching profiles

router.post('/coins', addCoinsToProfile);

export default router;
