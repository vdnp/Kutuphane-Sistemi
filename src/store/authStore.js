import { create } from "zustand";
import { users } from "../../dummyUsers";
import { FormatDate } from "../../styles/functions/generalFuncs";

export const useAuthStore = create((set) => ({
  currentUser: null,
  login: (email, password) => {
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
    const newUser = {
      id: "",
      name,
      lastName,
      email,
      phone,
      password,
      role: "student",
      created_at: FormatDate(),
    };
    users.push(newUser);
    set({ currentUser: newUser });
  },
}));
