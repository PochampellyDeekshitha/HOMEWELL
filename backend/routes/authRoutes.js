const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require('../models/User');

// Import controller functions
const {
  signup,
  signin,
  googleSignIn,
  deleteUserById,
} = require("../controllers/authController");

// 🟢 Email/Password Authentication Routes
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Here you should add your actual signup logic:
    // - Check if user exists
    // - Hash password
    // - Save to DB

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔐 Sign In
router.post("/signin", signin);

// ✅ Google Token-Based Sign-In
router.post("/google/token", googleSignIn);

// 🔵 Google OAuth Web Flow
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account"
  })
);

// 🔵 Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/signin",
    session: true
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

// 🗑 Delete user by ID
router.delete("/:id", deleteUserById);

module.exports = router;