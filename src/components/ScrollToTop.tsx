import { ChevronsUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisble] = useState(false);

  const handleVisibleButton = () => {
    setIsVisble(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);
  return (
    <button
      className={`bg-black p-2 rounded-full fixed bottom-10 right-5 z-30 cursor-pointer animate-jump ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={handleScrollUp}
    >
      <ChevronsUp className="text-white w-6 h-6" />
    </button>
  );
}
