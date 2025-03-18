import { Store } from "lucide-react";

export default function WorkWithUs() {
  return (
    <div className="flex items-center justify-center bg-red-600 font-poppins relative before:absolute before:left-0 before:top-0   before:z-[2] before:h-1/3 before:w-full before:bg-[linear-gradient(to_bottom,#f1f1f1,rgba(255,255,255,0)_100%)] after:absolute after:right-0 after:-bottom-2 after:z-[2] after:h-1/3 after:w-full after:-scale-x-100 after:bg-[linear-gradient(to_top,#f1f1f1,rgba(255,255,255,0)_100%)]">
      <div className="p-4 flex items-center justify-center flex-col gap-2 lg:gap-5 md:flex-row py-20">
        <Store className="text-white w-[50px] h-[50px] md:w-[75px] md:h-[75px]" />

        <div className="flex flex-col items-center justify-center lg:items-start">
          <div className="uppercase text-[20px] md:text-[25px] text-white w-max px-2 font-bold relative after:w-full after:h-1/4 after:absolute z-10 after:-z-5 after:bottom-1 after:left-0 after:bg-[#ff516f]">
            Work with QuickEat
          </div>

          <div className="uppercase text-[28px] md:text-[33px] text-white font-bold text-center">
            Interested to work with us?
          </div>
        </div>

        <button className=" relative bg-red-600 w-max lg:text-[18px] py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 border border-white">
          Get A Quote
        </button>
      </div>
    </div>
  );
}
