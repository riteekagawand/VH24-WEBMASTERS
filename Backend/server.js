import express from 'express'
import connectDb from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import otpRoutes from './routes/otpRoutes.js'
import leaderboardRoutes from './routes/leaderboardRoute.js'
import 'dotenv/config';


const app = express();

// Connect to database
connectDb();

// Middleware
app.use(express.json());



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
