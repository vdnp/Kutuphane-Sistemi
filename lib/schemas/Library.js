import mongoose from "mongoose";

const statsDetailSchema = new mongoose.Schema({
  date: { type: Date, required: true },

  // Kitap işlemleri
  totalBorrowedBooks: { type: Number, default: 0 }, // toplam ödünç alınan
  totalReturnedBooks: { type: Number, default: 0 }, // toplam iade edilen
  overdueBooks: { type: Number, default: 0 }, // geç iade edilen kitap sayısı
  avgBorrowDuration: { type: Number, default: 0 }, // ortalama ödünç süresi (gün)

  // Kullanıcı işlemleri
  newMembers: { type: Number, default: 0 }, // yeni üye sayısı
  activeUsers: { type: Number, default: 0 }, // o gün/hafta aktif kullanıcı
  roleDistribution: {
    // kullanıcı rolleri dağılımı
    admin: { type: Number, default: 0 },
    student: { type: Number, default: 0 },
    teacher: { type: Number, default: 0 },
  },

  // Finansal
  totalFines: { type: Number, default: 0 }, // toplam ceza miktarı

  // Kitap kategorileri
  topCategories: [{ type: String }], // en çok ödünç alınan kategoriler
  lowStockBooks: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      title: String,
      stock: Number,
    },
  ],

  // En çok ödünç alınan kitaplar
  topBooks: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      title: String,
      borrowCount: Number,
    },
  ],

  // En aktif kullanıcılar
  mostActiveUsers: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: String,
      borrowCount: Number,
    },
  ],

  // Trendler
  monthlyTrends: {
    newBooks: { type: Number, default: 0 },
    newUsers: { type: Number, default: 0 },
    totalBorrows: { type: Number, default: 0 },
  },
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
