import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/images/user.png";
import { useAuthStore } from "../../../store/useAuthStore";
import { notification } from "antd";

export default function SignUp() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleVisibleConfirmPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp, loadingUser, errorAuth } = useAuthStore();

  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const handleSignUp = () => {
    signUp(username, email, password, confirmPassword, phone, user);

    if (errorAuth) {
      api.error({
        message: "SIGN UP",
        description: errorAuth,
      });
    } else {
      api.success({
        message: "SIGN UP",
        description: "Sign up successfully",
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
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
          className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="phone" className="font-semibold">
          Phone number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          placeholder="Phone number"
          className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          type="tel"
          name="username"
          id="username"
          required
          placeholder="Username"
          className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
          onChange={(e) => {
            setUsername(e.target.value);
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

        <div className="w-full relative flex flex-col gap-2">
          <label htmlFor="cfpassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            type={visibleConfirmPassword ? "text" : "password"}
            name="cfpassword"
            id="cfpassword"
            required
            placeholder="Confirm password"
            className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          {!visibleConfirmPassword ? (
            <EyeClosed
              className="text-zinc-500 absolute bottom-[6px] right-1 w-6 h-6"
              onClick={handleVisibleConfirmPassword}
            />
          ) : (
            <Eye
              className="text-zinc-500 absolute bottom-[6px] right-1 w-6 h-6"
              onClick={handleVisibleConfirmPassword}
            />
          )}
        </div>

        <div className="w-full text-right text-[12px] font-semibold text-red-600 py-3">
          Forget Password?
        </div>
      </form>
      <button
        className=" w-full relative bg-red-600 py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500"
        onClick={handleSignUp}
      >
        {loadingUser ? "Loading..." : "SIGN UP"}
      </button>
    </div>
  );
}
