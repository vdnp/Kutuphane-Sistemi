import { create } from "zustand";
import { users as initialUsers } from "../../dummyUsers";
import { FormatDate } from "../../styles/functions/generalFuncs";
import { apiRequest } from "@lib/api";

export const useAuthStore = create((set, get) => ({
  users: initialUsers,
  currentUser: null,
  login: async (email, password) => {
    try {
      const res = await apiRequest("auth/login", "POST", null, null, {
        email,
        password,
      });
      console.log(res);
      if (res.error) {
        return { succes: false, message: res.error };
      }
      set({ currentUser: res.user });
      return { succes: true, message: "Giriş Başarılı." };
    } catch (e) {
      return { succes: false, message: "server error" };
    }
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
