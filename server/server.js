import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/User.js";
import ChatDetails from "./models/ChatDetails.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));



// Get user
app.get("/api/users/:userName", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ userName: username.trim() }).select("-_id -__v");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  }
  catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
});


// GET all chats for a user
app.get("/api/user/:username/chatdetails", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ userName: username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const chatIds = user.userChats;
    const chats = await ChatDetails.find({ chatId: { $in: chatIds } }).select("-_id -__v");

    res.json(chats);
  }
  catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
