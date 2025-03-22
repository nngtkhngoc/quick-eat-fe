import BannerLocation from "../../components/BannerLocation";
import CurrentFood from "./components/CurrentFood";
import ReviewDescription from "./components/ReviewDescription";
import { useFoodStore } from "../../store/useFoodStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function FoodDetails() {
  const { fetchFood, loading, currentFood } = useFoodStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchFood(id);
  }, [fetchFood, id]);

  return (
    <div className="bg-[#f7ffe9]">
      <BannerLocation text="Food Details" />
      <div className="flex flex-col md:flex-row">
        <div>
          <CurrentFood currentFood={currentFood} loading={loading} />
          <ReviewDescription currentFood={currentFood} loading={loading} />
        </div>
      </div>
    </div>
  );
}
