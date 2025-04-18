import BannerLocation from "../../components/BannerLocation";
import { useAuthStore } from "../../store/useAuthStore";
import ava from "../../assets/images/av.png";
import { useState, useEffect } from "react";
import { notification } from "antd";

export default function Profile() {
  const { user, loadingUpdate, updateUser } = useAuthStore();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (user) {
      if (user.fullname) {
        setFullname(user.fullname);
      }
      setEmail(user.email);
      setPhone(user.phone_number);
    }
  }, [user]);

  const handleUpdateUser = async () => {
    const response = await updateUser({ fullname, email, phone });

    if (response.success) {
      api.success({
        message: "UPDATE USER",
        description: "Update user successfully!",
      });
    } else {
      api.error({ message: "UPDATE USER", description: response.message });
    }
  };

  const [disabled, setDisabled] = useState(true);
  return (
    <div className="pt-[80px] bg-[#f6fee8] font-poppins">
      <BannerLocation text="profile" />
      {contextHolder}

      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="bg-white w-9/10 flex flex-col justify-center items-center p-4 gap-6 shadow-xl md:w-2/3 lg:w-1/3 rounded-[15px]">
          <div className=" flex flex-col justify-center items-center gap-2">
            <img
              src={ava}
              alt="avatar"
              className="w-23 h-23 rounded-full object-cover"
            />
            <div className="font-bold text-red-600">{user?.username}</div>
          </div>

          <form className="text-[14px] flex flex-col gap-5 px-4">
            <div className="flex flex-row gap-2 items-center grid grid-cols-4 gap-x-15">
              <label htmlFor="fname" className="font-semibold col-span-1">
                Fullname
              </label>
              <input
                type="text"
                value={fullname}
                placeholder="Enter your fullname"
                onChange={(e) => {
                  setFullname(e.target.value);
                  setDisabled(false);
                }}
                className="border py-2 px-2 border-zinc-400 rounded-[10px] col-span-3"
              />
            </div>

            <div className="flex flex-row gap-2 items-center grid grid-cols-4 gap-x-15">
              <label htmlFor="email" className="font-semibold col-span-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setDisabled(false);
                }}
                className="border py-2 px-2 border-zinc-400 rounded-[10px] col-span-3"
              />
            </div>

            <div className="flex flex-row gap-2 items-center grid grid-cols-4 gap-x-15">
              <label htmlFor="phone" className="font-semibold col-span-1">
                Phone
              </label>
              <input
                type="phone"
                value={phone}
                placeholder="Enter your phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setDisabled(false);
                }}
                className="border py-2 px-2 border-zinc-400 rounded-[10px] col-span-3"
              />
            </div>
          </form>
          <div className="flex flex-row justify-center items-center gap-3 pt-2 w-full pb-4">
            <button
              disabled={disabled || loadingUpdate}
              type="submit"
              onClick={handleUpdateUser}
              className={` ${
                disabled || loadingUpdate
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } rounded-[10px] relative bg-red-600 w-[120px] h-[40px] border-transparent text-white text-semibold text-[14px] before:rounded-[10px] before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500`}
            >
              {loadingUpdate ? "Loading..." : "Update"}
            </button>

            <button
              disabled={disabled || loadingUpdate}
              onClick={() => {
                if (user) {
                  setEmail(user?.email);
                  setPhone(user.phone_number);

                  if (user.fullname) {
                    setFullname(user.fullname || "");
                  }
                }
              }}
              className={` ${
                disabled || loadingUpdate
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } rounded-[10px] before:rounded-[10px] relative bg-white transition-all duration-300  w-[120px] h-[40px] text-zinc-600 border border-zinc-300 text-semibold text-[14px] before:absolute before:w-1 before:bg-zinc-200 before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
