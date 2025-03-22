import { useState } from "react";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import payment_card from "../../../assets/images/payment_card.png";

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

export default function CurrentFood({
  currentFood,
  loading,
}: {
  currentFood: food | null;
  loading: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(0);

  if (loading || !currentFood) {
    return (
      <div className="p-4">
        <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  const renderImages = (images: string[]) => {
    return images.map((image) => (
      <img
        key={image}
        src={image}
        className="w-[78px] h-[70px] object-cover rounded-[15px] cursor-pointer hover:opacity-75 transition-opacity md:w-[160px] md:h-[140px]"
        onClick={() => setSelectedImage(image)}
      />
    ));
  };

  const renderCategories = (categories: category[]) => {
    return categories.map((category, index) => (
      <div key={index}>
        {category.category.name} {index == categories.length - 1 ? "" : " | "}
      </div>
    ));
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="font-poppins pt-20 relative flex flex-col gap-6 lg:flex-row lg:gap-0">
      <div className="px-4 flex flex-col gap-3 lg:pr-10 lg:pr-3">
        {currentFood.image?.length > 0 && (
          <img
            src={selectedImage || currentFood.image[0]}
            className="w-[250px] h-[220px] object-cover rounded-[15px] z-5 md:w-[500px] md:h-[440px]"
          />
        )}

        {currentFood.image?.length > 0 && (
          <div className="w-[250px] md:w-[500px] grid grid-cols-3 gap-2">
            {renderImages(currentFood.image)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 px-2 ">
        <div>
          <div className="flex flex-row gap-2 text-[14px] ">
            <div>({currentFood.avg_rate}) ⭐ </div>
            <div className="text-[#00D26D]">
              ({currentFood.reviews?.length || "0"} reviews)
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="font-bold uppercase text-[37px] px-4 relative z-10 w-max after:-z-5 after:w-full after:h-1/4 after:bg-[#ece76e] after:absolute after:bottom-1 after:left-0 lg:text-[30px]">
            {currentFood.name}
          </div>
          <div className="font-semibold uppercase text-[40px] text-[#00D26D] border-b border-zinc-500 lg:text-[30px]">
            ${currentFood.price}
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-2 border-b border-zinc-500 pb-6 ">
            <div className="text-zinc-500 "> Categories: </div>
            {currentFood.food_categories?.length > 0 && (
              <div className="flex flex-row gap-2">
                {renderCategories(currentFood.food_categories)}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row items-center border-b pb-6 border-zinc-500">
          <div className="w-[120px]">
            <button
              onClick={handleDecrease}
              className="border-l border-t border-b border-red-600 p-2 bg-white cursor-pointer"
            >
              -
            </button>
            <input
              className=" w-[45px] py-2 border-t border-b border-red-600 bg-white text-center focus:outline-none text-red-600"
              value={quantity}
              type="text"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <button
              onClick={handleIncrease}
              className="border-r  border-t border-b border-red-600 p-2 bg-white cursor-pointer"
            >
              +
            </button>
          </div>

          <button className=" relative bg-red-600 w-max lg:text-[18px] py-2 px-11 font-poppins border-transparent text-white text-semibold text-[17px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 border border-white">
            Add
          </button>
        </div>

        <div className="flex flex-row gap-2 border-b border-zinc-500 pb-6">
          <div className="text-zinc-500"> Share: </div>
          <Facebook className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
          <Instagram className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
          <Twitter className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
          <PhoneCall className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
        </div>

        <div>
          <div className="text-zinc-500"> Guaranteed Safe Checkout </div>
          <img src={payment_card} alt="payment_card" />
        </div>
      </div>
    </div>
  );
}
