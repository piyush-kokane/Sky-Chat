import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userImage: String,
  userName: { type: String, unique: true },
  displayName: String,
  userContact: String,
});

export default mongoose.model("User", userSchema);
