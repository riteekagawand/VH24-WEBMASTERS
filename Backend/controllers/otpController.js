const Otp = require('../models/Otp');
const nodemailer = require('nodemailer');

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  try {
    const otpRecord = new Otp({
      email,
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // OTP expires in 10 minutes
    });

    await otpRecord.save();

    // Send OTP via email (e.g., using nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: 'OTP sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await Otp.findOne({ email, otp });

    if (!otpRecord || otpRecord.expiresAt < Date.now()) {
      return res.status(400).json({ msg: 'Invalid or expired OTP' });
    }

    await Otp.deleteOne({ email, otp }); // Remove OTP after verification

    res.status(200).json({ msg: 'OTP verified successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
