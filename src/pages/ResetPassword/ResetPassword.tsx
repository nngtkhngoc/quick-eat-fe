import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { notification } from "antd";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const handleVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handleVisibleConfirmPassword = () => {
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
  };

  const API_URL = "https://quick-eat-be.onrender.com/api";
  const navigate = useNavigate();
  const { reset_password_token } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/users/reset-password/${reset_password_token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            new_password: password,
            confirm_new_password: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (data.success === true) {
        api.success({
          message: "Reset Password",
          description: "Reset password successfully",
        });
        setTimeout(() => navigate("/"), 1500);
      } else {
        api.error({
          message: "Reset Password",
          description: data.message,
        });
      }
    } catch (error) {
      console.log("Error during reset password:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="font-poppins pt-[80px] bg-zinc-100">
      {contextHolder}
      <div className="flex flex-col justify-center items-center py-10">
        <div className=" w-4/5 md:w-1/2 lg:w-1/4 bg-white px-5 py-10 rounded-[25px]  flex flex-col justify-center items-center gap-10 ">
          <div className="font-bold text-2xl text-red-600">
            Restore Password
          </div>

          <div className="flex flex-col justify-center items-center gap-5 w-full ">
            <form className="flex flex-col w-full gap-5">
              <div className="flex flex-col text-black text-[13px] gap-2 w-full relative ">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  type={isVisiblePassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="px-3 py-3 w-full border text-black rounded-xl focus:outline-none text-[12px]"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-2 bottom-3 text-zinc-400"
                  onClick={handleVisiblePassword}
                  type="button"
                >
                  {isVisiblePassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>

              <div className="flex flex-col text-black text-[13px] gap-2 w-full relative ">
                <label htmlFor="confirm_password" className="font-semibold">
                  Confirm password
                </label>
                <input
                  type={isVisibleConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm your password"
                  required
                  className="px-3 py-3 w-full border text-black rounded-xl focus:outline-none text-[12px]"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="absolute right-2 bottom-3 text-zinc-400"
                  onClick={handleVisibleConfirmPassword}
                  type="button"
                >
                  {isVisibleConfirmPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>
              <div className="w-full items-center flex justify-center pt-5">
                <button
                  className=" relative bg-red-600 w-max  py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500"
                  onClick={handleResetPassword}
                  type="button"
                  disabled={isLoading}
                >
                  {isLoading ? "Please wait..." : "Reset Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
