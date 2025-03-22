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

export default function Review({ currentFood, loading }) {
  if (!currentFood || loading) return <div>Loading...</div>;
  const renderReviews = (reviews: review[]) => {
    return reviews.map((review) => (
      <div
        className="flex flex-row items-center bg-white rounded-[10px] gap-3 p-3 shadow-lg h-[150px] truncate"
        key={review.id}
      >
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
    <div>
      {currentFood.reviews?.length > 0 && (
        <div className="flex flex-col gap-2">
          {renderReviews(currentFood.reviews)}
        </div>
      )}
    </div>
  );
}
