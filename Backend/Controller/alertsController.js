// controllers/alertsController.js
import Alert from '../models/Alert.js';

// Create an alert
export const createAlert = async (req, res) => {
  const { title, description, skillsRequired, location } = req.body;
  const organizationId = req.volunteersID; // Assuming you are using middleware to get the user's ID

  if (!title || !description || !skillsRequired || !location) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const newAlert = new Alert({
      title,
      description,
      skillsRequired,
      location,
      organizationId,
    });

    await newAlert.save();
    res.status(201).json({ msg: 'Alert created successfully', alert: newAlert });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get alerts based on skillset and location
export const getAlerts = async (req, res) => {
  const { skills, location } = req.query;

  try {
    const alerts = await Alert.find({
      skillsRequired: { $in: skills.split(',') }, // Match any of the skills
      location,
    });

    res.json(alerts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
