import { create } from "zustand";
import User from "../types/user";

interface UserStore {
  user: User | null;

  loadingUser: boolean;
  fetchUser: () => Promise<void>;
}

const BASE_URL = "http://localhost:5001/api";

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  loadingUser: false,

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
        set({ user: data });
      }
    } catch (error) {
      console.log("Error fetching user", error);
    }
  },
}));
