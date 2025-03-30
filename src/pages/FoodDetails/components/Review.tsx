import AddReview from "./AddReview";
import ReviewDetails from "./ReviewDetails";
import Food from "../../../types/food";

export default function Review({
  currentFood,
  id,
}: {
  currentFood: Food | null;
  id: string | undefined;
}) {
  return (
    <div className="flex flex-col gap-10">
      <ReviewDetails id={id} currentFood={currentFood} />
      <AddReview id={id} />
    </div>
  );
}
