import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../../assets/images/user.png";
import { useAuthStore } from "../../../store/useAuthStore";
import { notification } from "antd";
import { useCartStore } from "../../../store/useCartStore";

export default function SignUp() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const { fetchCart } = useCartStore();

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
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://quick-eat-be.onrender.com/api";

  const { fetchUser } = useAuthStore();

  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const handleSignUp = async () => {
    setLoading(true);
    if (
      !username.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      api.error({
        message: "SIGN UP FAILED",
        description: "Please fill in all required fields.",
      });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      api.error({
        message: "SIGN UP FAILED",
        description: "Invalid email format.",
      });
      setLoading(false);

      return;
    }

    const phoneRegex = /^\d{9,}$/;
    if (!phoneRegex.test(phone)) {
      api.error({
        message: "SIGN UP FAILED",
        description: "Invalid phone number. Must contain at least 9 digits.",
      });
      setLoading(false);

      return;
    }

    if (password.length < 6) {
      api.error({
        message: "SIGN UP FAILED",
        description: "Password must be at least 6 characters.",
      });
      setLoading(false);

      return;
    }

    if (password !== confirmPassword) {
      api.error({
        message: "SIGN UP FAILED",
        description: "Passwords do not match.",
      });
      setLoading(false);

      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirm_password: confirmPassword,
          phone_number: phone,
          profile_pic: user,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        fetchUser();
        fetchCart();
        api.success({
          message: "SIGN UP",
          description: "Sign up successfully",
        });
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      } else {
        api.error({
          message: "SIGN UP",
          description: data.message,
        });
      }
    } catch (error) {
      console.log("Error signing up", error);
    }
    setLoading(false);
  };

  const [disabled, setDisabled] = useState(true);

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
          value={email}
          id="email"
          required
          placeholder="Email"
          className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
          onChange={(e) => {
            setEmail(e.target.value);
            setDisabled(false);
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
            setDisabled(false);
          }}
        />

        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={username}
          id="username"
          required
          placeholder="Username"
          className="border border-zinc-300 p-2 w-full text-[12px] focus:outline-red-600 focus:outline-1"
          onChange={(e) => {
            setUsername(e.target.value);
            setDisabled(false);
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
              setDisabled(false);
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
              setDisabled(false);
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

        <Link
          to="/reset-password-token"
          className="w-full text-right text-[12px] font-semibold text-red-600 py-3"
        >
          Forget Password?
        </Link>
      </form>
      <button
        disabled={disabled || loading}
        className={` ${
          disabled || loading ? "cursor-not-allowed" : "cursor-pointer"
        } w-full relative bg-red-600 py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500`}
        onClick={handleSignUp}
      >
        {loading ? "Loading..." : "SIGN UP"}
      </button>
    </div>
  );
}
