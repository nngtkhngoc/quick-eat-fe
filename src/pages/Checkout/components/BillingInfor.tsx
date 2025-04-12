import ProvinceDropdown from "./ProvinceDropdown";

export default function BillingInfor() {
  return (
    <div className="bg-white my-10 w-9/10 lg:w-1/2 md:w-2/3 drop-shadow-xl">
      <div className="bg-white p-5">
        <div className="uppercase text-[22px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e] ">
          Billing information
        </div>

        <div className="flex flex-col md:grid md:grid-cols-7 md:gap-x-3 text-[13px]">
          <div className="flex flex-col gap-2 pt-3 col-span-4 ">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="fname" className="font-medium">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                className=" px-2 py-2 border border-zinc-400 rounded-[5px]"
              />
            </div>{" "}
            <ProvinceDropdown />
          </div>

          <div className="flex flex-col gap-2 pt-3 col-span-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                className=" px-2 py-2 border border-zinc-400 rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
