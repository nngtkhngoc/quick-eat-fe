import OrderDetails from "./OrderDetails";

export default interface Order {
  id: string;
  fullname: string;
  ship_charge: number;
  phone_number: string;
  address: string;
  payment: string;
  total_price: number;
  orderedAt: string;
  user_id: string;
  voucher_id: string;
  order_details: OrderDetails[];
}
