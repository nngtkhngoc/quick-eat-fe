import { Eye, EyeClosed } from "lucide-react";
import google from "../../../assets/images/google.png";
import { useState } from "react";

export default function SignIn() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleChange = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 px-4 pt-3 pb-10 lg:px-8">
      <button className="border-zinc-300 border text-[14px] font-semibold py-3 px-7 flex flex-row gap-3 items-center">
        <img src={google} alt="google" />
        Sign Up with Google
      </button>

      <div className="text-zinc-300 text-[13px]">Or</div>

      <form className="text-black text-[13px] flex flex-col gap-2 flex-start w-full px-4">
        <label htmlFor="indentifier" className="font-semibold">
          Email/Phone number/Username
        </label>
        <input
          type="text"
          name="indentifier"
          id="indentifier"
          required
          placeholder="Email/phone number/username"
          className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
        />

        <div className="w-full relative flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type={visiblePassword ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="Password"
            className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
          />

          {!visiblePassword ? (
            <Eye
              className="text-zinc-500 absolute bottom-[6px] right-1 w-6 h-6"
              onClick={handleChange}
            />
          ) : (
            <EyeClosed
              className="text-zinc-500 absolute bottom-[6px] right-1 w-6 h-6"
              onClick={handleChange}
            />
          )}
        </div>

        <div className="w-full text-right text-[12px] font-semibold text-red-600 py-3">
          Forget Password?
        </div>

        <button
          type="submit"
          className=" w-full relative bg-red-600 py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
