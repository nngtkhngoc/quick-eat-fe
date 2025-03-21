import BannerLocation from "../../components/BannerLocation";
import CurrentFood from "./components/CurrentFood";
import ReviewDescription from "./components/ReviewDescription";

export default function FoodDetails() {
  return (
    <div className="bg-[#f7ffe9]">
      <BannerLocation text="Food Details" />
      <CurrentFood />
      <ReviewDescription />
    </div>
  );
}
