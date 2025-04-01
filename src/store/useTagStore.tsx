import { create } from "zustand";

interface tag {
  id: string;
  name: string;
}

interface TagStore {
  tags: tag[] | null;
  loading: boolean;
  fetchTags: (limit: number, page: number) => Promise<void>;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

export const useTagStore = create<TagStore>((set) => ({
  tags: [],
  loading: false,

  fetchTags: async (limit: number, page: number) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `${BASE_URL}/tags/?limit=${limit}&page=${page}`
      );

      const data = await response.json();

      if (data.success) {
        set({ tags: data.data });
      }
    } catch (error) {
      console.log("Error fetching tags", error);
    }

    set({ loading: false });
  },
}));
