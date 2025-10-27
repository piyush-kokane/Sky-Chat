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
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Route: add multiple users
app.post("/api/users/add", async (req, res) => {
  try {
    const users = req.body;
    const result = await User.insertMany(users, { ordered: false });
    res.status(201).json({ message: "Users added successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Error adding users", error });
  }
});

// Route: get all users
app.get("/api/users/:userName", async (req, res) => {
  try {
    const { userName } = req.params;

    // Exclude _id and __v fields
    const user = await User.findOne({ userName }).select("-_id -__v");

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
