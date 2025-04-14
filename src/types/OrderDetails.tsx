import Food from "./Food";

export default interface OrderDetails {
  id: string;
  quantity: number;
  total_price: number;
  status: string;
  food_id: string;
  order_id: string;
  food: Food;
}
