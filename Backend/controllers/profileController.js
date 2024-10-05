// controllers/profileController.js
import Profile from '../models/Profile.js';

export const createOrUpdateProfile = async (req, res) => {
  const { email, profile } = req.body;

  // Validate incoming profile data
  if (!profile || !profile.name || !profile.gender || !profile.age || !profile.phoneNumber || !profile.city || !profile.state || !profile.pin) {
    return res.status(400).json({ success: false, message: 'All profile fields are required.' });
  }

  try {
    const existingProfile = await Profile.findOne({ email });

    if (existingProfile) {
      // Update the existing profile
      existingProfile.profile = profile;
      await existingProfile.save();
      return res.status(200).json({ success: true, message: 'Profile updated successfully.' });
    } else {
      // Create a new profile
      const newProfile = new Profile({ email, profile });
      await newProfile.save();
      return res.status(201).json({ success: true, message: 'Profile created successfully.' });
    }
  } catch (error) {
    console.error('Error saving profile:', error); // Log the error
    return res.status(500).json({ success: false, message: 'Error saving profile.', error: error.message });
  }
};
export const getProfiles = async (req, res) => {
    try {
      const profiles = await Profile.find(); // Fetch all profiles
      return res.status(200).json(profiles); // Return profiles in the response
    } catch (error) {
      console.error('Error fetching profiles:', error); // Log the error
      return res.status(500).json({ success: false, message: 'Error fetching profiles.', error: error.message });
    }
  };

  export const addCoinsToProfile = async (req, res) => {
    const { email, coins } = req.body;
  
    if (!email || !coins) {
      return res.status(400).json({ success: false, message: 'Email and coins are required.' });
    }
  
    try {
      const profile = await Profile.findOne({ email });
  
      if (!profile) {
        return res.status(404).json({ success: false, message: 'Profile not found.' });
      }
  
      profile.coins = (profile.coins || 0) + coins; // Update coins, defaulting to 0 if undefined
      await profile.save();
  
      return res.status(200).json({ success: true, message: 'Coins added successfully.', coins: profile.coins });
    } catch (error) {
      console.error('Error updating coins:', error);
      return res.status(500).json({ success: false, message: 'Error updating coins.', error: error.message });
    }
  };
  