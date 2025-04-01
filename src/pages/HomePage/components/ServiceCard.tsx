export default function ServiceCard({
  img_src,
  title,
  bg_color,
  text_color,
  width,
  height,
}: {
  img_src: string;
  title: string;
  bg_color: string;
  text_color: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className={`w-[350px] h-[180px] ${bg_color} flex items-center relative md:h-[210px] lg:w-4/5 lg:h-[180px]`}
    >
      <div
        className={`${text_color} font-semibold font-poppins pl-5 pt-10 text-[30px] inline-block w-[30px] text-sm/8`}
      >
        {title}
      </div>
      <img
        src={img_src}
        className={`absolute right-5 ${width} ${height} hover:scale-[1.1] transition-all duration-700`}
      />
    </div>
  );
}
