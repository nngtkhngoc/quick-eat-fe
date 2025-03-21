import { useState, useEffect } from "react";
import { useReviewStore } from "../../../store/useReviewStore";
import { useFoodStore } from "../../../store/useFoodStore";
import { useParams } from "react-router-dom";
import { Rate } from "antd";

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
}
export default function ReviewDescription() {
  const [content, setContent] = useState("description");
  const { fetchReviews, currentReviews } = useReviewStore();
  const { fetchFood, currentFood, loading } = useFoodStore();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchReviews(id);
      fetchFood(id);
    }
  }, [fetchReviews, fetchFood, id]);

  const titles = ["description", "reviews"];
  const renderContent = (titles: string[]) => {
    return titles.map((title) => (
      <div
        className={content == title ? "text-black" : ""}
        onClick={() => handleChangeContent(title)}
      >
        {title}
      </div>
    ));
  };

  const handleChangeContent = (content_name: string) => {
    setContent(content_name);
  };

  const renderReviews = (reviews: review[]) => {
    return reviews.map((review) => (
      <div className="flex flex-row items-center bg-white rounded-[10px] gap-3 p-3 shadow-lg h-[150px] truncate">
        <img
          src={review.user.profile_pic}
          alt="avt"
          className="w-[100px] h-[100px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 ">
            <div>
              <div className="font-semibold capitalize">
                {review.user.fullname}
              </div>

              <Rate
                disabled
                defaultValue={review.score}
                style={{ fontSize: 14 }}
              />
            </div>
            <div className=" pt-1 text-[12px] text-zinc-600 flex justify-end">
              {review.created_at.slice(0, 10)}
            </div>
          </div>

          <div className="text-[14px] text-zinc-600">{review.content}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="px-2 pt-8 gap-4 flex flex-col font-poppins">
      <div className="flex flex-row gap-4 font-semibold uppercase text-zinc-600">
        {renderContent(titles)}
      </div>
      {content == "description" ? (
        <div className="text-[13px] text-zinc-600 text-sm/6 truncate">
          {currentFood.description}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {renderReviews(currentReviews)}
        </div>
      )}
    </div>
  );
}
