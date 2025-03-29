import { useState } from "react";
import { Menu, ShoppingCart, UserCircle } from "lucide-react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface option {
  name: string;
  path: string;
}

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOnClick = () => {
    setOpenSidebar(!openSidebar);
  };

  const options = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Chef", path: "/chef" },
    { name: "Blog", path: "/blog" },
  ];
  const renderOptions = (options: option[]) => {
    return options.map((option) => (
      <Link
        to={option.path}
        key={option.name}
        className="text-black text-[16px] font-medium cursor-pointer transition duration-300 ease-in-out group hover:text-red-600 hover:font-bold w-[50px] flex justify-center text-center flex-col dark:text-white"
      >
        {option.name}
        <hr className="w-10 h-[1.5px] bg-gray-500 mx-auto scale-x-0 group-hover:scale-x-100 group-hover:text-red-600 transition-transform duration-300" />
      </Link>
    ));
  };

  return (
    <div className="w-screen fixed top-0 h-[80px] bg-white text-red-600 font-poppins font-bold shadow-lg z-50 dark:bg-black">
      <div className=" h-full px-10 flex flex-row items-center justify-between  w-full">
        <div className="flex flex-row items-center gap-9 font-poppins">
          {/* <ThemeToggle /> */}
          <Logo color="text-black dark:text-white" />
        </div>
        {/*Desktop navigation*/}
        <div className="hidden md:flex space-x-5 ">
          {renderOptions(options)}
        </div>
        <div className="hidden md:flex space-x-5 cursor-pointer">
          <ShoppingCart className="w-7 h-7" />
          <Link to="/auth">
            <UserCircle className="w-7 h-7" />
          </Link>
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
