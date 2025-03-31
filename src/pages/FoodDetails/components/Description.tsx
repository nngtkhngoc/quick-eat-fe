import { TagIcon } from "lucide-react";
import Food from "../../../types/food";
import Tag from "../../../types/Tag";

export default function Description({
  currentFood,
  loading,
}: {
  currentFood: Food | null;
  loading: boolean;
}) {
  if (!currentFood || loading) return <div>Loading...</div>;

  const renderTags = (tags: Tag[]) => {
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
        <TagIcon className="text-red-600 w-[16px]" />
        <div> | </div>
        {currentFood.food_tags?.length > 0 && renderTags(currentFood.food_tags)}
      </div>
    </div>
  );
}
