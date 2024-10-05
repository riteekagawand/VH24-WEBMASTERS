// models/User.js
import mongoose from 'mongoose';
import crypto from 'crypto'; // Import crypto to generate OTP

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: String },
    otpExpires: { type: Date , required: false },
});

// Method to generate OTP
userSchema.methods.generateOtp = function () {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    return otp.toString(); // Return as a string
};

const User = mongoose.model('User', userSchema);
export default User;
