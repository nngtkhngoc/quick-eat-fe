import { useParams } from "react-router-dom";
import BannerLocation from "../../components/BannerLocation";
import { useChefStore } from "../../store/useChefStore";
import { useEffect, useState } from "react";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import ChefOverall from "../../components/ChefOverall";
import Chef from "../../types/Chef";
export default function ChefDetails() {
  const { id } = useParams();
  const {
    chefDetails,
    fetchChefDetails,
    loadingChef,
    chef,
    fetchChef,
    loadingChefDetails,
  } = useChefStore();
  const [level, setLevel] = useState("");

  useEffect(() => {
    fetchChefDetails(id || "");
  }, [id, fetchChefDetails]);

  useEffect(() => {
    if (chefDetails) {
      setLevel(chefDetails.level);
    }
  }, [chefDetails]);

  useEffect(() => {
    if (level) {
      fetchChef({ limit: 5, page: 1, level: level });
    }
  }, [level, fetchChef]);

  if (!id) {
    return <div className="pt-[80px]">Not found</div>;
  }

  if (!chefDetails || loadingChefDetails || loadingChef || !chef) {
    return <div className="pt-[80px]">Loading...</div>;
  }

  const renderChef = (chefs: Chef[]) => {
    return chefs
      .filter((chef) => chef.id !== id)
      .map((chef) => (
        <div key={chef.id}>
          <ChefOverall chef={chef} />
        </div>
      ));
  };

  return (
    <div className="py-[80px] bg-[#f6fee8] font-poppins pt-[80px]">
      <BannerLocation text="Chef Details" />
      <div className=" flex flex-col justify-center items-center px-2 gap-5 lg:grid lg:grid-cols-5 lg:pl-40 lg:gap-20 lg:pt-20">
        <div className="w-9/10 aspect-square lg:w-[500px] lg:col-span-2 lg:place-self-end overflow-hidden">
          <img
            src={chefDetails.profile_img}
            alt="avatar"
            className="w-9/10 aspect-square object-cover lg:w-[500px] hover:scale-[1.2] transition-all duration-1000"
          />
        </div>
        <div className="lg:place-self-start lg:col-span-2">
          <div className="flex flex-col w-full gap-2">
            <div className="font-semibold uppercase text-[35px]">
              {chefDetails.name}
            </div>

            <div className="font-semibold capitalize text-[24px] text-red-500 ">
              {chefDetails.level} chef
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-medium text-[20px]">About Me</div>
              <div className="text-[13px] text-zinc-500">
                {chefDetails.description}
              </div>
            </div>

            <div className="flex flex-col gap-2 text-black">
              <div className="font-bold uppercase text-[24px]">Follow on</div>
              <div className="flex flex-row gap-3">
                <Facebook className="hover:text-red-600 transition-all duration-400" />
                <Instagram className="hover:text-red-600 transition-all duration-400" />
                <Twitter className="hover:text-red-600 transition-all duration-400" />
                <PhoneCall className="hover:text-red-600 transition-all duration-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-40 justify-center items-center pt-35 md:grid md:grid-cols-2 md:gap-x-0 md:place-items-center lg:grid-cols-4">
        {renderChef(chef)}
      </div>
    </div>
  );
}
