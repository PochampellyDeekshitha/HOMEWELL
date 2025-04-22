const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');

// Google OAuth2 Client
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID ||
    '377906248140-vh628eiuhj29b2lfsvpsc2vjqk9viise.apps.googleusercontent.com'
);

// 🔐 Sign Up
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Send response with token and user data
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔐 Sign In
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'User not found' });

    // Compare the password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Send response with token and user data
    res.status(200).json({
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🟢 Google Token-Based Sign-In
exports.googleSignIn = async (req, res) => {
  try {
    const { credential } = req.body;

    console.log(
      '🔐 Received Google Credential:',
      credential?.slice(0, 10) + '...'  // Debugging: Print first 10 characters of the token
    );

    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience:
        process.env.GOOGLE_CLIENT_ID ||
        '377906248140-vh628eiuhj29b2lfsvpsc2vjqk9viise.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();
    const { sub, email, name } = payload;

    // Check if user already exists based on Google ID or email
    let user = await User.findOne({
      $or: [{ googleId: sub }, { email }],
    });

    // If user does not exist, create a new user with Google ID
    if (!user) {
      user = new User({
        googleId: sub,
        name,
        email,
        password: '', // No password needed for Google OAuth users
      });
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Send response with token and user data
    res.status(200).json({
      message: 'User signed in successfully',
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error('❌ Google Sign-In Error:', err.message);
    res.status(500).json({ error: 'Failed to authenticate user' });
  }
};

// 🗑 Delete user by ID (for Postman testing)
exports.deleteUserById = async (req, res) => {
  try {
    // Find and delete user by ID
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: 'User not found' });

    // Send response confirming deletion
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};