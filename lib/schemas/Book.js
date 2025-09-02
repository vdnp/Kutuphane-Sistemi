import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: Array,
    isbn: Number,
    stock: Number,
    available: { type: Boolean, default: true },
    createDate: Date,
    cover_image: String,
  },
  { timestamps: true }
);

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
