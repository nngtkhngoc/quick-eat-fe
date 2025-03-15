import { Compass, ChevronsRight, PhoneIcon, Mail } from "lucide-react";
import footerImage from "../assets/images/footer.jpg";
import Logo from "./Logo";

interface option {
  name: string;
  path: string;
}

export default function Footer() {
  const menuOptions = [
    { name: "Burger", path: "/menu/burger" },
    { name: "Desserts", path: "/menu/desserts" },
    { name: "Pizza", path: "/menu/pizza" },
    { name: "Pasta", path: "/menu/pasta" },
    { name: "Drinks", path: "/menu/drinks" },
  ];

  const companyOptions = [
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog" },
  ];

  const supportOptions = [
    { name: "How to Order", path: "/" },
    { name: "Where We Deliver", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog" },
  ];

  const renderOptions = (options: option[]) => {
    return options.map((option) => (
      <div className="text-white flex gap-2 font-semibold" key={option.name}>
        <ChevronsRight className="text-red-600" />
        {option.name}
      </div>
    ));
  };

  return (
    <div
      style={{ backgroundImage: `url(${footerImage})` }}
      className="text-white font-poppins p-4 pt-15 w-full flex flex-col gap-10 md:grid md:grid-cols-3 lg:grid-cols-4"
    >
      <div className="w-full flex flex-col gap-5">
        <Logo color="text-white" />

        <div className="flex gap-3">
          <Compass className="text-red-600" />
          <div className="text-[16px]">
            8901 Marmora Road, New York, NY 10013
          </div>
        </div>

        <div className="flex gap-3">
          <PhoneIcon className="text-red-600" />
          <div className="text-[16px]">+1800 650 5620</div>
        </div>

        <div className="flex gap-3">
          <Mail className="text-red-600" />
          <div className="text-[16px]">email@example.com</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-[30px] font-bold">MENU</div>
        {renderOptions(menuOptions)}
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-[30px] font-bold">COMPANY</div>
        {renderOptions(companyOptions)}
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-[30px] font-bold">SUPORT</div>
        {renderOptions(supportOptions)}
      </div>
    </div>
  );
}
