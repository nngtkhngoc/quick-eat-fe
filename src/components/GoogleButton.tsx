import { useGoogleLogin } from "@react-oauth/google";
import google from "../assets/images/google.png";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useCartStore } from "../store/useCartStore";

const GoogleSignInButton = () => {
  const BASE_URL = "https://quick-eat-be.onrender.com";
  const nav = useNavigate();
  const { fetchCart } = useCartStore();
  const { fetchUser } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const response = await fetch(`${BASE_URL}/api/oauth/google`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: credentialResponse.access_token }),
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("token", data.token);
          fetchUser();
          fetchCart();
          nav("/");
          window.location.reload();
        }
      } catch (error) {
        console.log("Error sign in by google: ", error);
      }
    },
    onError: () => console.log("Login Failed!"),
  });

  return (
    <button
      onClick={() => login()}
      className="border-zinc-300 border cursor-pointer text-[14px] font-semibold py-3 w-full flex flex-row gap-3 items-center justify-center"
    >
      <img src={google} alt="google" />
      Sign Up with Google
    </button>
  );
};

export default GoogleSignInButton;
