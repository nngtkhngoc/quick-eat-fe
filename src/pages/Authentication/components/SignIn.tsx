import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

export default function SignIn() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, errorAuth, loadingUser } = useAuthStore();

  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const handSignIn = () => {
    signIn(identifier, password);

    if (errorAuth) {
      api.error({
        message: "SIGN IN",
        description: errorAuth,
      });
    } else {
      api.success({
        message: "SIGN IN",
        description: "Sign in successfully",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 pb-10 ">
      {contextHolder}
      <form className="text-black text-[13px] flex flex-col gap-2 flex-start w-full ">
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
          onChange={(e) => {
            setIdentifier(e.target.value);
          }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {!visiblePassword ? (
            <EyeClosed
              className="text-zinc-500 absolute bottom-[6px] right-1 w-6 h-6"
              onClick={handleVisiblePassword}
            />
          ) : (
            <Eye
              className="text-zinc-500 absolute bottom-[6px] right-1 w-6 h-6"
              onClick={handleVisiblePassword}
            />
          )}
        </div>

        <div className="w-full text-right text-[12px] font-semibold text-red-600 py-3">
          Forget Password?
        </div>
      </form>

      <button
        type="submit"
        className=" w-full relative bg-red-600 py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500"
        onClick={handSignIn}
      >
        {loadingUser ? "Loading..." : "SIGN IN"}
      </button>
    </div>
  );
}
