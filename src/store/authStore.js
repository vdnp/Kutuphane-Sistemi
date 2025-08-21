import { create } from "zustand";
import { users as initialUsers } from "../../dummyUsers";
import { FormatDate } from "../../styles/functions/generalFuncs";

export const useAuthStore = create((set, get) => ({
  users: initialUsers,
  currentUser: null,
  login: (email, password) => {
    const { users } = get();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      set({ currentUser: user });
      return true;
    }
    return false;
  },
  logout: () => set({ currentUser: null }),
  register: (name, lastName, email, phone, password) => {
    const { users } = get();

    const exists = users.some((u) => u.email === email);
    if (exists) {
      return false;
    }

    const newUser = {
      id: users.length + 1,
      name,
      lastName,
      email,
      phone,
      password,
      role: "student",
      created_at: FormatDate(),
    };
    set({
      users: [...users, newUser],
      currentUser: newUser,
    });
    return true;
  },
}));
