// models/Alert.js
import mongoose from 'mongoose';

// Define the alert schema
const alertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skillsRequired: {
    type: [String], // Array of skills needed
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming 'User' model is used for organizations too
    required: true,
  },
});

// Export the alert model
const Alert = mongoose.model('Alert', alertSchema);
export default Alert;
