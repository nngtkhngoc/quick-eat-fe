import CartDetails from "./CartDetails";

export default interface Cart {
  id: string;
  user_id: string;
  total_quantity: number;
  total_price: number;
  cart_details: CartDetails[];
}
