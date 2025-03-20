import { Link } from "react-router-dom";
import bg from "../assets/images/location_banner.jpg";
export default function BannerLocation({ text }: { text: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="font-poppins text-white"
    >
      <div className="py-35  flex justify-center items-center uppercase flex-col gap-1 ">
        <div className="text-center font-semibold text-[26px]">{text}</div>
        <div className="flex justify-center font-medium items-center gap-2 text-[17px]">
          <Link to="/">Home</Link>
          <div>|</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}
