import mongoose from "mongoose";

const borrowedSchema = new mongoose.Schema({
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
  return_date: Date,
  is_returned: Boolean,
  fine_amount: Number,
});

export default mongoose.models.BorrowedBooks ||
  mongoose.model("BorrowedBooks", borrowedSchema);
