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

export default function Menu({
  food,
  loading,
}: {
  food: food[];
  loading: boolean;
}) {
  if (loading || !food) {
    return <div>Loading...</div>;
  }

  const renderFood = (relatedFood: food[]) => {
    return relatedFood.map((food) => <FoodOverall food={food} />);
  };

  return (
    <div className="flex flex-col font-poppins pt-10 lg:pt-0 lg:pl-10">
      <div className="uppercase font-bold text-[32px] px-2 relative w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e]">
        Menu
      </div>
      <div className="p-2 pt-3 flex flex-col gap-7 font-poppins md:grid md:grid-cols-2 w-full">
        {food.length > 0 ? renderFood(food) : <div>No food is found</div>}
      </div>
    </div>
  );
}
