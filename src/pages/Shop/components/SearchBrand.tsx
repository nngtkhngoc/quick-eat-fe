interface brand {
  id: string;
  name: string;
}

interface SearchBrandProps {
  searchBrands: string[];
  setSearchBrands: React.Dispatch<React.SetStateAction<string[]>>;
  loadingBrands: boolean;
  brands: brand[] | null;
}

export default function SearchBrand({
  searchBrands,
  setSearchBrands,
  brands,
  loadingBrands,
}: SearchBrandProps) {
  if (loadingBrands) {
    return <div>Loading...</div>;
  }

  const handleCategoryChange = (brandName: string) => {
    setSearchBrands((prevBrands: string[]) => {
      if (prevBrands.includes(brandName)) {
        return prevBrands.filter((name: string) => name !== brandName);
      } else {
        return [...prevBrands, brandName];
      }
    });
  };

  const renderBrands = (brands: brand[]) => {
    return brands.map((brand) => (
      <div key={brand.id} className="flex items-center gap-2 ">
        <input
          type="checkbox"
          id={brand.id}
          name={brand.name}
          value={brand.name}
          checked={searchBrands.includes(brand.name)}
          onChange={() => handleCategoryChange(brand.name)}
          className="checked:appearance-none checked:text-white w-4 h-4 bg-gray-100 checked:bg-red-600 border-gray-300 rounded-sm "
        />
        <label htmlFor={brand.id}>{brand.name}</label>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-2 -mt-5">
      <div className="pb-3 border-b border-black">
        <div className="uppercase text-[25px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e]">
          Brand
        </div>
      </div>
      {brands && brands.length > 0 ? (
        <form className="flex flex-col gap-2 text-[16px] font-medium">
          {renderBrands(brands)}
        </form>
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}
