import { Link } from "react-router-dom";

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

export default function FoodOverall({ food }: { food: food }) {
  return (
    <Link
      to={`/food/${food.id}`}
      className="flex flex-col gap-3 bg-white p-7 rounded-[25px] border-[#a6cf6b] border lg:flex-row lg:w-[450px] lg:h-[180px] lg:px-4 w-full overflow-hodden"
      key={food.id}
    >
      <img
        src={food.image[0]}
        className="w-[130px] h-[130px] rounded-full object-cover lg:w-[100px] lg:h-[100px]"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row w-full justify-between items-center font-semibold text-[23px] lg:text-[20px] ">
          <div className="">{food.name}</div>
          <div className="text-[#00d26d]">${food.price}</div>
        </div>

        <div className="h-[56px] lg:h-50px] line-clamp-3 lg:overflow-hidden lg:line-clamp-2 text-[12px] lg:text-[13px] text-zinc-600">
          {food.description}
        </div>

        <div className="flex flex-row items-center gap-5">
          <button className="relative bg-red-600 w-max lg:text-[16px] lg:px-4 lg:py-1 py-2 px-11 font-poppins border-transparent text-white text-semibold text-[17px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 border border-white">
            ADD
          </button>
          <div className="text-[14px] text-zinc-600">({food.avg_rate}) ⭐</div>
        </div>
      </div>
    </Link>
  );
}
