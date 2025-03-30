import { create } from "zustand";
import user from "../assets/images/user.png";

interface user {
  id: string;
  username: string;
  email: string;
  phone_number: string;
  fullname: string | null;
  profile_pic: string | null;
}

interface UserStore {
  user: user | null;

  //   loadingSignUp: boolean;
  //   signUp: (
  //     username: string,
  //     email: string,
  //     phone_number: string,
  //     password: string,
  //     confirm_password: string
  //   ) => Promise<void>;

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
