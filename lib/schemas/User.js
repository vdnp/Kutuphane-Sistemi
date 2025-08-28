import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    email: { type: String, unique: true },
    phone: Number,
    password: String,
    role: { type: String, default: "student" },
    isActive: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
