import ProvinceDropdown from "./ProvinceDropdown";
import { useState } from "react";

interface ProvinceDropdownProps {
  setDetailedAddress: (detailedAddress: string) => void;
  setFullname: (fullname: string) => void;
  setPhone: (phone_number: string) => void;
}

export default function BillingInfor({
  setDetailedAddress,
  setFullname,
  setPhone,
}: ProvinceDropdownProps) {
  const [address, setAddress] = useState("");

  return (
    <div className="bg-white my-10 w-9/10 lg:w-9/10 md:w-2/3 drop-shadow-xl">
      <div className="bg-white p-5">
        <div className="uppercase text-[22px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e] ">
          Billing information
        </div>

        <div className="flex flex-col md:grid md:grid-cols-7 md:gap-x-3 text-[13px]">
          <div className="flex flex-col gap-5 pt-3 col-span-4 ">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="fname" className="font-medium">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                className=" px-2 py-2 border border-zinc-400 rounded-[5px]"
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <ProvinceDropdown setAddress={setAddress} address={address} />
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-3 col-span-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                className=" px-2 py-2 border border-zinc-400 rounded-[5px]"
                pattern="[0-9]{10,11}"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="detailAddress" className="font-medium">
                Detailed Address
              </label>
              <input
                required
                type="text"
                placeholder="Enter your detailed address"
                className=" w-full px-2 py-2 border border-zinc-400 rounded-[5px]"
                onChange={(e) =>
                  setDetailedAddress(address + ", " + e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
