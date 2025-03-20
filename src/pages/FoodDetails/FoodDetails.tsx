import BannerLocation from "../../components/BannerLocation";
import CurrentFood from "./components/CurrentFood";

export default function FoodDetails() {
  return (
    <div className="bg-[#f7ffe9]">
      <BannerLocation text="Food Details" />
      <CurrentFood />
    </div>
  );
}
