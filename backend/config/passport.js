// backend/config/passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');  // Ensure this path is correct
require('dotenv').config();

// Use the Google Strategy for passport authentication
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,   // Google Client ID from .env
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Google Client Secret from .env
  callbackURL: "http://localhost:5000/api/auth/google/callback",  // Callback URL (must match the Google Developer Console settings)
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if the user already exists in the database
    let existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      // If the user exists, return the user
      return done(null, existingUser);
    }

    // If the user doesn't exist, create a new one
    const newUser = new User({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,  // Ensure this email is correct
    });

    // Save the new user to the database
    await newUser.save();

    // Return the new user after saving
    done(null, newUser);
  } catch (err) {
    console.error('Error during Google OAuth:', err);
    done(err, null);  // Pass the error to the done callback if something goes wrong
  }
}));

// Serialize the user (store the user ID in session)
passport.serializeUser((user, done) => {
  done(null, user.id);  // Store the user ID in the session
});

// Deserialize the user (fetch the user from the DB using the stored user ID)
passport.deserializeUser(async (id, done) => {
  try {
    // Find the user from the database by their ID
    const user = await User.findById(id);
    done(null, user);  // Return the user to the session
  } catch (err) {
    done(err, null);  // If there’s an error, return it
  }
});