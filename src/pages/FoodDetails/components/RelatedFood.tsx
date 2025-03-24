import FoodOverall from "../../../components/FoodOverall";
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
export default function RelatedFood({
  relatedFood,
  loading,
}: {
  relatedFood: food[];
  loading: boolean;
}) {
  if (!relatedFood || loading) {
    return <div>Loading...</div>;
  }

  const renderFood = (relatedFood: food[]) => {
    return relatedFood.map((food) => <FoodOverall food={food} />);
  };

  return (
    <div className="lg:pt-20 p-2 pt-6 flex flex-col gap-7 font-poppins md:grid md:grid-cols-2 md:gap-x-3 lg:flex lg:flex-col w-full">
      {relatedFood.length > 0 && renderFood(relatedFood)}
    </div>
  );
}
