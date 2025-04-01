import Button from "../../../components/Button";
import Food from "../../../types/Food";

export default function Featured({
  relatedFood,
  loadingRelatedFood,
}: {
  relatedFood: Food[];
  loadingRelatedFood: boolean;
}) {
  if (!relatedFood || loadingRelatedFood) {
    return <div>Loading...</div>;
  }

  const renderFeaturedFood = (food: Food[]) => {
    return food.map((f, index) => {
      if (index < 3)
        return (
          <div className="flex flex-col justify-center items-center relative group ">
            <div className="absolute -top-25 w-max h-max z-10 before:absolute before:w-1 before:bg-white before:rounded-full before:h-1 before:top-1/2 before:left-1/2 before:-z-5 group-hover:before:z-20 group-hover:before:left-0 group-hover:before:top-0 group-hover:before:w-full group-hover:before:h-full group-hover:before:opacity-20 before:transition-all before:duration-500">
              <img
                src={f.image[0]}
                alt="food"
                className="w-[200px] h-[200px] rounded-full object-cover relative z-10"
              />
            </div>

            <div
              className={`pt-10 flex flex-col items-center justify-center text-center gap-5 w-[330px] h-[490px] px-10 text-white ${
                index == 0 && "bg-black"
              } ${index == 1 && "bg-red-500"}
              ${index == 2 && "bg-[#96c658]"}`}
            >
              <div className="capitalize font-bold text-[30px] h-[90px]  group-hover:text-yellow-200 transition-all duration-500 ">
                {f.name}
              </div>
              <div className="text-[16px] h-[72px] overflow-hidden line-clamp-3">
                {f.description}
              </div>
              <div className="font-bold text-[25px] h-[38px]">${f.price}</div>
              <Button text="Oder now" />
            </div>
          </div>
        );
    });
  };

  return (
    <div className="bg-[#fff7eb] flex flex-col items-center py-10 px-5">
      <div className="uppercase font-bold text-[25px] md:text-[30px] lg:text-[35px] flex flex-col items-center text-center gap-5 px-5">
        <div className=" w-max px-2 relative before:w-full before:h-1/4 before:bg-[#ece76e] before:absolute before:bottom-1 before:left-0 z-10 before:-z-3">
          Mother's Featured
        </div>
        <div className="text-sm/8 text-[30px] md:text-[40px]">
          ALWAYS MAKE YOU FALL IN LOVE
        </div>
      </div>
      {relatedFood && relatedFood.length > 0 && (
        <div className="flex flex-col gap-40 pt-50 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-30 lg:flex-row lg:flex lg:gap-10">
          {renderFeaturedFood(relatedFood)}
        </div>
      )}
    </div>
  );
}
