import { create } from "zustand";
import Review from "../types/Review";

const BASE_URL = "https://quick-eat-be.onrender.com/api";

interface ReviewStore {
  currentReviews: Review[];
  loading: boolean;
  loadingAddReview: boolean;
  reviewChange: boolean;

  fetchReviews: (id: string) => Promise<void>;

  addReviews: (
    id: string | undefined,
    score: number,
    content: string
  ) => Promise<{ success: boolean; message?: string }>;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  currentReviews: [],
  reviewChange: false,
  loading: false,
  loadingAddReview: false,

  fetchReviews: async (id: string) => {
    set({ loading: true });
    try {
      const response = await fetch(`${BASE_URL}/food/${id}/reviews`);

      const data = await response.json();
      console.log(data);

      if (data.success) {
        set({ currentReviews: data.data });
      }
    } catch (error) {
      console.log("Error fetching reviews", error);
    }

    set({ loading: false });
  },

  addReviews: async (
    id: string | undefined,
    score: number,
    content: string
  ) => {
    set({ loadingAddReview: true });
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/order/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token || "",
        },
        body: JSON.stringify({ score, content }),
      });

      const data = await response.json();

      if (data.success) {
        set((state) => ({
          currentReviews: [data.data, ...state.currentReviews],
        }));
        return { success: true };
      } else {
        return {
          success: false,
          message: data.message || "Failed to add review",
        };
      }
    } catch (error) {
      console.log("Error adding reviews:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    } finally {
      set({ loadingAddReview: false });
    }
  },
}));
