import express from 'express';
import { getLeaderboard, updateCoins, addDummyData } from '../controllers/leaderboardController.js';

const router = express.Router();

router.get('/', getLeaderboard);  // Fetch leaderboard
router.put('/update', updateCoins);  // Update coins
router.post('/', addDummyData); // Corrected to match the GET route path

export default router;
