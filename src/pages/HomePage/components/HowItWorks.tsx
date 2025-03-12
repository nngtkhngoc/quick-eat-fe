import { ShoppingBasket, Wallet, Bike } from "lucide-react";
import arrow1 from "../../../assets/images/arrow1.png";
import arrow2 from "../../../assets/images/arrow2.png";

export default function HowItWorks() {
  return (
    <div className="flex items-center justify-between font-poppins flex-col md:flex-row md:space-x-10 ">
      {/* {renderIcons(icons)} */}
      <div className="flex items-center justify-center font-poppins flex-col space-y-2 ">
        <div className="w-[100px] h-[100px] rounded-full bg-red-600 flex items-center justify-center">
          <ShoppingBasket className="w-[58px] h-[60px] text-white relative z-10 stroke-1 hover:translate-y-3 transition-all duration-800" />
        </div>
        <div className="font-bold text-[16px]">Select Food & Kitchen</div>
        <div className="text-gray-500 text-[14px] w-[200px] text-center text-sm/5">
          Lorem ipsum dolor sit amet, consec- tetuer adipisc.
        </div>
      </div>

      <img src={arrow1} className="hidden lg:block" />

      <div className="flex items-center justify-center font-poppins flex-col space-y-2 ">
        <div className="w-[100px] h-[100px] rounded-full bg-red-600 flex items-center justify-center">
          <Wallet className="w-[58px] h-[60px] text-white relative z-10 stroke-1 hover:translate-y-3 transition-all duration-800" />
        </div>
        <div className="font-bold text-[16px]">Order & Pay</div>
        <div className="text-gray-500 text-[14px] w-[200px] text-center text-sm/5">
          Lorem ipsum dolor sit amet, consec- tetuer adipisc.
        </div>
      </div>

      <img src={arrow2} className="hidden lg:block" />

      <div className="flex items-center justify-center font-poppins flex-col space-y-2 ">
        <div className="w-[100px] h-[100px] rounded-full bg-red-600 flex items-center justify-center">
          <Bike className="w-[58px] h-[60px] text-white relative z-10 stroke-1 hover:translate-y-3 transition-all duration-800" />
        </div>
        <div className="font-bold text-[16px]">Pickup & Delivery</div>
        <div className="text-gray-500 text-[14px] w-[200px] text-center text-sm/5">
          Lorem ipsum dolor sit amet, consec- tetuer adipisc.
        </div>
      </div>
    </div>
  );
}
