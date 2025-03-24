import { Carousel } from "antd";
import Button from "../../../components/Button";

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
      <div className="w-full bg-white flex flex-col items-center pb-6 font-poppins">
        <div className="flex items-center justify-center">
          <img
            src={food.image[0]}
            key={food.id}
            alt="food_image"
            className="h-[273px] w-[273px] rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 justify-center text-center">
          <div className="capitalize font-bold text-[30px] text-center pt-5">
            {food.name}
          </div>

          <div className=" h-[42px] line-clamp-2 overflow-hidden ">
            {food.description}
          </div>

          <div className="font-bold text-[20px]">${food.price}</div>
        </div>

        <div className="flex items-center justify-center pt-3">
          <Button text="Order now!" />
        </div>
      </div>
    ));
  };
  return (
    <div className="bg-white px-8 py-6 flex flex-col gap-10 drop-shadow-lg ">
      <div className="pb-3 border-b border-black">
        <div className="uppercase text-[25px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e] ">
          New Arrivals
        </div>
      </div>

      {newFood ? (
        <Carousel autoplay>{renderNewArrivals(newFood)}</Carousel>
      ) : (
        <div> Loading</div>
      )}
    </div>
  );
}
