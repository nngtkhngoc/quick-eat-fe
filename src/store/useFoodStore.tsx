import { create } from "zustand";

const BASE_URL = "http://localhost:5001/api";

export const useFoodStore = create((set) => ({
  food: [],
  currentFood: {},
  loading: false,

  fetchFood: async (id: string) => {
    set({ loading: true });
    try {
      const response = await fetch(`${BASE_URL}/food/${id}`);

      const data = await response.json();

      if (data.success) {
        set({ currentFood: data.data });
      }
    } catch (error) {
      console.log("Error fetching food", error);
    }

    set({ loading: false });
  },
}));
