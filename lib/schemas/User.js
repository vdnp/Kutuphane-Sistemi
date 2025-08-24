import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    name: String,
    lastName: String,
    email: { type: String, unique: true },
    phone: Number,
    password: String,
    role: { type: String, default: "student" },
    created_at: { type: Date, default: Date.now },
    isActive: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
