// routes/alerts.js
import express from 'express';
import { createAlert, getAlerts } from '../Controller/alertsController.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // Assuming you have authentication middleware

const router = express.Router();

// POST /api/alerts - Create an alert
router.post('/', verifyToken, createAlert);

// GET /api/alerts - Retrieve alerts based on skills and location
router.get('/', getAlerts);

export default router;
