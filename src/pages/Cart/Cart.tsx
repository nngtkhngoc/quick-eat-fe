import { useEffect, useState } from "react";
import BannerLocation from "../../components/BannerLocation";
import { useCartStore } from "../../store/useCartStore";
import CartDetails from "../../types/CartDetails";
import { X } from "lucide-react";

export default function Cart() {
  const { fetchCart, cart, updateCart, cartDetails } = useCartStore();
  const [quantities, setQuantities] = useState<number[]>([]);

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    if (cartDetails.length > 0 && !fetched) {
      const newQuantities = cartDetails.map((cart) => cart.quantity);
      setQuantities(newQuantities);
      setFetched(true);
    }
  }, [cartDetails, fetched]);

  const handleDecrease = (index: number, food_id: string) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] == 0) newQuantities[index] = 0;
    else newQuantities[index]--;
    setQuantities(newQuantities);

    updateCart(food_id, cart?.id || "", newQuantities[index]);
  };

  const handleChangeQuantity = (
    index: number,
    value: string,
    food_id: string
  ) => {
    const newQuantities = [...quantities];
    const parsedValue = Number(value);
    newQuantities[index] = parsedValue;
    setQuantities(newQuantities);

    updateCart(food_id, cart?.id || "", newQuantities[index]);
  };

  const handleIncrease = (index: number, food_id: string) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);

    updateCart(food_id, cart?.id || "", newQuantities[index]);
  };

  const renderCart = (carts: CartDetails[]) => {
    return carts.map((cart, index) => (
      <div
        className="p-4 border-b border-dashed flex flex-row gap-3  border-zinc-500 "
        key={index}
      >
        <img
          src={cart.food.image[0]}
          alt="food"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div className="w-full flex flex-col justify-center gap-2">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="font-semibold">{cart.food.name}</div>
            <X className="w-4 h-4 text-red-600" />
          </div>

          <div className="flex flex-row justify-between w-full items-end">
            <div className="text-[14px] text-red-600 font-semibold">
              ${cart.food.price}
            </div>
            <div>
              <button
                onClick={() => handleDecrease(index, cart.food_id)}
                className="border-l border-t border-b border-red-600 p-1 bg-white  text-[12px] cursor-pointer lg:text-[15px]"
              >
                -
              </button>
              <input
                className=" w-[45px] py-1 border-t border-b border-red-600 bg-white text-center text-[12px] focus:outline-none text-red-600 lg:text-[15px]"
                value={quantities[index]}
                type="text"
                onChange={(e) => {
                  handleChangeQuantity(index, e.target.value, cart.food_id);
                }}
              />

              <button
                onClick={() => {
                  handleIncrease(index, cart.food_id);
                }}
                className="border-r  border-t border-b border-red-600 p-1 bg-white cursor-pointer  text-[12px] lg:text-[15px]"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="pt-[80px] bg-[#f7ffe9] pb-10 font-poppins">
      <BannerLocation text="cart" />

      <div className="w-full flex flex-col justify-center items-center pt-5 ">
        {cart && (
          <div className="w-9/10 lg:w-1/3 bg-white drop-shadow-xl flex flex-col gap-4 pb-4 px-1">
            {renderCart(cartDetails)}

            <div className="p-5">
              <div className="border-dashed border text-[13px] border-zinc-400 w-full p-2 flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <div className="text-zinc-500">
                    Total of product pricing:{" "}
                  </div>
                  <div className="font-semibold">${cart.total_price}</div>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="text-zinc-500">
                    Estimated shipping charges:
                  </div>
                  <div className="font-semibold"> $30 </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="text-zinc-500">Total:</div>
                  <div className="font-semibold"> ${cart.total_price + 30}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center w-full h-full pb-2">
              <button className=" relative bg-red-600 w-max py-3 px-3 font-poppins border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500">
                Proceed to checkout{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
