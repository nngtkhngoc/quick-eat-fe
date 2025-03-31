import BannerLocation from "../../components/BannerLocation";
import CurrentFood from "./components/CurrentFood";
import ReviewDescription from "./components/ReviewDescription";
import { useFoodStore } from "../../store/useFoodStore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RelatedFood from "./components/RelatedFood";
import corn from "../../assets/images/img1.png";
import mushroom from "../../assets/images/img2.png";

export default function FoodDetails() {
  const {
    fetchFood,
    loading,
    currentFood,
    fetchRelatedFood,
    loadingRelatedFood,
    relatedFood,
  } = useFoodStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchFood(id);
  }, [fetchFood, id]);

  const LIMIT = 5,
    PAGE = 1;
  const [searchTags, setSearchTags] = useState<string[]>([]);

  useEffect(() => {
    if (currentFood) {
      const tags = currentFood.food_tags.map((tag) => tag.tag.name);
      setSearchTags(tags);
    }
  }, [currentFood]);

  useEffect(() => {
    if (searchTags.length > 0) {
      fetchRelatedFood({
        limit: LIMIT,
        page: PAGE,
        tags: searchTags,
        sort: "created_at",
      });
    }
  }, [searchTags, fetchRelatedFood]);

  return (
    <div className="bg-[#f7ffe9] pb-20 pt-[80px]">
      <BannerLocation text="Food Details" />
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:place-items-start relative z-10">
        <img
          src={corn}
          alt="corn"
          className="absolute top-20 right-0 w-[130px] animate-bounce -z-5"
        />
        <img
          src={mushroom}
          alt="mushroom"
          className="absolute top-10 left-0 w-[200px] animate-bounce -z-3"
        />
        <div className="lg:col-span-2 ">
          <CurrentFood currentFood={currentFood} loading={loading} />
          <ReviewDescription
            currentFood={currentFood}
            loading={loading}
            id={id}
          />
        </div>
        <div className="lg:col-span-1">
          <RelatedFood
            relatedFood={relatedFood}
            loading={loadingRelatedFood}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}
