import { create } from "zustand";

interface brand {
  id: string;
  name: string;
}

interface BrandStore {
  brands: brand[] | null;
  loading: boolean;
  fetchBrands: (limit: number, page: number) => Promise<void>;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

export const useBrandStore = create<BrandStore>((set) => ({
  brands: [],
  loading: false,

  fetchBrands: async (limit: number, page: number) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `${BASE_URL}/brands/?limit=${limit}&page=${page}`
      );

      const data = await response.json();

      if (data.success) {
        set({ brands: data.data });
      }
    } catch (error) {
      console.log("Error fetching brands", error);
    }

    set({ loading: false });
  },
}));
