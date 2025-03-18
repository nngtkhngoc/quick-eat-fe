import brand1 from "../../../assets/images/brand1.png";
import brand2 from "../../../assets/images/brand2.png";
import brand3 from "../../../assets/images/brand3.png";
import brand4 from "../../../assets/images/brand4.png";
import brand5 from "../../../assets/images/brand5.png";
import brand6 from "../../../assets/images/brand6.png";

export default function Partners() {
  const images = [brand1, brand2, brand3, brand4, brand5, brand6];
  const renderImages = (images: string[]) => {
    return images.map((image) => (
      <img
        className="slide flex w-[200px] items-center justify-center"
        src={image}
      />
    ));
  };

  return (
    <div className="py-10 font-poppins bg-[#f1f1f1] flex flex-col justify-center items-center">
      <div className="font-bold text-[30px] px-3 md:text-[40px] w-max relative z-10 after:w-full after:h-1/4 after:bg-[#ece76e] after:absolute after:bottom-2 after:left-0 after:-z-2">
        OUR PARTNERS
      </div>
      <div className="relative m-auto w-4/5 overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#f1f1f1,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#f1f1f1,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-slider flex w-[calc(250px*6)] gap-5 py-10">
          {renderImages(images)}
          {renderImages(images)}
        </div>
      </div>
    </div>
  );
}
