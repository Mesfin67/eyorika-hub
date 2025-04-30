require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", require("./routes/auth"));

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Eyorikka Voluntary Organization API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
