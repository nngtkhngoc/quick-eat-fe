import FoodOverall from "../../../components/FoodOverall";
import { Pagination, ConfigProvider } from "antd";
import Food from "../../../types/Food";

interface MenuProps {
  food: Food[];
  loading: boolean;
  setMenuPage: React.Dispatch<React.SetStateAction<number>>;
  menuPage: number;
  totalRelatedFood: number;
}

export default function Menu({
  food,
  loading,
  setMenuPage,
  menuPage,
  totalRelatedFood,
}: MenuProps) {
  if (loading || !food) {
    return <div>Loading...</div>;
  }

  const renderFood = (relatedFood: Food[]) => {
    return relatedFood.map((food) => <FoodOverall food={food} />);
  };

  const handleOnChange = (pageNum: number) => {
    setMenuPage(pageNum);
    window.scrollTo({ top: 250 });
  };

  return (
    <div className="flex flex-col font-poppins pt-10 lg:pt-0 lg:pl-10">
      <div className="uppercase font-bold text-[32px] px-2 relative w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e]">
        Menu
      </div>
      <div className="p-2 pt-3 flex flex-col gap-7 font-poppins md:grid md:grid-cols-2 w-full pb-10">
        {food.length > 0 ? renderFood(food) : <div>No food is found</div>}
      </div>
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              itemActiveBg: "oklch(0.577 0.245 27.325)",
              colorText: "rgb(0, 0, 0)",
              colorPrimary: "rgb(255, 255, 255)",
              fontFamily: "sans-serif",
              fontSize: 18,
              borderRadius: 0,
              controlHeight: 42,
              itemBg: "#f7ffe9",
            },
          },
        }}
      >
        <Pagination
          align="center"
          current={menuPage}
          total={totalRelatedFood}
          defaultPageSize={14}
          onChange={handleOnChange}
          className="!text-gray-800 !bg-[#f7ffe9]"
        />
      </ConfigProvider>
    </div>
  );
}
