import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: Array,
    isbn: Number,
    stock: Number,
    available: { type: Boolean, default: true },
    //   cover_image: Boolean,
    added_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
