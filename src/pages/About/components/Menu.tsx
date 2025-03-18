import noodle from "../../../assets/images/noodle.jpg";
import rice from "../../../assets/images/rice.jpg";
import tokbokki from "../../../assets/images/tokbooki.jpg";
interface infor {
  name: string;
  description: string;
  image: string;
}

export default function Menu() {
  const infors = [
    {
      name: "OUR MISSION",
      description:
        "Nunc elementum purus ex iaculis elfend. Curabitur bibendum odio du",
      image: `${noodle}`,
    },
    {
      name: "OUR HISTORY",
      description:
        "Nunc elementum purus ex iaculis elfend. Curabitur bibendum odio du",
      image: `${rice}`,
    },
    {
      name: "OUR HISTORY",
      description:
        "Nunc elementum purus ex iaculis elfend. Curabitur bibendum odio du",
      image: `${tokbokki}`,
    },
  ];

  const renderInfors = (infors: infor[]) => {
    return infors.map((infor) => (
      <div className="flex flex-row justify-center items-center gap-3 bg-white drop-shadow-xl p-4 rounded-[25px] font-poppins ">
        <img
          src={infor.image}
          alt={infor.name}
          className="w-[120px] h-[120px] object-cover rounded-full"
        />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[19px]">{infor.name}</span>
          <span className="text-zinc-600 text-[13px]">{infor.description}</span>
        </div>
      </div>
    ));
  };
  return (
    <div className="px-2 flex flex-col gap-5 md:flex-row md:px-20">
      {renderInfors(infors)}
    </div>
  );
}
