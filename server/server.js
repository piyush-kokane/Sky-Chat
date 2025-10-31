import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/User.js";
import ChatList from "./models/ChatList.js";
import { authenticateToken } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


app.post("/api/login", async (req, res) => {
  const { username } = req.body;
  console.log("loging:", username)
  const payload = { userName: username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});
/*
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ userName: username });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create token payload
  const payload = { username: user.userName };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});
*/

// Get user
app.get("/api/userdata/", authenticateToken, async (req, res) => {
  try {
    const username = req.userName;
    console.log("username: ", username)
    const user = await User.findOne({ userName: username.trim() }).select("-_id -__v");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  }
  catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
});


// GET all chats for a user
app.get("/api/chatlist", authenticateToken, async (req, res) => {
  try {
    const username = req.userName;
    const user = await User.findOne({ userName: username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const chatIds = user.userChats;
    const chats = await ChatList.find({ chatId: { $in: chatIds } }).select("-_id -__v");

    res.json(chats);
  }
  catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
