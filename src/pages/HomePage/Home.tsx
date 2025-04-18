import Banner from "./components/Banner";
import ServiceCard from "./components/ServiceCard";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import HowItWorks from "./components/HowItWorks";
import Button from "../../components/Button";
import Menu from "./components/Menu";
import Featured from "./components/Featured";
import { useEffect } from "react";
import { useFoodStore } from "../../store/useFoodStore";

const LIMIT = 10,
  PAGE = 1;

interface serviceCard {
  title: string;
  img_src: string;
  bg_color: string;
  text_color: string;
  width: string;
  height: string;
}

export default function Home() {
  const serviceCards = [
    {
      title: "PICKUP FOOD",
      img_src: service1,
      bg_color: "bg-red-600",
      text_color: "text-white",
      width: "w-[140px]",
      height: "h-[160px]",
    },
    {
      title: "GET DELIVERED",
      img_src: service2,
      bg_color: "bg-[#f6f179]",
      text_color: "text-black",
      width: "w-[160px]",
      height: "h-[150px]",
    },
    {
      title: "EXPLORE SHOP",
      img_src: service3,
      bg_color: "bg-white",
      text_color: "text-black",
      width: "w-[180px]",
      height: "h-[130px]",
    },
  ];

  const renderServiceCards = (serviceCards: serviceCard[]) => {
    return serviceCards.map((card) => (
      <ServiceCard
        key={card.title}
        title={card.title}
        img_src={card.img_src}
        bg_color={card.bg_color}
        text_color={card.text_color}
        width={card.width}
        height={card.height}
      />
    ));
  };

  const { fetchRelatedFood, relatedFood, loadingRelatedFood } = useFoodStore();

  useEffect(() => {
    fetchRelatedFood({ limit: LIMIT, page: PAGE });
  }, [fetchRelatedFood]);

  useEffect(() => {});

  return (
    <div className="font-poppins mt-[80px]">
      <Banner />

      <div className="bg-zinc-100 pt-5 dark:bg-zinc-500">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 p-5 lg:gap-1 lg:place-items-center md:-top-[120px] relative">
          {renderServiceCards(serviceCards)}
        </div>

        <div className=" flex justify-center items-center flex-col gap-y-10 md:-top-[65px] relative pb-5">
          <div className="font-bold w-max relative text-[30px] before:w-full pr-4 pl-4 before:h-3 before:bg-amber-200 before:absolute before:bottom-2 before:right-0 before:-z-2 z-5">
            HOW IT WORKS
          </div>
          <HowItWorks />
          <Button text="Order Now!" />
        </div>

        <Menu
          relatedFood={relatedFood}
          loadingRelatedFood={loadingRelatedFood}
        />

        <Featured
          relatedFood={relatedFood}
          loadingRelatedFood={loadingRelatedFood}
        />
      </div>
    </div>
  );
}
