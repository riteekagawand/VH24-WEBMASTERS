// routes/resourceRoutes.js

import express from 'express';
import { listResources, viewResources, contributeResource } from '../Controller/resourceController.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // Assuming you have a middleware to verify tokens

const router = express.Router();

// Routes for resources
router.post('/', verifyToken, listResources); // Create a resource
router.get('/', viewResources); // Get all resources
router.post('/:id/contribute', verifyToken, contributeResource); // Contribute to a resource

export default router;
