import mongoose from "mongoose";

const statsDetailSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  totalBorrowedBooks: { type: Number, default: 0 },
  totalReturnedBooks: { type: Number, default: 0 },
  newMembers: { type: Number, default: 0 },
  activeUsers: { type: Number, default: 0 },
  topCategories: [{ type: String }],
  topBooks: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      title: String,
      borrowCount: Number,
    },
  ],
});

const LibraryStatsSchema = new mongoose.Schema(
  {
    dailyStats: [statsDetailSchema], // Günlük istatistik listesi
    weeklyStats: [statsDetailSchema], // Haftalık istatistik listesi
    monthlyStats: [statsDetailSchema], // Aylık istatistik listesi
    yearlyStats: [statsDetailSchema], // Yıllık istatistik listesi
  },
  { timestamps: true }
);

export default mongoose.models.LibraryStats ||
  mongoose.model("LibraryStats", LibraryStatsSchema);
