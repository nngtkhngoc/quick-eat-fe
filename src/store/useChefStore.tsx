import { create } from "zustand";

interface chef {
  id: string;
  name: string;
  profile_img: string;
  level: string;
  description: string;
}

interface chefParams {
  limit?: number;
  page?: number;
  level?: string;
}

interface chefStore {
  chef: chef[];
  loadingChef: boolean;
  fetchChef: (params: chefParams) => Promise<void>;
  totalChef: number;
  chefDetails: chef | null;
  loadingChefDetails: boolean;
  fetchChefDetails: (id: string) => Promise<void>;
}

const BASE_URL = "http://localhost:5001/api";

export const useChefStore = create<chefStore>((set) => ({
  chef: [],
  loadingChef: false,
  totalChef: 0,
  chefDetails: null,
  loadingChefDetails: false,

  fetchChef: async ({ limit, page, level }: chefParams) => {
    set({ loadingChef: true });
    try {
      const queryParams: Record<string, string> = {};

      if (limit) {
        queryParams.limit = limit.toString();
      }

      if (page) {
        queryParams.page = page.toString();
      }

      if (level) {
        queryParams.level = level;
      }

      const queryString = new URLSearchParams(queryParams).toString();

      const response = await fetch(`${BASE_URL}/cook?${queryString}`);
      const data = await response.json();

      if (data.success) {
        set({ chef: data.data });
        set({ totalChef: data.total });
      }
    } catch (error) {
      console.log("Error fetching chef:", error);
    }

    set({ loadingChef: false });
  },
  fetchChefDetails: async (id: string) => {
    set({ loadingChefDetails: true });
    try {
      const response = await fetch(`${BASE_URL}/cook/${id}`);
      const data = await response.json();

      if (data.success) {
        set({ chefDetails: data.data });
      }
    } catch (error) {
      console.log("Error fetching detail chef:", error);
    }
    set({ loadingChefDetails: false });
  },
}));
