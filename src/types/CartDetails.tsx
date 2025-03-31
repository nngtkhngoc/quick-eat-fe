import Food from "./food";

export default interface CartDetails {
  cart_id: string;
  food_id: string;
  quantity: number;
  total_price: number;
  food: Food;
}
