import { Rate } from "antd";
import { useReviewStore } from "../../../store/useReviewStore";
import { useEffect } from "react";
import Food from "../../../types/food";
import Review from "../../../types/review";
import user from "../../../assets/images/user.png";

export default function ReviewDetails({
  currentFood,
  id,
}: {
  currentFood: Food | null;
  id: string | undefined;
}) {
  const { currentReviews, fetchReviews, loading } = useReviewStore();

  useEffect(() => {
    if (id) fetchReviews(id);
  }, [id, fetchReviews]);

  if (!currentReviews || loading || !currentReviews)
    return <div>Loading...</div>;

  const renderReviews = (reviews: Review[]) => {
    return reviews.map((review) => {
      // if (!review.user) <div>Loading...</div>;
      return (
        <div
          className="flex flex-row items-center bg-white rounded-[5px] gap-3 p-3 shadow-lg h-[150px] truncate"
          key={review.id}
        >
          <img
            src={review.user?.profile_pic || user}
            alt="avt"
            className="w-[100px] h-[100px] object-cover rounded-full"
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 ">
              <div>
                <div className="font-semibold capitalize">
                  {review.user?.fullname || review.user?.username}
                </div>

                <Rate
                  disabled
                  defaultValue={parseInt(review.score)}
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
      );
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="text-zinc-500 font-semibold text-[20px]">
        Customers' Reviews
      </div>

      <div className="flex flex-row gap-2 text-[14px] text-[#00D26D]">
        <div>({currentFood?.avg_rate}) ⭐ </div>
        <div className="">({currentReviews?.length || "0"} reviews)</div>
      </div>

      {currentReviews?.length > 0 && (
        <div className="flex flex-col gap-2">
          {renderReviews(currentReviews)}
        </div>
      )}
    </div>
  );
}
