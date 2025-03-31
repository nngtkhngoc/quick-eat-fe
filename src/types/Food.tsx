import Review from "../types/Review";
import Brand from "../types/Brand";
import Category from "../types/Category";
import Tag from "../types/Tag";

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
