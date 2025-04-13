import { create } from "zustand";

const BASE_URL = "https://quick-eat-be.onrender.com/api";

interface OrderStore {
  loadingCreateOrder: boolean;
  createOrder: (
    fullname: string,
    phone_number: string,
    payment: string,
    address: string
  ) => Promise<{ success: boolean; message?: string }>;
}

export const useOrderStore = create<OrderStore>((set) => ({
  loadingCreateOrder: false,

  createOrder: async (
    fullname: string,
    phone_number: string,
    payment: string,
    address: string
  ) => {
    set({ loadingCreateOrder: true });
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BASE_URL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token || "",
        },
        body: JSON.stringify({ fullname, phone_number, payment, address }),
      });

      const data = await response.json();

      if (data.success) {
        return { success: true };
      } else {
        return {
          success: false,
          message: data.message || "Failed to create order",
        };
      }
    } catch (error) {
      console.log("Error creating order:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    } finally {
      set({ loadingCreateOrder: false });
    }
  },
}));
