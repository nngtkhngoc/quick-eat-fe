import { useChefStore } from "../../store/useChefStore";
import { Pagination, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import ChefOverall from "../../components/ChefOverall";
import BannerLocation from "../../components/BannerLocation";

interface chef {
  id: string;
  name: string;
  profile_img: string;
  level: string;
  description: string;
}

export default function ChefList() {
  const { chef, fetchChef, loadingChef, totalChef } = useChefStore();
  const [pageNum, setPageNum] = useState(1);

  const LIMIT = 8;
  useEffect(() => {
    fetchChef({ limit: LIMIT, page: pageNum });
  }, [pageNum, fetchChef, LIMIT]);

  const handleOnChange = (pageNum: number) => {
    setPageNum(pageNum);
    window.scrollTo({ top: 0 });
  };
  if (!chef || loadingChef) {
    return <div className="pt-[80px]">Loading...</div>;
  }

  const renderChef = (chefs: chef[]) => {
    return chefs.map((chef) => <ChefOverall chef={chef} />);
  };

  return (
    <div className="py-[80px] bg-[#f6fee8]">
      <BannerLocation text="CHEFT LISTING" />
      <div className="flex flex-col gap-40 pt-30 justify-center items-center md:grid md:grid-cols-2 md:gap-x-0 md:px-3 md:place-items-center lg:grid-cols-4 pb-15">
        {renderChef(chef)}
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
          current={pageNum}
          total={totalChef}
          onChange={handleOnChange}
          className="!text-gray-800 !bg-[#f7ffe9]"
        />
      </ConfigProvider>
    </div>
  );
}
