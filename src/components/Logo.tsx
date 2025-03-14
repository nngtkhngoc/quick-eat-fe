import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Logo({ color }: { color: string }) {
  return (
    <Link to="/">
      <div className="flex flex-row items-center gap-2">
        <img src={logo} alt="logo-pic" className="w-12 h-12" />
        <div className="text-[20px] font-bold">
          <span className={`${color}`}>Quick</span>
          <span className="text-red-600">Eat</span>
        </div>
      </div>
    </Link>
  );
}
