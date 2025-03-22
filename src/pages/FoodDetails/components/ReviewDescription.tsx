import { useState } from "react";

import { Rate } from "antd";
import Description from "./Description";
import Review from "./Review";

export default function ReviewDescription({ currentFood, loading }) {
  const [content, setContent] = useState("description");

  const titles = ["description", "reviews"];
  const renderContent = (titles: string[]) => {
    return titles.map((title) => (
      <div
        className={
          content == title
            ? "text-zinc-800 transition-all duration-400 cursor-pointer"
            : "cursor-pointer"
        }
        onClick={() => handleChangeContent(title)}
        key={title}
      >
        {title}
      </div>
    ));
  };

  const handleChangeContent = (content_name: string) => {
    setContent(content_name);
  };

  return (
    <div className="px-2 pt-8 gap-4 flex flex-col font-poppins">
      <div className="flex flex-row gap-4 font-semibold uppercase text-zinc-500">
        {renderContent(titles)}
      </div>
      {content == "description" ? (
        <Description currentFood={currentFood} loading={loading} />
      ) : (
        <Review currentFood={currentFood} loading={loading} />
      )}
    </div>
  );
}
