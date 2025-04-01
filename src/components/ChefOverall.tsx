import Button from "./Button";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

interface chef {
  id: string;
  name: string;
  profile_img: string;
  level: string;
  description: string;
}

export default function ChefOverall({ chef }: { chef: chef }) {
  return (
    <div className="flex flex-col justify-center items-center relative group font-poppins w-9/10">
      <div className="absolute -top-25 w-max h-max z-10 before:absolute before:w-1 before:bg-white before:rounded-full before:h-1 before:top-1/2 before:left-1/2 before:-z-5 group-hover:before:z-20 group-hover:before:left-0 group-hover:before:top-0 group-hover:before:w-full group-hover:before:h-full group-hover:before:opacity-20 before:transition-all before:duration-500">
        <img
          src={chef.profile_img}
          alt="food"
          className="w-[200px] h-[200px] rounded-full object-cover relative z-10"
        />
      </div>

      <div className="pt-20 flex flex-col items-center justify-center text-center gap-5 w-[300px] lg:w-9/10 h-[460px] px-10 text-white bg-zinc-900">
        <div className="capitalize font-bold text-[30px] h-[80px]  group-hover:text-yellow-200 transition-all duration-500 flex justify-center items-center">
          {chef.name}
        </div>

        <div className="font-semibold text-[16px] capitalize">
          {chef.level} chef
        </div>

        <div className="text-[15px] h-[71px] overflow-hidden line-clamp-3">
          {chef.description}
        </div>

        <div className="flex flex-row gap-2 text-red-600 group-hover:text-white transition-all duration-500">
          <Facebook />
          <Instagram />
          <Twitter />
          <PhoneCall />
        </div>

        <Link to={`/chef/${chef.id}`}>
          <Button text="Read more" />
        </Link>
      </div>
    </div>
  );
}
