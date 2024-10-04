import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  skillRequirement: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization; // Use export default for ES modules
