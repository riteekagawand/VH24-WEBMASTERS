// models/Resource.js

import mongoose from 'mongoose';

// Define the Resource schema
const ResourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['food', 'medical', 'shelter', 'logistics'],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  availableFrom: {
    type: Date,
    required: true,
  },
  availableTo: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contributedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Volunteer',
    default: null,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
    required: true,
  },
});

// Export the Resource model
const Resource = mongoose.model('Resource', ResourceSchema);
export default Resource;
