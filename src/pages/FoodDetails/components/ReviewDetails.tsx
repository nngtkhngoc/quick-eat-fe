import { Rate } from "antd";

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

export default function ReviewDetails({
  currentFood,
  loading,
}: {
  currentFood: food | null;
  loading: boolean;
}) {
  if (!currentFood || loading) return <div>Loading...</div>;
  const renderReviews = (reviews: review[]) => {
    return reviews.map((review) => (
      <div
        className="flex flex-row items-center bg-white rounded-[5px] gap-3 p-3 shadow-lg h-[150px] truncate"
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
    <div className="flex flex-col gap-2">
      <div className="text-zinc-500 font-semibold text-[20px]">
        Customers' Reviews
      </div>

      <div className="flex flex-row gap-2 text-[14px] text-[#00D26D]">
        <div>({currentFood.avg_rate}) ⭐ </div>
        <div className="">({currentFood.reviews?.length || "0"} reviews)</div>
      </div>

      {currentFood.reviews?.length > 0 && (
        <div className="flex flex-col gap-2">
          {renderReviews(currentFood.reviews)}
        </div>
      )}
    </div>
  );
}
