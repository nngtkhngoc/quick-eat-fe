import { useState } from "react";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import payment_card from "../../../assets/images/payment_card.png";
import Food from "../../../types/food";
import Category from "../../../types/category";

export default function CurrentFood({
  currentFood,
  loading,
}: {
  currentFood: Food | null;
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
        className="w-[78px] h-[70px] object-cover rounded-[15px] cursor-pointer hover:opacity-75 transition-opacity md:h-[120px] md:w-full"
        onClick={() => setSelectedImage(image)}
      />
    ));
  };

  const renderCategories = (categories: Category[]) => {
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
    <div className="font-poppins pt-20 relative flex flex-col gap-6 lg:gap-0 lg:pl-20 lg:grid lg:grid-cols-2 ">
      <div className="px-4 flex flex-col gap-3 lg:pr-3 lg:col-span-1">
        {currentFood.image?.length > 0 && (
          <img
            src={selectedImage || currentFood.image[0]}
            className="w-[250px] h-[220px] object-cover rounded-[15px] z-5 md:w-full md:h-[340px]"
          />
        )}

        {currentFood.image?.length > 0 && (
          <div className="w-[250px] md:w-full grid grid-cols-3 gap-2">
            {renderImages(currentFood.image)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 lg:gap-4 px-2 ">
        <div>
          <div className="flex flex-row gap-2 text-[14px] ">
            <div>({currentFood.avg_rate}) ⭐ </div>
            <div className="text-[#00D26D]">
              ({currentFood.reviews?.length || "0"} reviews)
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="font-bold uppercase text-[33px] px-3 relative z-10 w-max after:-z-5 after:w-full after:h-1/4 after:bg-[#ece76e] after:absolute after:bottom-1 after:left-0 lg:text-[27px]">
            {currentFood.name}
          </div>
          <div className="font-semibold uppercase text-[40px] text-[#00D26D] border-b border-zinc-500 lg:text-[27px]">
            ${currentFood.price}
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-2 border-b border-zinc-500 pb-6 lg:text-[15px] lg:pb-4">
            <div className="text-zinc-500 "> Categories: </div>
            {currentFood.food_categories?.length > 0 && (
              <div className="flex flex-row gap-2">
                {renderCategories(currentFood.food_categories)}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row items-center border-b pb-6 border-zinc-500 lg:pb-4  ">
          <div className="w-[120px]">
            <button
              onClick={handleDecrease}
              className="border-l border-t border-b border-red-600 p-2 bg-white cursor-pointer lg:text-[15px]"
            >
              -
            </button>
            <input
              className=" w-[45px] py-2 border-t border-b border-red-600 bg-white text-center focus:outline-none text-red-600 lg:text-[15px]"
              value={quantity}
              type="text"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <button
              onClick={handleIncrease}
              className="border-r  border-t border-b border-red-600 p-2 bg-white cursor-pointer lg:text-[15px]"
            >
              +
            </button>
          </div>

          <button className=" relative bg-red-600 w-max lg:text-[16px] py-2 px-11 font-poppins border-transparent text-white text-semibold text-[17px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 border border-white">
            Add
          </button>
        </div>

        <div className="flex flex-row gap-2 border-b border-zinc-500 pb-6 lg:pb-4 lg:text-[15px]">
          <div className="text-zinc-500"> Share: </div>
          <Facebook className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
          <Instagram className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
          <Twitter className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
          <PhoneCall className="text-black hover:text-red-600 w-[22px] transition-all duration-500 cursor-pointer" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-zinc-500 lg:text-[15px]">
            Guaranteed Safe Checkout
          </div>
          <img src={payment_card} alt="payment_card" className="w-[200px]" />
        </div>
      </div>
    </div>
  );
}
