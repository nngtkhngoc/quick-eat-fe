import User from "./User";

export default interface Review {
  id: string;
  user_id: string;
  food_id: string;
  score: string;
  content: string;
  user: User;
  created_at: string;
}
