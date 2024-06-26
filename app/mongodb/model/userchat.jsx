import mongoose from "mongoose";

const chatModel = new mongoose.Schema({
  imageid: String,
  title: String,
  summary: String,
  messages:Object,
});

export const Userchat = mongoose.models.userchat || mongoose.model("userchat", chatModel);