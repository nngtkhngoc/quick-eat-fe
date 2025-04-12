import BannerLocation from "../../components/BannerLocation";
import Payment from "./components/Payment";
import BillingInfor from "./components/BillingInfor";
import Button from "../../components/Button";
export default function Checkout() {
  return (
    <div className="pt-[80px]  bg-[#f6fee8] font-poppins pb-5">
      <BannerLocation text="Checkout & Payment" />
      <div className="w-full flex flex-col justify-center items-center">
        <BillingInfor />
        <Payment />

        <Button text="Place Order" />
      </div>
    </div>
  );
}
