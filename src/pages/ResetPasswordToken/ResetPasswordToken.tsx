import { useState } from "react";
import { notification } from "antd";

export default function ResetPasswordToken() {
  const [email, setEmail] = useState("");
  const API_URL = "https://quick-eat-be.onrender.com/api";
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/reset-password-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (data.success === true) {
        api.success({
          message: "Send email",
          description: "Send email successfully!",
        });
      } else {
        api.error({
          message: "Send email",
          description: data.message,
        });
      }
    } catch (error) {
      console.log("Error during get reset password token:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="pt-[80px] bg-zinc-100 font-poppins">
      {contextHolder}
      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="bg-white rounded-[10px] shadow-xl p-6 w-4/5 md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 ">
            <div className="font-bold text-2xl text-red-600 text-center">
              Restore Password
            </div>
            <div className="text-[13px] text-center font-light text-black">
              We will send an email to your inbox to reset your password
            </div>
          </div>

          <div className="flex flex-col justify-center w-full items-center gap-5 pt-5">
            <form className="flex flex-col justify-center items-center w-full gap-4">
              <div className="flex flex-col text-white text-[18px] w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="px-3 py-3 w-full border text-black rounded-xl focus:outline-none text-[12px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                onClick={handleSend}
                disabled={isLoading}
                className=" relative bg-red-600 w-max  py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500"
              >
                {isLoading ? "Loading..." : "Send Email"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
