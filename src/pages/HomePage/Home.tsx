import Banner from "./components/Banner";
import ServiceCard from "./components/ServiceCard";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import HowItWorks from "./components/HowItWorks";
import Button from "../../components/Button";

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
      width: "w-[150px]",
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

  return (
    <div className="font-poppins">
      <Banner />
      <div className="bg-gray-200 w-full  py-5">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 p-5 lg:px-35">
          {renderServiceCards(serviceCards)}
        </div>

        <div className="w-full flex justify-center items-center flex-col space-y-5">
          <div className="font-bold w-max relative text-[30px] before:w-full before:items-center before:h-3 before:bg-amber-200 before:absolute before:bottom-2 before:-z-2 z-5">
            HOW IT WORKS
          </div>
          <HowItWorks />
          <Button text="Order Now!" />
        </div>
      </div>
    </div>
  );
}
