export default function Button({ text }: { text: string }) {
  return (
    <button className=" relative bg-red-600 w-max lg:text-[18px] py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500">
      {text}
    </button>
  );
}
