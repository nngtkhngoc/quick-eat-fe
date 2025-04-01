import FoodOverall from "../../../components/FoodOverall";
import Food from "../../../types/Food";

export default function RelatedFood({
  relatedFood,
  loading,
  id,
}: {
  relatedFood: Food[];
  loading: boolean;
  id: string | undefined;
}) {
  if (!relatedFood || loading) {
    return <div>Loading...</div>;
  }

  const renderFood = (relatedFood: Food[]) => {
    return relatedFood
      .filter((food) => food.id !== id)
      .map((food, index) => {
        if (index <= 3) return <FoodOverall food={food} />;
      });
  };

  return (
    <div className="lg:pt-20 p-2 pt-6 flex flex-col gap-7 font-poppins md:grid md:grid-cols-2 md:gap-x-3 lg:flex lg:flex-col w-full">
      {relatedFood.length > 0 && renderFood(relatedFood)}
    </div>
  );
}
