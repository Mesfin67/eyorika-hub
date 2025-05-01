// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors("*"));

// Connect to MongoDB using environment variables for security.
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String, // in production, always hash passwords!
});
const User = mongoose.model("User", userSchema);

// POST /api/auth/signup
app.post("/api/auth/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the username is already taken.
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    // Hash the password before saving.
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res
      .status(201)
      .json({ message: "User created successfully", username: user.username });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error during signup", error: error.message });
  }
});

// POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Look up the user by username.
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Compare the client password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Generate and send a JSON Web Token (JWT)
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res
      .status(200)
      .json({
        message: "Login successful",
        username: user.username,
        token,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error during login", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on PORT: " + PORT));
