import { create } from "zustand";

interface category {
  id: string;
  name: string;
}

interface CategoryStore {
  categories: category[] | null;
  loading: boolean;
  fetchCategories: (limit: number, page: number) => Promise<void>;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  loading: false,

  fetchCategories: async (limit: number, page: number) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `${BASE_URL}/categories/?limit=${limit}&page=${page}`
      );

      const data = await response.json();

      if (data.success) {
        set({ categories: data.data });
      }
    } catch (error) {
      console.log("Error fetching categories", error);
    }

    set({ loading: false });
  },
}));
