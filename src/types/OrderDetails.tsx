import Food from "./Food";

export default interface OrderDetails {
  id: string;
  quantity: number;
  total_price: number;
  food_id: string;
  order_id: string;
  food: Food;
  is_reviewed: boolean;
}
