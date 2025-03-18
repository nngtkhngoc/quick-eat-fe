import a1 from "../../../assets/images/a1.png";
import a2 from "../../../assets/images/a2.png";
import a3 from "../../../assets/images/a3.png";
import a4 from "../../../assets/images/a4.png";

export default function Awards() {
  const awards = [a1, a2, a3, a4];

  const renderAwards = (awards: string[]) => {
    return awards.map((award) => (
      <img
        src={award}
        alt="award"
        className="scale-85  hover:translate-y-3 transition-all duration-800"
      />
    ));
  };

  return (
    <div className="food-certificate-award-wrapper font-poppins flex flex-col justify-center items-center pt-10 gap-5 pb-20">
      <h2 className="uppercase font-bold text-[26px] md:text-[40px] z-10 w-max h-max after:h-1/6 after:bg-[#ECE76E] relative after:absolute after:bottom-2 px-3 after:left-0 after:-z-5 after:w-full">
        Certificates &amp; Awards
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-row lg:flex">
        {renderAwards(awards)}
      </div>
    </div>
  );
}
