import Banner from "./components/Banner";
import ServiceCard from "./components/ServiceCard";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="bg-gray-200 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 p-5 lg:px-35">
        <ServiceCard
          title="PICKUP FOOD"
          img_src={service1}
          bg_color="bg-red-600"
          text_color="text-white"
          width="w-[140px]"
          height="h-[160px]"
        />
        <ServiceCard
          title="GET DELIVERED"
          img_src={service2}
          bg_color="bg-[#f6f179]"
          text_color="text-black"
          width="w-[150px]"
          height="h-[150px]"
        />
        <ServiceCard
          title="EXPLORE SHOP"
          img_src={service3}
          bg_color="bg-white"
          text_color="text-black"
          width="w-[180px]"
          height="h-[130px]"
        />
      </div>
    </div>
  );
}
