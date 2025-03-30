import { create } from "zustand";
import User from "../types/user";

interface UserStore {
  user: User | null;

  loadingUser: boolean;
  fetchUser: () => Promise<void>;

  signIn: (identifier: string, password: string) => Promise<void>;
  signUp: (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
    phone_number: string,
    profile_pic: string
  ) => Promise<void>;

  signOut: () => void;

  errorAuth: string | null;
}

const BASE_URL = "http://localhost:5001/api";

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  loadingUser: false,
  errorAuth: null,

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

  signIn: async (identifier: string, password: string) => {
    set({ loadingUser: true });
    try {
      const response = await fetch(`${BASE_URL}/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        set({ user: data.data });
        set({ errorAuth: null });
      } else {
        set({ errorAuth: data.message });
      }
    } catch (error) {
      console.log("Error signing in", error);
    }
    set({ loadingUser: false });
  },

  signUp: async (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
    phone_number: string,
    profile_pic: string
  ) => {
    set({ loadingUser: true });

    try {
      const response = await fetch(`${BASE_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirm_password,
          phone_number,
          profile_pic,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        set({ errorAuth: null });
        set({ user: data.data });
      } else {
        set({ errorAuth: data.message });
      }
    } catch (error) {
      console.log("Error signing up", error);
    }
    set({ loadingUser: false });
  },

  signOut: () => {
    set({ user: null });
    localStorage.clear();
  },
}));
