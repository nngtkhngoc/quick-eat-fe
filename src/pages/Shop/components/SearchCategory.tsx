interface category {
  id: string;
  name: string;
}

interface SearchCategoryProps {
  setSearchCategories: React.Dispatch<React.SetStateAction<string[]>>;
  searchCategories: string[];
  loadingCategories: boolean;
  categories: category[] | null;
}

export default function SearchCategory({
  searchCategories,
  setSearchCategories,
  loadingCategories,
  categories,
}: SearchCategoryProps) {
  if (loadingCategories) {
    return <div>Loading...</div>;
  }

  const handleCategoryChange = (categoryName: string) => {
    setSearchCategories((prevCategories: string[]) => {
      if (prevCategories.includes(categoryName)) {
        return prevCategories.filter((name: string) => name !== categoryName);
      } else {
        return [...prevCategories, categoryName];
      }
    });
  };

  const renderCategories = (categories: category[]) => {
    return categories.map((category) => (
      <div key={category.id} className="flex items-center gap-2 ">
        <input
          type="checkbox"
          id={category.id}
          name={category.name}
          checked={searchCategories.includes(category.name)}
          value={category.name}
          onChange={() => handleCategoryChange(category.name)}
          className="checked:appearance-none checked:text-white w-4 h-4 bg-gray-100 checked:bg-red-600 border-gray-300 rounded-sm "
        />
        <label htmlFor={category.id}>{category.name}</label>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="pb-3 border-b border-black">
        <div className="uppercase text-[25px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e] ">
          Category
        </div>
      </div>

      {categories && categories.length > 0 ? (
        <form className="flex flex-col gap-2 text-[16px] font-medium">
          {renderCategories(categories)}
        </form>
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}
