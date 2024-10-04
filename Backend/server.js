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
