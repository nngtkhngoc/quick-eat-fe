import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

interface SearchPriceProps {
  setSearchPrice: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SearchPrice({ setSearchPrice }: SearchPriceProps) {
  const minDistance = 10;
  const [value, setValue] = useState<number[]>([0, 100]);

  useEffect(() => {
    setSearchPrice(value.map(String));
  }, [value, setSearchPrice]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    const newRange =
      activeThumb === 0
        ? [Math.min(newValue[0], value[1] - minDistance), value[1]]
        : [value[0], Math.max(newValue[1], value[0] + minDistance)];

    setValue(newRange);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="pb-3 border-b border-black">
        <div className="uppercase text-[25px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e]">
          Price
        </div>
      </div>

      <div className="flex flex-row justify-between text-[15px] font-medium">
        <div className="text-zinc-600 ">Your Range: </div>
        <div className="flex flex-row gap-2">
          {value.map((price, index) => (
            <div className="flex flex-row gap-2">
              <div>${price}</div>
              <div>{index !== 1 && <div>-</div>}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          min={0}
          max={100}
          color="error"
        />
      </div>
    </div>
  );
}
