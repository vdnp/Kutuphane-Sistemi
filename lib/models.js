import Book from "./schemas/Book";
import User from "./schemas/User";
import borrowedBooks from "./schemas/BorrowedBooks";
import Library from "./schemas/Library";

export default {
  books: Book,
  users: User,
  borrowedBooks: borrowedBooks,
  librarystats: Library,
};
