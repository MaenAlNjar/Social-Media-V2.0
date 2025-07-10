import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: string,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: string,
    required: true,
    unique: true,
    lowercase: true,
  },
  Password: {
    type: string,
    required: true,
    minlength: 6,
  },
  profilePicture: {
    type: string,
    default: "",
  },
  bio: {
    type: string,
    default: "am to lazy to type any thing",
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;