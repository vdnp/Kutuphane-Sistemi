import { create } from "zustand";
import { apiRequest } from "@lib/api";

export const useAuthStore = create((set) => ({
  currentUser: null,
  adminLogin: async (email, password) => {
    try {
      const res = await apiRequest("auth/admin-login", "POST", null, null, {
        email,
        password,
      });
      console.log(res);
      if (res.user.role === "admin" || res.user.role === "librarian") {
        set({ currentUser: res.user });
        return { succes: true, message: "Giriş başarılı." };
      } else {
        return { succes: false, message: "Yetkisiz giriş." };
      }
    } catch (error) {
      return { succes: false, message: "server error" };
    }
  },
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
  register: async (name, lastName, email, phone, password) => {
    try {
      const res = await apiRequest("auth/register", "POST", null, null, {
        name,
        lastName,
        email,
        phone,
        password,
      });
      console.log(res);
      if (res.error) {
        return { succes: false, message: res.error };
      }
      const newUser = res.newUser || res; // API'nin dönüş formatına göre

      set({
        currentUser: newUser,
      });
      return { succes: true, message: "Kayıt Başarılı." };
    } catch (error) {
      return { succes: false, message: "server error" };
    }
  },
}));
