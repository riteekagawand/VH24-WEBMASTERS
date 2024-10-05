import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  profile: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
    sftokens: {
      type: Number,
      required: true,
      default:100,
    },
  },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
