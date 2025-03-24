import SearchAvailablity from "./SearchAvailablity";
import SearchBrand from "./SearchBrand";
import SearchCategory from "./SearchCategory";
import SearchPrice from "./SearchPrice";

interface SearchProps {
  searchCategories: string[];
  setSearchCategories: React.Dispatch<React.SetStateAction<string[]>>;
  loadingCategories: boolean;
  categories: { id: string; name: string }[] | null;

  searchAvailablity: string[];
  setSearchAvailablity: React.Dispatch<React.SetStateAction<string[]>>;

  setSearchPrice: React.Dispatch<React.SetStateAction<string[]>>;

  searchBrands: string[];
  setSearchBrands: React.Dispatch<React.SetStateAction<string[]>>;
  brands: { id: string; name: string }[] | null;
  loadingBrands: boolean;
}

export default function Search({
  setSearchCategories,
  searchCategories,
  loadingCategories,
  categories,

  searchAvailablity,
  setSearchAvailablity,

  setSearchPrice,

  searchBrands,
  brands,
  loadingBrands,
  setSearchBrands,
}: SearchProps) {
  const handleClearAll = () => {
    setSearchBrands([]);
    setSearchPrice(["0", "100"]);
    setSearchAvailablity([]);
    setSearchCategories([]);
  };

  return (
    <div className="bg-white flex flex-col justify-center py-6 px-8 gap-4 relative z-10 drop-shadow-lg ">
      <SearchCategory
        searchCategories={searchCategories}
        setSearchCategories={setSearchCategories}
        loadingCategories={loadingCategories}
        categories={categories}
      />

      <SearchAvailablity
        setSearchAvailablity={setSearchAvailablity}
        searchAvailablity={searchAvailablity}
      />

      <SearchPrice setSearchPrice={setSearchPrice} />

      <SearchBrand
        searchBrands={searchBrands}
        setSearchBrands={setSearchBrands}
        loadingBrands={loadingBrands}
        brands={brands}
      />

      <div className="w-full flex justify-center pb-5">
        <button
          onClick={handleClearAll}
          className=" relative bg-red-600 w-max lg:text-[16px] py-2 px-11 font-poppins border-transparent text-white text-semibold text-[17px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 border border-white"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
