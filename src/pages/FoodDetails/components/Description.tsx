import { Tag } from "lucide-react";

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

export default function Description({
  currentFood,
  loading,
}: {
  currentFood: food | null;
  loading: boolean;
}) {
  if (!currentFood || loading) return <div>Loading...</div>;

  const renderTags = (tags: tag[]) => {
    return tags.map((tag, index) => (
      <div className="uppercase font-semibold text-[16px]" key={tag.tag.id}>
        {tag.tag.name} {index == tags.length - 1 ? "" : " | "}
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-6 border-b border-zinc-600 pb-6">
      <div className="text-[13px] text-zinc-600 text-sm/6 ">
        {currentFood.description}
      </div>

      <div className="flex flex-row gap-2">
        <Tag className="text-red-600 w-[16px]" />
        <div> | </div>
        {currentFood.food_tags?.length > 0 && renderTags(currentFood.food_tags)}
      </div>
    </div>
  );
}
