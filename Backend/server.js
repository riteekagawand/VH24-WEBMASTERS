import express from 'express';
import connectDB from './config/db.js'; // Ensure your connection setup is in this file
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package

dotenv.config(); // Load environment variables

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Enable CORS for the specified origin
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes); // API for authentication

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
