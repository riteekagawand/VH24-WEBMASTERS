// routes/feedbackRoutes.js

import express from 'express';
import { submitFeedback, getFeedbackForOrganization } from '../Controller/feedbackController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, submitFeedback); // Volunteers submit feedback
router.get('/:orgId', verifyToken, getFeedbackForOrganization); // Organizations retrieve feedback

export default router;
