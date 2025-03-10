import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Menu, ShoppingCart, UserCircle } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOnClick = () => {
    setOpenSidebar(!openSidebar);
  };

  const options = ["Home", "About", "Shop", "Chef", "Blog"];
  const renderOptions = (options: string[]) => {
    return options.map((option) => (
      <div className="text-black text-[16px] font-medium cursor-pointer transition duration-300 ease-in-out group hover:text-red-600 hover:font-bold w-[50px] flex justify-center text-center flex-col">
        {option}
        <hr className="w-10 h-[1.5px] bg-gray-500 mx-auto scale-x-0 group-hover:scale-x-100 group-hover:text-red-600 transition-transform duration-300" />
      </div>
    ));
  };

  //   const userId = localStorage.getItem("userId");

  return (
    <div className="w-screen sticky top-0 h-[80px] w-screen bg-white text-red-600 font-poppins font-bold shadow-lg overflow-x-hidden">
      <div className="container h-full mx-auto px-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 font-poppins">
          <img src={logo} alt="logo-pic" className="w-12 h-12" />
          <div className="text-[20px]">
            <span className="text-black">Quick</span>
            <span>Eat</span>
          </div>
        </div>
        {/*Desktop navigation*/}
        <div className="hidden md:flex space-x-10">
          {renderOptions(options)}
        </div>
        <div className="hidden md:flex space-x-5 cursor-pointer">
          <ShoppingCart className="w-7 h-7" />
          <UserCircle className="w-7 h-7" />
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="md:hidden">
          <Menu
            color="oklch(0.577 0.245 27.325)"
            size={32}
            className="cursor-pointer"
            onClick={handleOnClick}
          />
        </div>
      </div>

      {/* Mobile/Tablet Sidebar */}
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}
