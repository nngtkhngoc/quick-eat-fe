import { X } from "lucide-react";
import logo from "../assets/images/logo.png";

interface sidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ openSidebar, setOpenSidebar }: sidebarProps) {
  const options = [
    "Home",
    "About",
    "Shop",
    "Chef",
    "Blog",
    "Profile",
    "Cart",
    "Sign Out",
  ];

  const renderOptions = (options: string[]) => {
    return options.map((option) => (
      <li className="hover:text-red-600 text-[14px] cursor-pointer transition duration-300 ease-in-out h-[40px] flex justify-center items-center border-b-1 border-gray-300 w-2/3">
        {option}
      </li>
    ));
  };
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-xl transition-transform duration-500  ${
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
      </ul>
    </div>
  );
}
