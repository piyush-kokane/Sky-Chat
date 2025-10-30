import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  displayName: String,
  userContact: String,
  userImage: String,
  userChats: [{ type: String }],
});

export default mongoose.model("User", userSchema);
