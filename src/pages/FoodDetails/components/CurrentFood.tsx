import { useFoodStore } from "../../../store/useFoodStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import corn from "../../../assets/images/img1.png";
import mushroom from "../../../assets/images/img2.png";

interface category {
  category: { name: string };
}

export default function CurrentFood() {
  const { fetchFood, loading, currentFood } = useFoodStore();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (id) fetchFood(id);
  }, [fetchFood, id]);

  useEffect(() => {
    if (currentFood?.image?.length > 0) {
      setSelectedImage(currentFood.image[0]);
    }
  }, [currentFood]);

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
    return categories.map((category) => <div>{category.category.name} | </div>);
  };

  return (
    <div className="font-poppins py-20 relative flex flex-col gap-8 lg:flex-row">
      <img
        src={corn}
        alt="corn"
        className="absolute top-20 right-0 w-[130px] animate-bounce z-10"
      />
      <img
        src={mushroom}
        alt="mushroom"
        className="absolute -top-8 left-5 w-[200px] animate-bounce -z-3"
      />

      <div className="px-4 flex flex-col gap-3">
        {currentFood.image?.length > 0 && (
          <img
            src={selectedImage}
            className="w-[250px] h-[220px] object-cover rounded-[15px] z-5 md:w-[500px] md:h-[440px]"
          />
        )}

        {currentFood.image?.length > 0 && (
          <div className="flex flex-row gap-2">
            {renderImages(currentFood.image)}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8 px-2">
        <div>
          <div className="flex flex-row gap-2 text-[16px]">
            <div>({currentFood.avg_rate}) ⭐ </div>
            <div className=" text-[#00D26D]">
              ({currentFood.reviews?.length || "0"} reviews)
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="font-bold uppercase text-[37px] px-4 relative z-10 w-max after:-z-5 after:w-full after:h-1/4 after:bg-[#ece76e] after:absolute after:bottom-1 after:left-0">
            {currentFood.name}
          </div>
          <div className="font-semibold uppercase text-[40px] text-[#00D26D] border-b border-zinc-500">
            ${currentFood.price}
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-2 border-b  border-zinc-500 pb-8">
            <div className="text-zinc-600"> Categories: </div>
            {currentFood.food_catgories?.length > 0 && (
              <div className="flex flex-row gap-2">
                {renderCategories(currentFood.food_catgories)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
