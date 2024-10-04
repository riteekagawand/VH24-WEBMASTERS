// controllers/resourceController.js

import Resource from '../models/Resource.js';

// List available resources (POST /api/resources)
export const listResources = async (req, res) => {
  const { name, type, location } = req.body;

  const resource = new Resource({
    name,
    type,
    location,
    availableFrom: req.body.availableFrom,
    availableTo: req.body.availableTo,
    quantity: req.body.quantity,
    organization: req.volunteers.id, // Assuming the user is an organization
  });

  try {
    await resource.save();
    res.status(201).json({ message: 'Resource listed successfully', resource });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// View listed resources (GET /api/resources)
export const viewResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Contribute resources (POST /api/resources/:id/contribute)
export const contributeResource = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body; // Assuming volunteers can specify how much they contribute

  try {
    const resource = await Resource.findById(id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    // Update resource quantity and record who contributed
    resource.quantity += quantity;
    resource.contributedBy = req.volunteers.id; // Assuming the user is a volunteer
    await resource.save();

    res.status(200).json({ message: 'Resource contributed successfully', resource });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
