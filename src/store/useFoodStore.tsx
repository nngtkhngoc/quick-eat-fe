import { create } from "zustand";

interface food {
  id: string;
  name: string;
  price: number;
  availablity: string;
  description: string;
  image: string[];
  avg_rate: number;
  brand_id: string;
  brand: brand[];
  reviews: review[];
  food_tags: tag[];
  food_categories: category[];
}

interface brand {
  id: string;
  name: string;
}

interface user {
  id: string;
  username: string;
  fullname: string;
  phone_number: string;
  email: string;
  profile_pic: string;
}

interface review {
  id: string;
  score: number;
  content: string;
  created_at: string;
  food_id: string;
  user_id: string;
  user: user;
  food_tags: tag[];
  food_categories: category[];
}

interface tag {
  tag: { id: string; name: string };
}

interface category {
  category: { name: string };
}

interface FoodStore {
  currentFood: food | null;
  loading: boolean;
  relatedFood: food[];
  fetchFood: (id: string) => Promise<void>;
  fetchRelatedFood: (
    limit: number,
    page: number,
    filter_value: string[]
  ) => Promise<void>;
}

const BASE_URL = "http://localhost:5001/api";

export const useFoodStore = create<FoodStore>((set) => ({
  food: [],
  relatedFood: [],
  currentFood: null,
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

  fetchRelatedFood: async (
    limit: number,
    page: number,
    filter_value: string[]
  ) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `${BASE_URL}/food?limit=${limit}&page=${page}&filter_value=${filter_value.join(
          ","
        )}`
      );

      const data = await response.json();

      if (data.success) {
        set({ relatedFood: data.data });
      }
    } catch (error) {
      console.log("Error fetching related food", error);
    }
    set({ loading: false });
  },
}));
