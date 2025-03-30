import { create } from "zustand";

const BASE_URL = "http://localhost:5001/api";

export const useReviewStore = create((set) => ({
  currentReviews: [],
  loading: false,

  fetchReviews: async (id: string) => {
    set({ loading: true });
    try {
      const response = await fetch(`${BASE_URL}/${id}/reviews`);

      const data = await response.json();

      if (data.success) {
        set({ currentReviews: data.data });
      }
    } catch (error) {
      console.log("Error fetching reviews", error);
    }

    set({ loading: false });
  },
}));
