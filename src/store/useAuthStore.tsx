import { create } from "zustand";
import User from "../types/User";

interface UserStore {
  user: User | null;

  loadingUser: boolean;
  fetchUser: () => Promise<void>;

  loadingUpdate: boolean;
  updateUser: (
    data: updateUserProps
  ) => Promise<{ success: boolean; message?: string }>;

  signOut: () => void;
}

interface updateUserProps {
  fullname: string | null;
  email: string | null;
  phone: string | null;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  loadingUser: false,

  loadingUpdate: false,

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

  updateUser: async (data: updateUserProps) => {
    set({ loadingUpdate: true });
    const token = localStorage.getItem("token") || "";

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          fullname: data.fullname,
          email: data.email,
          phone_number: data.phone,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        set({ user: resData.data });
        return { success: true };
      }

      return { success: false, message: resData.message };
    } catch (error) {
      console.log("Error update user", error);
      console.log(data);
      return { success: false, message: "Internal Server Error" };
    } finally {
      set({ loadingUpdate: false });
    }
  },
}));
