import BannerLocation from "../../components/BannerLocation";
import Payment from "./components/Payment";
import BillingInfor from "./components/BillingInfor";
import FoodList from "./components/FoodList";
import { useOrderStore } from "../../store/useOrderStore";
import { useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export default function Checkout() {
  const [fullname, setFullname] = useState("");
  const [phone_number, setPhone] = useState("");
  const [payment, setPayment] = useState("COD");
  const [detailedAddress, setDetailedAddress] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const nav = useNavigate();

  const { fetchCart } = useCartStore();
  const { createOrder, loadingCreateOrder } = useOrderStore();
  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createOrder(
      fullname,
      phone_number,
      payment,
      detailedAddress
    );

    if (result.success) {
      api.success({
        message: "Success",
        description: "Order successfully!",
      });
      nav("/orders");
      fetchCart();
    } else {
      api.error({
        message: "Error",
        description: result.message || "Failed to order.",
      });
    }
  };

  return (
    <div className="pt-[80px]  bg-[#f6fee8] font-poppins pb-5">
      {contextHolder}
      <BannerLocation text="Checkout & Payment" />
      <form className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-3  ">
          <div className="w-full flex flex-col justify-center items-center lg:col-span-2  lg:place-self-end-safe">
            <BillingInfor
              setDetailedAddress={setDetailedAddress}
              setFullname={setFullname}
              setPhone={setPhone}
            />
            <Payment payment={payment} setPayment={setPayment} />
          </div>

          <div className="w-full flex flex-col justify-center items-center lg:col-span-1  lg:place-self-start">
            <FoodList />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleCreateOrder}
          className={`${
            loadingCreateOrder ? "disabled" : ""
          } relative bg-red-600 w-max lg:text-[18px] py-3 px-9 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500`}
        >
          {loadingCreateOrder ? "Loading..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
