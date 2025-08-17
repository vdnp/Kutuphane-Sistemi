import { create } from "zustand";
import { users } from "../../dummyUsers";

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
  register: (name, lastName, email, password) => {
    const newUser = {
      id: "",
      name,
      lastName,
      email,
      password,
      role: "student",
      created_at: Date.now(),
    };
    users.push(newUser);
    set({ currentUser: newUser });
  },
}));
