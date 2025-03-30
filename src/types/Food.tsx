import Review from "../types/review";
import Brand from "../types/Brand";
import Category from "../types/category";
import Tag from "../types/tag";

export default interface Food {
  id: string;
  name: string;
  price: number;
  availablity: string;
  description: string;
  image: string[];
  avg_rate: number;
  brand_id: string;
  brand: Brand[];
  reviews: Review[];
  food_tags: Tag[];
  food_categories: Category[];
}
