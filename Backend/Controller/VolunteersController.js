import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Volunteers from '../models/Volunteers.js';

// User registration function
export const registerVolunteers = async (req, res) => {
  const {
    name,
    email,
    username,
    password,
    gender,
    age,
    skills,
    qualification,
    address
  } = req.body;

  // Check for required fields
  if (!name || !email || !username || !password || !gender || !age || !skills || !qualification || !address) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email format' });
  }

  try {
    // Check if the email or username already exists
    let volunteers = await Volunteers.findOne({ $or: [{ email }, { username }] });
    if (volunteers) {
      return res.status(400).json({ msg: 'Volunteers with this email or username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user instance
    volunteers = new Volunteers({
      name,
      email,
      username,
      password: hashedPassword,
      gender,
      age,
      skills,
      qualification,
      address
    });

    // Save the user to the database
    await volunteers.save();

    // Create JWT token
    const payload = {
      volunteers: {
        id: volunteers._id,
        username: volunteers.username
      }
    };

    // Sign JWT and send it to the client
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ volunteers, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// User login function (login with username and password)
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter email and password' });
  }

  try {
    // Find user by username
    const volunteers = await Volunteers.findOne({ email });
    if (!volunteers) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, volunteers.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Generate JWT token
    const payload = {
      volunteers: {
        id: volunteers._id,
        email: volunteers.email
      }
    };

    // Sign the token and send it to the client
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ volunteers, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get user profile
export const getProfile = async (req, res) => {
  try {
      const volunteers = await Volunteers.findById(req.volunteersID); // Get user ID from token
      if (!volunteers) {
          return res.status(404).json({ message: 'Volunteers not found' });
      }
      res.json(volunteers); // Send back user data
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};
