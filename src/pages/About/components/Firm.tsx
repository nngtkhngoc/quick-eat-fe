import firm_food from "../../../assets/images/firm_food.jpg";
import corn from "../../../assets/images/img1.png";
import mushroom from "../../../assets/images/img2.png";
import Button from "../../../components/Button";

export default function Firm() {
  return (
    <div className="px-2 pt-20 flex flex-col gap-10 items-center justify-center font-poppins z-10 relative md:gap-5 lg:grid lg:grid-cols-2 lg:gap-0 ">
      <div>
        <div className="lg:w-[500px] lg:h-[334px] overflow-hidden place-self-center">
          <img
            src={firm_food}
            alt="firm_food"
            className="lg:w-[500px] lg:h-[334px] hover:scale-115 transition-all duration-900"
          />
        </div>
        <div>
          <div className="absolute right-0 top-0 w-32 h-32 animate-bounce ">
            <img src={corn} alt="corn" />
          </div>
          <div className="absolute left-0 top-0 w-40 h-40 -z-3 animate-bounce">
            <img src={mushroom} alt="mushroom" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 place-self-start">
        <div className="uppercase font-bold text-[30px] z-10 w-max h-max after:h-1/6 after:bg-[#ECE76E] relative after:absolute after:bottom-2 px-3 after:left-0 after:-z-5 after:w-full">
          About out firm's
        </div>

        <div className="capitalize text-[14px] pr-8 md:pr-0">
          we are committed to total transparency about our products.
        </div>

        <div className="text-[12px] pr-8 text-[#808080] flex flex-col gap-3">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Button text="Our Story" />
        </div>
      </div>
    </div>
  );
}
