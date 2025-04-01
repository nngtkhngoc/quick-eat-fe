import { create } from "zustand";
import User from "../types/User";

interface UserStore {
  user: User | null;

  loadingUser: boolean;
  fetchUser: () => Promise<void>;

  signOut: () => void;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  loadingUser: false,
  errorSignIn: null,
  errorSignUp: null,

  fetchUser: async () => {
    const token = localStorage.getItem("token") || "";

    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      });

      const data = await response.json();

      if (data.success) {
        set({ user: data.data });
      }
    } catch (error) {
      console.log("Error fetching user", error);
    }
  },

  signOut: () => {
    set({ user: null });
    localStorage.clear();
  },
}));
