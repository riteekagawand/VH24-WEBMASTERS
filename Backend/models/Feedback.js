// models/Feedback.js

import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer', required: true },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
  rating: { type: Number, min: 1, max: 5, required: true }, // Rating system (1-5 stars)
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);
export default Feedback;
