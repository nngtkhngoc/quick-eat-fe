import { useState } from "react";
import Description from "./Description";
import Review from "./Review";

interface food {
  id: string;
  name: string;
  price: number;
  availablity: string;
  description: string;
  image: string[];
  avg_rate: number;
  brand_id: string;
  brand: brand[];
  reviews: review[];
  food_tags: tag[];
  food_categories: category[];
}

interface brand {
  id: string;
  name: string;
}

interface user {
  id: string;
  username: string;
  fullname: string;
  phone_number: string;
  email: string;
  profile_pic: string;
}

interface review {
  id: string;
  score: number;
  content: string;
  created_at: string;
  food_id: string;
  user_id: string;
  user: user;
  food_tags: tag[];
  food_categories: category[];
}

interface tag {
  tag: { id: string; name: string };
}

interface category {
  category: { name: string };
}

export default function ReviewDescription({
  currentFood,
  loading,
}: {
  currentFood: food | null;
  loading: boolean;
}) {
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
    <div className="px-2 pt-8 gap-4 flex flex-col font-poppins lg:pl-25">
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
