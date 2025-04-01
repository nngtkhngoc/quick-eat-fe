import { create } from "zustand";
import Food from "../types/Food";

interface FoodStore {
  fetchFood: (id: string) => Promise<void>;
  currentFood: Food | null;
  loading: boolean;

  relatedFood: Food[];
  fetchRelatedFood: (params: FetchFoodParams) => Promise<void>;
  loadingRelatedFood: boolean;
  totalRelatedFood: number;

  newFood: Food[];
  fetchNewFood: () => Promise<void>;
}

interface FetchFoodParams {
  limit?: number;
  page?: number;
  tags?: string[];
  brands?: string[];
  categories?: string[];
  availability?: string[];
  sort?: string;
  order?: string;
  maxPrice?: string;
  minPrice?: string;
}

const BASE_URL = "https://quick-eat-be.onrender.com/api";

export const useFoodStore = create<FoodStore>((set) => ({
  food: [],
  relatedFood: [],
  currentFood: null,
  loading: false,
  newFood: [],
  loadingRelatedFood: false,
  totalRelatedFood: 0,

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

  fetchRelatedFood: async ({
    limit,
    page,
    tags,
    brands,
    categories,
    availability,
    sort,
    order,
    maxPrice,
    minPrice,
  }: FetchFoodParams) => {
    set({ loadingRelatedFood: true });
    try {
      const queryParams: Record<string, string> = {};

      if (limit) {
        queryParams["limit"] = limit.toString();
      }
      if (page) {
        queryParams["page"] = page.toString();
      }
      if (tags?.length) {
        queryParams["tag"] = tags.join(",");
      }
      if (brands?.length) {
        queryParams["brand"] = brands.join(",");
      }
      if (categories?.length) {
        queryParams["category"] = categories.join(",");
      }
      if (availability?.length) {
        queryParams["availability"] = availability.join(",");
      }
      if (sort) {
        queryParams["sort"] = sort;
      }
      if (order) {
        queryParams["order"] = order;
      }
      if (maxPrice) {
        queryParams["maxPrice"] = maxPrice;
      }
      if (minPrice) {
        queryParams["minPrice"] = minPrice;
      }

      const queryString = new URLSearchParams(queryParams).toString();

      const response = await fetch(`${BASE_URL}/food?${queryString}`);

      const data = await response.json();

      if (data.success) {
        set({ relatedFood: data.data });
        set({ totalRelatedFood: data.total });
      }
    } catch (error) {
      console.log("Error fetching related food", error);
    }
    set({ loadingRelatedFood: false });
  },

  fetchNewFood: async () => {
    set({ loading: false });
    try {
      const response = await fetch(
        `${BASE_URL}/food?limit=4&page=1&sort=created_at`
      );

      const data = await response.json();

      if (data.success) {
        set({ newFood: data.data });
      }
    } catch (error) {
      console.log("Error fetching new food", error);
    }
  },
}));
