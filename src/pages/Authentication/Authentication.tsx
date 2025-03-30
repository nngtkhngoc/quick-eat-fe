import { Link } from "react-router-dom";
import auth from "../../assets/images/auth.jpg";
import logo from "../../assets/images/logo.png";
import sideback from "../../assets/images/sideback.png";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import google from "../../assets/images/google.png";

export default function Authentication() {
  const [content, setContent] = useState("signin");

  return (
    <div className="grid grid-cols-1 pt-[80px] font-poppins md:grid-cols-2">
      <div
        style={{ backgroundImage: `url(${auth})` }}
        className="w-full h-[250px] md:h-full flex flex-col items-center justify-center"
      >
        <Link to="/">
          <div className="flex flex-row items-center gap-2 font-poppins">
            <img src={logo} alt="logo-pic" className="w-16 h-16" />
            <div className="text-[30px] font-bold text-white">QuickEat</div>
          </div>
        </Link>
      </div>

      <div
        style={{
          backgroundImage: `url(${sideback})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex flex-col justify-center items-center py-10 "
      >
        <div className="py-10 w-full flex flex-col justify-center items-center ">
          <div className="bg-white w-full flex flex-col justify-center items-center lg:w-2/3 drop-shadow-lg">
            <div className="grid grid-cols-2 w-full px-10  py-10 text-[13px] ">
              <div
                className={`cursor-pointer pb-3 border-b-2 w-full text-center ${
                  content == "signin"
                    ? "text-red-600 border-red-600"
                    : "text-zinc-600 border-zinc-300"
                }`}
                onClick={() => {
                  setContent("signin");
                }}
              >
                Sign In
              </div>
              <div
                className={`cursor-pointer pb-3 border-b-2 text-center w-full ${
                  content == "signup"
                    ? "text-red-600 border-red-600"
                    : "text-zinc-600 border-zinc-300"
                }`}
                onClick={() => {
                  setContent("signup");
                }}
              >
                Sign Up
              </div>
            </div>
            <div className="w-full px-12 flex flex-col justify-center items-center gap-2">
              <button className="border-zinc-300 border text-[14px] font-semibold py-3 w-full flex flex-row gap-3 items-center justify-center">
                <img src={google} alt="google" />
                Sign Up with Google
              </button>
              <div className="text-zinc-300 text-[13px]">Or</div>

              {content == "signin" ? <SignIn /> : <SignUp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
