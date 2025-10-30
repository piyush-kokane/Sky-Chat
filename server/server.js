import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));



// Route: get user
app.get("/api/users/:userName", async (req, res) => {
  try {
    const { userName } = req.params;
    console.log("Fetching user:", userName);

    const user = await User.findOne({ userName: userName.trim() }).select("-_id -__v");
    console.log("Found user:", user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
