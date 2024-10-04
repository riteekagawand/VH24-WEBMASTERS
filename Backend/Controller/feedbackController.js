// controllers/feedbackController.js

import Feedback from '../models/Feedback.js';

// Submit feedback
export const submitFeedback = async (req, res) => {
  try {
    const { organization, rating, comments } = req.body;

    const feedback = new Feedback({
      volunteer: req.volunteersID, // Assuming userId is set in middleware after token verification
      organization,
      rating,
      comments
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!', feedback });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

// Get feedback for an organization
export const getFeedbackForOrganization = async (req, res) => {
  try {
    const { orgId } = req.params;
    const feedback = await Feedback.find({ organization: orgId }).populate('volunteer', 'username'); // Populate volunteer info

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
  }
};
