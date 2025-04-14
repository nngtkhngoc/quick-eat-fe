import { create } from "zustand";
import Order from "../types/Order";

interface fetchOrderParams {
  status: string | undefined;
  food_name: string | undefined;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

interface OrderStore {
  loadingCreateOrder: boolean;
  createOrder: (
    fullname: string,
    phone_number: string,
    payment: string,
    address: string
  ) => Promise<{ success: boolean; message?: string }>;

  orders: Order[];
  loadingFetchOrder: boolean;
  fetchOrder: (params: fetchOrderParams) => Promise<void>;
}

export const useOrderStore = create<OrderStore>((set) => ({
  loadingCreateOrder: false,
  loadingFetchOrder: false,
  orders: [],

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

  fetchOrder: async ({ status, food_name }: fetchOrderParams) => {
    set({ loadingFetchOrder: true });

    const token = localStorage.getItem("token");

    try {
      const queryParams: Record<string, string> = {};

      if (status) {
        queryParams["status"] = status;
      }

      if (food_name) {
        queryParams["food_name"] = food_name;
      }

      const queryString = new URLSearchParams(queryParams).toString();

      const response = await fetch(`${BASE_URL}/order?${queryString}`, {
        method: "GET",
        headers: {
          "auth-token": token || "",
        },
      });

      const data = await response.json();
      if (data.success) {
        set({ orders: data.data });
      } else set({ orders: [] });
    } catch (error) {
      console.log("Error fetching orders: ", error);
    }
    set({ loadingFetchOrder: false });
  },
}));
