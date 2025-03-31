import { create } from "zustand";
import Review from "../types/Review";

const BASE_URL = "http://localhost:5001/api";

interface ReviewStore {
  currentReviews: Review[];
  loading: boolean;
  loadingAddReview: boolean;
  reviewChange: boolean;
  errorAddReview: string | null;

  fetchReviews: (id: string) => Promise<void>;

  addReviews: (
    id: string | undefined,
    score: number,
    content: string
  ) => Promise<void>;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  currentReviews: [],
  reviewChange: false,
  loading: false,
  loadingAddReview: false,
  errorAddReview: null,

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
      const response = await fetch(`${BASE_URL}/food/${id}/reviews`, {
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
        set({ errorAddReview: null });
      } else {
        set({ errorAddReview: data.message });
      }
    } catch (error) {
      console.log("Error adding reviews:", error);
    }
    set({ loadingAddReview: false });
  },
}));
