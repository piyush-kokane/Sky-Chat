import mongoose from "mongoose";

const chatDetailsSchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  chatImage: String,
  chatName: String,
  text: String,
  time: String,
  messageCount: Number
});

export default mongoose.model("ChatDetails", chatDetailsSchema, "chatDetails");
