import { useState } from "react";
export default function Payment() {
  const [payment, setPayment] = useState("cod");

  return (
    <div className="bg-white mb-8 w-9/10 lg:w-1/2 md:w-2/3 drop-shadow-xl">
      <div className="bg-white p-5">
        <div className="uppercase text-[22px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e] ">
          Payment
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] flex flex-row items-center gap-2 pt-3">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={payment === "bank"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <label className="container">Direct Bank Transfer</label>
            </div>

            <div
              className={`w-full p-3 bg-red-600 text-white text-[11px] ${
                payment === "bank" ? "block" : "hidden"
              }`}
            >
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[13px] flex flex-row items-center gap-2 pt-3">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={payment === "cod"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <label className="container">Cash On Delivery</label>
            </div>

            <div
              className={`w-full p-3 bg-red-600 text-white text-[11px] ${
                payment === "cod" ? "block" : "hidden"
              }`}
            >
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
