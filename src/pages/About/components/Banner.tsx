import { Link } from "react-router-dom";
import about_bg from "../../../assets/images/about_bg.jpg";
export default function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${about_bg})` }}
      className="font-poppins text-white"
    >
      <div className="py-35  flex justify-center items-center uppercase flex-col gap-1 ">
        <div className="text-center font-semibold text-[26px]">about us</div>
        <div className="flex justify-center font-medium items-center gap-2 text-[17px]">
          <Link to="/">Home</Link>
          <div>|</div>
          <div>About Us</div>
        </div>
      </div>
    </div>
  );
}
