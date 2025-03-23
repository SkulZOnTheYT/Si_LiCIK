import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);