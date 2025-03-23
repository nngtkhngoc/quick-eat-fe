export default function SearchAvailablity({
  setSearchAvailablity,
  searchAvailablity,
}: {
  setSearchAvailablity: React.Dispatch<React.SetStateAction<string[]>>;
  searchAvailablity: string[];
}) {
  const availablities = ["In stock", "Out of stock"];

  const handleChangeAvailablity = (availablity: string) => {
    setSearchAvailablity((prevAvailablities: string[]) => {
      if (prevAvailablities.includes(availablity)) {
        return prevAvailablities.filter((name) => name !== availablity);
      } else {
        return [...prevAvailablities, availablity];
      }
    });
  };

  const renderAvalablity = (availablities: string[]) => {
    return availablities.map((availablity, index) => (
      <div key={index} className="flex items-center gap-2 ">
        <input
          type="checkbox"
          id={availablity}
          name={availablity}
          value={availablity}
          checked={searchAvailablity.includes(availablity)}
          onChange={() => handleChangeAvailablity(availablity)}
          className="checked:appearance-none checked:text-white w-4 h-4 bg-gray-100 checked:bg-red-600 border-gray-300 rounded-sm "
        />
        <label htmlFor={availablity}>{availablity}</label>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="pb-3 border-b border-black">
        <div className="uppercase text-[25px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e]">
          Availablity
        </div>
      </div>

      <form className="flex flex-col gap-2 text-[16px] font-medium">
        {renderAvalablity(availablities)}
      </form>
    </div>
  );
}
