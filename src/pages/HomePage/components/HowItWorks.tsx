import { ShoppingBasket, Wallet, Bike } from "lucide-react";
import { LucideProps } from "lucide-react";

interface icons {
  src: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const icons = [
    {
      src: ShoppingBasket,
      title: "Select Food & Kitchen",
      description: " Lorem ipsum dolor sit amet, consec- tetuer adipisc.",
    },
    {
      src: Wallet,
      title: "Order & Pay",
      description: "Lorem ipsum dolor sit amet, consec- tetuer adipisc.",
    },
    {
      src: Bike,
      title: "Pickup & Delivery",
      description: "Lorem ipsum dolor sit amet, consec- tetuer adipisc.",
    },
  ];

  const renderIcons = (icons: icons[]) => {
    return icons.map((icon) => (
      <div className="flex items-center justify-center font-poppins flex-col space-y-2 ">
        <div className="w-[100px] h-[100px] rounded-full bg-red-600 flex items-center justify-center">
          <icon.src className="w-[58px] h-[60px] text-white relative z-10 stroke-1 hover:translate-y-3 transition-all duration-800" />
        </div>
        <div className="font-bold text-[16px]">Select Food & Kitchen</div>
        <div className="text-gray-500 text-[14px] w-[200px] text-center text-sm/5">
          Lorem ipsum dolor sit amet, consec- tetuer adipisc.
        </div>
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center font-poppins flex-col md:flex-row md:space-x-10">
      {renderIcons(icons)}
    </div>
  );
}
