const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Use username as the lookup field.
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Encrypt password using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create the user using username and hashed password.
    user = new User({ username, password: hashedPassword });
    await user.save();
    
    return res.status(200).json({ message: "Successfully signed up. Please login now." });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Look for the user via username.
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ error: "Invalid Credentials" });
    
    // Compare the plaintext password with the hashed one
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid Credentials" });
    
    // Create JWT Token with a payload containing the user's id and username
    const payload = { user: { id: user.id, username: user.username } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      return res.status(200).json({ token, username: user.username });
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

module.exports = router;
