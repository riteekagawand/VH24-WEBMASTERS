import mongoose from 'mongoose';

// Define the user schema with all the new fields
const VolunteersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: {
    type: [String], // This will be an array of strings to store multiple skills
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

// Export the user model
const Volunteers = mongoose.model('Volunteers', VolunteersSchema);
export default Volunteers;
