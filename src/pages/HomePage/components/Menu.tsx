import Button from "../../../components/Button";
import cooking from "../../../assets/images/cooking.png";
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
  relatedFood,
  loadingRelatedFood,
}: {
  relatedFood: food[];
  loadingRelatedFood: boolean;
}) {
  const renderMenu = (food: food[]) => {
    return food.map((f) => <FoodOverall food={f} />);
  };

  if (loadingRelatedFood || !relatedFood) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-yellow-200 grid lg:grid-cols-2 lg:h-[850px] ">
      <div className="lg:col-span-1 bg-yellow-100 p-2 space-y-5 lg:px-40 lg:py-10 ">
        <div>
          <div className="font-bold pl-4 pr-4 w-max text-[25px] relative before:absolute before:right-0 before:bottom-1.5 before:h-1/4 before:w-full before:bg-amber-300 z-10 before:-z-9">
            MOTHER'S FOOD'S
          </div>

          <div className="font-bold w-max text-[35px] ">TODAY DISHES</div>
        </div>

        <div className="grid grid-cols-4 my-6">
          <input
            type="text"
            placeholder="Search food"
            className="bg-white border-1 h-[50px] border-red-300 p-2 text-[15px] col-span-3"
          />
          <button className="text-center bg-red-600  text-white">Search</button>
        </div>

        <div className="text-gray-500 text-[14px] text-sm/7 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into.
        </div>

        <Button text="Order Now!" />

        <img src={cooking} />
      </div>

      <div className="lg:col-span-1 p-3 lg:px-25 md:px-50 flex flex-col gap-4 overflow-y-scroll h-full bg-[#f7ffe9]">
        <div className="text-[35px] font-bold uppercase">Our Menu</div>
        {relatedFood && relatedFood.length > 0 && renderMenu(relatedFood)}
      </div>
    </div>
  );
}
