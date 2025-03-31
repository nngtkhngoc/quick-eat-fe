import { create } from "zustand";
import Cart from "../types/Cart";

interface CartStore {
  cart: Cart | null;
  loadingCart: boolean;

  fetchCart: () => Promise<void>;
  addToCart: (food_id: string, quantity: number) => Promise<void>;
  updateCart: (
    food_id: string,
    cart_id: string,
    quantity: number
  ) => Promise<void>;
  clearCart: () => void;
}

const BASE_URL = "http://localhost:5001/api";
const token = localStorage.getItem("token") || "";

export const useCartStore = create<CartStore>((set) => ({
  cart: null,
  loadingCart: false,

  fetchCart: async () => {
    set({ loadingCart: true });
    try {
      const response = await fetch(`${BASE_URL}/cart/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const data = await response.json();

      if (data.success) {
        set({ cart: data.data });
      }
    } catch (error) {
      console.log("Error fetching cart: ", error);
    }
    set({ loadingCart: false });
  },

  addToCart: async (food_id: string, quantity: number) => {
    set({ loadingCart: true });

    try {
      const response = await fetch(`${BASE_URL}/cart/${food_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ quantity }),
      });

      const data = await response.json();

      if (data.success) {
        set({ cart: data.data });
      }
    } catch (error) {
      console.log("Error add to cart ", error);
    }
    set({ loadingCart: false });
  },

  updateCart: async (food_id: string, cart_id: string, quantity: number) => {
    set({ loadingCart: true });
    try {
      const response = await fetch(`${BASE_URL}/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ food_id, cart_id, quantity }),
      });

      const data = await response.json();

      if (data.success) {
        set({ cart: data.data });
      }
    } catch (error) {
      console.log("Error update cart: ", error);
    }
    set({ loadingCart: false });
  },

  clearCart: () => {
    set({ cart: null });
  },
}));
