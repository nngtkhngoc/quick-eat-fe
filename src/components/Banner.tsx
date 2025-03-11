import grandma from "../assets/images/grandma.jpg";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="w-screen h-[720px] md:h-[400px] lg:h-[600px] bg-[#fff7eb] space-y-2 pl-5 pt-5 relative flex md:flex-row flex-col md:justify-around lg:items-center">
      <img
        src={img1}
        alt="corn"
        className="absolute top-10 animate-bounce right-0 w-[120px] h-[160px]"
      />
      <div>
        <div className="font-poppins font-medium flex w-max relative">
          <span className=" inline-block before:absolute before:bottom-0 before:w-full before:bg-[#ffcbd4] before:h-1/2">
            <span className="relative text-black text-[16px] lg:text-[36px]">
              GET FRESHLY COOKED
            </span>
          </span>
        </div>

        <div className="text-[36px] lg:text-[60px] text-black font-bold text-sm/10 lg:text-sm/20">
          <div>HOMEFOOD AT</div>
          <div className="animate-typing w-max border-r-[2px] border-r-black overflow-hidden whitespace-nowrap lg:pr-10">
            YOUR DOORSTEPS
          </div>
        </div>

        <div className="text-[26px] lg:text-[30px] lg:pt-6 text-gray-500 text-sm/7 font-bold pt-12 pb-6">
          For Fresh & Delicious home Food
        </div>

        {/* <button className=" relative bg-red-600 w-max lg:text-[18px] py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500">
          Order now!
        </button> */}
        <Button text="Order now!" />
      </div>

      <img
        src={img2}
        alt="mushroom"
        className="absolute bottom-[-20px] left-0 w-[230px] h-[230px] animate-zoom md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[180px]"
      />

      <div className="flex items-center flex-col md:flex-col ">
        <img
          src={grandma}
          alt="grandma"
          className="animate-bounce w-[300px] h-[290px] lg:w-[550px] lg:h-[535px]"
        />
      </div>
    </div>
  );
}
