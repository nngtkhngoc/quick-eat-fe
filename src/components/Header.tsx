import { useState } from "react";
import {
  BadgeDollarSign,
  LogOutIcon,
  Menu,
  ShoppingCart,
  User,
  UserCircle,
} from "lucide-react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Badge } from "antd";
import { useCartStore } from "../store/useCartStore";

interface option {
  name: string;
  path: string;
}

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const { cart, clearCart } = useCartStore();

  const options = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Chef", path: "/chef" },
  ];

  const { user, signOut } = useAuthStore();

  const [openToggle, setOpenToggle] = useState(false);
  const nav = useNavigate();
  const handlOpenToggle = () => {
    if (!user) {
      nav("/auth");
    } else {
      setOpenToggle(!openToggle);
    }
  };

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

  const handleSignOut = () => {
    setOpenToggle(false);
    signOut();
    clearCart();
    nav("/");
  };

  const handleNavOrders = () => {
    setOpenToggle(false);
    nav("/orders");
  };

  const handleNavProfile = () => {
    setOpenToggle(false);
    nav("/profile");
  };
  return (
    <div className="w-screen fixed top-0 h-[80px] bg-white text-red-600 font-poppins font-bold shadow-lg z-50 dark:bg-black ">
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
          <div>
            <Badge count={cart?.total_quantity || 0} overflowCount={999}>
              <Link to="/cart">
                <ShoppingCart className="w-7 h-7 text-red-600" />
              </Link>
            </Badge>
          </div>

          <div className="relative">
            <UserCircle className="w-7 h-7" onClick={handlOpenToggle} />
            {openToggle && (
              <div className="absolute top-10 right-0 bg-white w-max drop-shadow-xl flex flex-col font-medium text-black justify-start">
                <div
                  onClick={handleNavProfile}
                  className="flex flex-row border-b border-zinc-300 justify-around py-3 gap-2 px-4 hover:text-red-600 transition-all duration:500"
                >
                  <User className="w-5 h-5" />
                  <div>Profile</div>
                </div>

                <div
                  onClick={handleNavOrders}
                  className="flex flex-row border-b border-zinc-300 py-3 px-4 gap-2 justify-around items-center hover:text-red-600 transition-all duration:500"
                >
                  <BadgeDollarSign className="w-5 h-5" />
                  <div>Orders</div>
                </div>

                <div className="flex flex-row border-b border-zinc-300 py-3 px-4 gap-1 justify-around items-center hover:text-red-600 transition-all duration:500">
                  <LogOutIcon className="w-5 h-5" />
                  <div onClick={handleSignOut}>Log out</div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Mobile/Tablet Menu Button */}
        <div className="md:hidden">
          <Menu
            color="oklch(0.577 0.245 27.325)"
            size={32}
            className="cursor-pointer"
            onClick={handleOpenSidebar}
          />
        </div>
      </div>

      {/* Mobile/Tablet Sidebar */}
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        user={user}
        signOut={signOut}
      />
    </div>
  );
}
