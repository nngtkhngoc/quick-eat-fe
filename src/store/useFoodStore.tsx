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
  fetchFood: (id: string) => Promise<void>;
  currentFood: food | null;
  loading: boolean;

  relatedFood: food[];
  fetchRelatedFood: (params: FetchFoodParams) => Promise<void>;
  loadingRelatedFood: boolean;

  newFood: food[];
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

const BASE_URL = "http://localhost:5001/api";

export const useFoodStore = create<FoodStore>((set) => ({
  food: [],
  relatedFood: [],
  currentFood: null,
  loading: false,
  newFood: [],
  loadingRelatedFood: false,

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
