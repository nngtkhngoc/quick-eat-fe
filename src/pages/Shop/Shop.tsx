import Search from "./components/Search";
import NewArrivals from "./components/NewArrivals";
import Menu from "./components/Menu";
import BannerLocation from "../../components/BannerLocation";
import corn from "../../assets/images/img1.png";
import mushroom from "../../assets/images/img2.png";
import { useState, useEffect } from "react";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useBrandStore } from "../../store/useBrandStore";
import { useFoodStore } from "../../store/useFoodStore";

export default function Shop() {
  const [searchCategories, setSearchCategories] = useState<string[]>([]);
  const [searchAvailablity, setSearchAvailablity] = useState<string[]>([]);
  const [searchPrice, setSearchPrice] = useState<string[]>(["0", "100"]);
  const [searchBrands, setSearchBrands] = useState<string[]>([]);
  // const [search, setSearch] = useState<boolean>(false);

  const {
    fetchCategories,
    loading: loadingCategories,
    categories,
  } = useCategoryStore();

  const { fetchBrands, loading: loadingBrands, brands } = useBrandStore();

  const {
    fetchNewFood,
    newFood,
    loading: loadingNewFood,
    relatedFood,
    fetchRelatedFood,
    loadingRelatedFood,
  } = useFoodStore();

  const limit = 5,
    page = 1;
  useEffect(() => {
    fetchCategories(limit, page);
    fetchBrands(limit, page);
    fetchNewFood();
  }, [fetchCategories, fetchBrands, fetchNewFood]);

  const limit_menu = 20,
    page_menu = 1;
  useEffect(() => {
    console.log(searchCategories);
    fetchRelatedFood({
      limit: limit_menu,
      page: page_menu,
      categories: searchCategories,
      brands: searchBrands,
      availability: searchAvailablity,
      minPrice: searchPrice[0],
      maxPrice: searchPrice[1],
    });

    // console.log(relatedFood);
  }, [
    searchCategories,
    searchBrands,
    searchAvailablity,
    searchPrice,
    fetchRelatedFood,
  ]);

  return (
    <div className="font-poppins bg-[#f7ffe9] ">
      <BannerLocation text="Shop" />
      <div className="flex flex-col lg:grid lg:grid-cols-5 lg:px-20 px-4 relative">
        <img
          src={corn}
          alt="corn"
          className="absolute top-20 right-0 w-[130px] animate-bounce z-10"
        />
        <img
          src={mushroom}
          alt="mushroom"
          className="absolute top-10 left-0 w-[200px] animate-bounce z-3"
        />
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Search
            searchCategories={searchCategories}
            setSearchCategories={setSearchCategories}
            loadingCategories={loadingCategories}
            categories={categories}
            searchAvailablity={searchAvailablity}
            setSearchAvailablity={setSearchAvailablity}
            searchPrice={searchPrice}
            setSearchPrice={setSearchPrice}
            searchBrands={searchBrands}
            setSearchBrands={setSearchBrands}
            loadingBrands={loadingBrands}
            brands={brands}
            // setSearch={setSearch}
          />
          <NewArrivals newFood={newFood} loading={loadingNewFood} />
        </div>
        <Menu food={relatedFood} loading={loadingRelatedFood} />
      </div>
    </div>
  );
}
