import rawData from "../../../assets/data.json";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Ward {
  Id: string;
  Name: string;
  Level: string;
}

interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

interface Province {
  Id: string;
  Name: string;
  Districts: District[];
}

const data = rawData as Province[];

interface ProvinceDropdownProps {
  address: string;
  setAddress: (address: string) => void;
}

export default function ProvinceDropdown({
  setAddress,
  address,
}: ProvinceDropdownProps) {
  const [province, setProvince] = useState<Province>(data[0]);
  const [district, setDistrict] = useState<District>(province.Districts[0]);
  const [_ward, setWard] = useState<Ward>(district.Wards[0]); // eslint-disable-line @typescript-eslint/no-unused-vars

  const [info, setInfo] = useState(0);
  const [toggleDown, setToggleDown] = useState(false);

  const renderProvinces = (provinces: Province[]) => {
    return provinces.map((province) => (
      <li
        key={province.Id}
        value={province.Id}
        className="hover:bg-zinc-200 cursor-pointer py-3"
        onClick={() => {
          const selectedProvince = data.find((p) => p.Id === province.Id);
          if (selectedProvince) {
            setProvince(selectedProvince);
            setDistrict(selectedProvince.Districts[0]);
            setWard(selectedProvince.Districts[0].Wards[0]);
            setAddress(`${selectedProvince.Name}, `);
          }
          setInfo(1);
        }}
      >
        {province.Name}
      </li>
    ));
  };

  const renderDistricts = (districts: District[]) => {
    return districts.map((district) => (
      <li
        className="hover:bg-zinc-200 cursor-pointer py-3"
        key={district.Id}
        value={district.Id}
        onClick={() => {
          const selectedDistrict = province.Districts.find(
            (d) => d.Id === district.Id
          );
          if (selectedDistrict) {
            setDistrict(selectedDistrict);
            setWard(selectedDistrict.Wards[0]);
            setAddress(province.Name + ", " + `${selectedDistrict.Name}, `);
          }
          setInfo(2);
        }}
      >
        {district.Name}
      </li>
    ));
  };

  const renderWards = (wards: Ward[]) => {
    return wards.map((ward) => (
      <li
        className="hover:bg-zinc-200 cursor-pointer py-3"
        key={ward.Id}
        value={ward.Id}
        onClick={() => {
          const selectedWard = district.Wards.find((w) => w.Id === ward.Id);
          if (selectedWard) {
            setWard(selectedWard);
            setAddress(address + `${selectedWard.Name}`);
          }
          setInfo(3);
          setToggleDown(false);
        }}
      >
        {ward.Name}
      </li>
    ));
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            setToggleDown(true);
            setInfo(0);
          }}
        >
          <span className="font-medium">Address</span>
          {toggleDown ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </div>

        <div className="w-full h-9 px-2 border border-zinc-400 rounded-[5px] flex items-center">
          {address}
        </div>
      </div>

      <div
        className={`mt-2 w-full border border-zinc-200 shadow-sm grid grid-cols-3 text-center ${
          toggleDown ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3 py-2">
          <div
            onClick={() => {
              setInfo(0);
            }}
            className={`${
              info == 0
                ? "text-red-600 border-b py-2 border-b"
                : "text-black border-b py-2 border-b border-zinc-300"
            }`}
          >
            Province
          </div>
          {info == 0 && (
            <ul className="w-full h-40 overflow-y-scroll flex flex-col ">
              {renderProvinces(data)}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 py-2">
          <div
            className={`${
              info == 1
                ? "text-red-600 border-b py-2 border-b"
                : "text-black border-b py-2 border-b border-zinc-300"
            }`}
            onClick={() => {
              if (info == 2) {
                setInfo(1);
              }
            }}
          >
            District
          </div>
          {info == 1 && (
            <ul className="w-full h-40 overflow-y-scroll flex flex-col ">
              {renderDistricts(province.Districts)}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 py-2">
          <div
            className={`${
              info == 2
                ? "text-red-600 border-b py-2 border-b"
                : "text-black border-b py-2 border-b border-zinc-300"
            }`}
          >
            Ward
          </div>
          {info == 2 && (
            <ul className="w-full h-40 overflow-y-scroll flex flex-col ">
              {renderWards(district.Wards)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
