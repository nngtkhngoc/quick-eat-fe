import { Rate } from "antd";
import { useReviewStore } from "../../../store/useReviewStore";
import { useState } from "react";

export default function AddReview({ id }: { id: string | undefined }) {
  const { loadingAddReview, addReviews } = useReviewStore();

  const [content, setContent] = useState("");
  const [score, setScore] = useState(5);

  const handleAddReview = () => {
    addReviews(id, score, content);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-zinc-500 font-semibold text-[20px] capitalize">
        Add your review
      </div>
      <div className="p-5 bg-white shadow-xl text-[14px] flex flex-col gap-5">
        <div className="flex flex-row gap-5 items-center">
          <div className="font-semibold"> Your Rating: </div>
          <Rate
            style={{ fontSize: 15 }}
            defaultValue={5}
            onChange={(value) => {
              setScore(value);
            }}
          />
        </div>

        <form className="flex flex-col gap-5">
          <textarea
            placeholder="Type Your Comment"
            className="border w-full border-zinc-400 p-4 h-[250px] focus:outline-none"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </form>
        <button
          onClick={handleAddReview}
          className=" relative bg-red-600 w-max lg:text-[18px] py-2 px-11 font-poppins border-transparent text-white text-semibold text-[17px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 border border-white"
        >
          {loadingAddReview ? "Loading..." : "SUBMIT"}
        </button>
      </div>
    </div>
  );
}
