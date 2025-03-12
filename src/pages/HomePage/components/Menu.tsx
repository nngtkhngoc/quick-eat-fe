import Button from "../../../components/Button";
import cooking from "../../../assets/images/cooking.png";

export default function Menu() {
  return (
    <div className="w-full bg-yellow-200 grid lg:grid-cols-2">
      <div className="lg:col-span-1 bg-yellow-100 p-2 space-y-5 lg:px-40 lg:py-10">
        <div>
          <div className="font-bold pl-4 pr-4 w-max text-[25px] relative before:absolute before:right-0 before:bottom-1.5 before:h-1/4 before:w-full before:bg-amber-300 z-10 before:-z-9">
            MOTHER'S FOOD'S
          </div>

          <div className="font-bold w-max text-[35px] ">TODAY DISHES</div>
        </div>

        <div className="grid grid-cols-4 my-6">
          <input
            type="text"
            placeholder="Search food"
            className="bg-white border-1 h-[50px] border-red-300 p-2 text-[15px] col-span-3"
          />
          <button className="text-center bg-red-600 col-span-1 text-white">
            Search
          </button>
        </div>

        <div className="text-gray-500 text-[14px] text-sm/7 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into.
        </div>

        <Button text="Order Now!" />

        <img src={cooking} />
      </div>

      <div className="lg:col-span-1 bg-red-200"> abc</div>
    </div>
  );
}
