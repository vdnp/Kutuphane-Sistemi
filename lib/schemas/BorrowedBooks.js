import mongoose from "mongoose";

const borrowedSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  borrow_date: { type: Date, default: Date.now },
  return_date: Date,
  is_returned: Boolean,
  fine_amount: Number,
});

export default mongoose.models.BorrowedBooks ||
  mongoose.model("BorrowedBooks", borrowedSchema);
