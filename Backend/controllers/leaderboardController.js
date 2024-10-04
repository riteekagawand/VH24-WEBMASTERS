import Leaderboard from '../models/leaderboard.js';

// Get all leaderboard data sorted by coins
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboardData = await Leaderboard.find().sort({ coins: -1 });

    // Recalculate ranks based on sorted order
    

    // Save updated ranks
    await Promise.all(leaderboardData.map(user => user.save()));

    res.json(leaderboardData);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: 'Error retrieving leaderboard data' });
  }
};

// Add a new user to the leaderboard (dummy data via Postman)
export const addDummyData = async (req, res) => {
  const { name, coins } = req.body;

  try {
    // Check if user already exists
    let existingUser = await Leaderboard.findOne({ name });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new entry in the leaderboard
    const newUser = new Leaderboard({ name, coins });
    await newUser.save();

    res.status(201).json({ message: 'New leaderboard entry added', newUser });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: 'Error adding dummy data' });
  }
};

// Update the user's coins and rank based on the new coin count
export const updateCoins = async (req, res) => {
  const { name, coins } = req.body;

  try {
    let user = await Leaderboard.findOne({ name });
    
    if (user) {
      // Update existing user's coins
      user.coins = coins;
      await user.save();
    } else {
      // Create a new entry if the user doesn't exist
      user = new Leaderboard({ name, coins });
      await user.save();
    }

    // Recalculate rankings after updating coins
    const leaderboardData = await Leaderboard.find().sort({ coins: -1 });
    leaderboardData.forEach((user, index) => {
      user.rank = index + 1;
    });

    // Save updated ranks
    await Promise.all(leaderboardData.map(user => user.save()));

    res.json({ message: 'Coins updated and rankings recalculated', leaderboardData });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: 'Error updating coins' });
  }
};
