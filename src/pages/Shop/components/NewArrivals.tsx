import { Carousel } from "antd";

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

interface NewArrivalsProps {
  newFood: food[];
  loading: boolean;
}

export default function NewArrivals({ newFood, loading }: NewArrivalsProps) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const renderNewArrivals = (newFood: food[]) => {
    return newFood.map((food) => (
      <img
        src={food.image[0]}
        key={food.id}
        alt="food_image"
        className="h-[300px] object-cover"
      />
    ));
  };
  return (
    <div>
      {" "}
      {newFood ? (
        <Carousel autoplay>{renderNewArrivals(newFood)}</Carousel>
      ) : (
        <div> Loading</div>
      )}
    </div>
  );
}
