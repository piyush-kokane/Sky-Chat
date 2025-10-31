import mongoose from "mongoose";

const chatListSchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  chatImage: String,
  chatName: String,
  text: String,
  time: String,
  messageCount: Number
});

export default mongoose.model("ChatList", chatListSchema, "chatList");
