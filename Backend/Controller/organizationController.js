import Organization from '../models/organizationModel.js'; // Ensure the path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // For generating JWT tokens

// Registration function
export const registerOrganization = async (req, res) => {
  const { organizationName, email, skillRequirement, location, password } = req.body;

  try {
    // Check if organization already exists
    const existingOrg = await Organization.findOne({ email });
    if (existingOrg) {
      return res.status(400).json({ message: 'Organization already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new organization
    const newOrganization = new Organization({
      organizationName,
      email,
      skillRequirement,
      location,
      password: hashedPassword,
    });

    await newOrganization.save();
    res.status(201).json({ message: 'Organization registered successfully' });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login function
export const loginOrganization = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the organization by email
    const organization = await Organization.findOne({ email });
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    // Compare the hashed password with the password provided
    const isMatch = await bcrypt.compare(password, organization.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a token (you can adjust the payload as necessary)
    const token = jwt.sign({ id: organization._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Profile function
export const getProfile = async (req, res) => {
  try {
    const organizationId = req.organizationId; // Assuming you're using a middleware to extract organization ID from JWT

    // Find the organization by ID
    const organization = await Organization.findById(organizationId).select('-password'); // Exclude password from the response
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    res.status(200).json(organization);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error', error });
  }
};
