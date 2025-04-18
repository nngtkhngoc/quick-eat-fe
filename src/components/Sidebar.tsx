import { X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import User from "../types/User";
import { useNavigate } from "react-router-dom";

interface sidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  signOut: () => void;
}

interface option {
  name: string;
  path: string;
}

export default function Sidebar({
  openSidebar,
  setOpenSidebar,
  user,
  signOut,
}: sidebarProps) {
  const options = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Chef", path: "/chef" },
    { name: "Profile", path: "/profile" },
    { name: "Cart", path: "/cart" },
    { name: "Orders", path: "/orders" },
  ];

  const renderOptions = (options: option[]) => {
    return options.map((option) => (
      <Link
        to={option.path}
        key={option.name}
        className="hover:text-red-600 text-[14px] cursor-pointer transition duration-300 ease-in-out h-[40px] flex justify-center items-center border-b-1 border-gray-300 w-2/3 dark:text-white"
        onClick={() => setOpenSidebar(false)}
      >
        {option.name}
      </Link>
    ));
  };

  const handleSignOut = () => {
    setOpenSidebar(false);
    signOut();
  };

  const nav = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-xl transition-transform duration-500 dark:bg-black  ${
        openSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute top-3 right-3">
        <X
          color="oklch(0.577 0.245 27.325)"
          size={32}
          className="cursor-pointer"
          onClick={() => setOpenSidebar(false)}
        />
      </div>

      <ul className="mt-10 space-y-4 flex justify-center items-center flex-col font-poppins text-black ">
        <img src={logo} alt="logo-pic" className="w-24 h-24" />

        {renderOptions(options)}

        {user ? (
          <div
            onClick={handleSignOut}
            className="hover:text-red-600 text-[14px] cursor-pointer transition duration-300 ease-in-out h-[40px] flex justify-center items-center  w-2/3 dark:text-white"
          >
            Sign Out
          </div>
        ) : (
          <div
            onClick={() => {
              nav("/auth");
              setOpenSidebar(false);
            }}
            className="hover:text-red-600 text-[14px] cursor-pointer transition duration-300 ease-in-out h-[40px] flex justify-center items-center  w-2/3 dark:text-white"
          >
            Sign In
          </div>
        )}
      </ul>
    </div>
  );
}
