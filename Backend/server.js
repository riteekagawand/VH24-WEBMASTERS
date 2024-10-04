<<<<<<< HEAD
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/VolunteersRoutes.js'
import resourceRoutes from './routes/resourceRoutes.js'
import alertsRoutes from './routes/alert.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import organizationRoutes from './routes/organizationRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Add this line to enable CORS for all routes
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/api/alerts', alertsRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/organization', organizationRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
>>>>>>> c7a4484ffd9b0a14aacc8c35c90f4190b1b893d0
