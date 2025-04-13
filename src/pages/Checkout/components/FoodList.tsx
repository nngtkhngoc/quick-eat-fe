import { useCartStore } from "../../../store/useCartStore.js";
import Cart from "../../../types/Cart.js";

export default function FoodList() {
  const { cart } = useCartStore();

  const renderCart = (cart: Cart) => {
    return cart.cart_details.map((c) => (
      <div
        key={c.food_id}
        className="shadow-md p-3 flex flex-row justify-between pr-10"
      >
        <div className="flex flex-row gap-3">
          <img
            src={c.food.image[0]}
            alt="food"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex flex-col justify-around">
            <div className="font-semibold text-red-600">{c.food.name}</div>
            <div className="text-[14px] text-zinc-500">x{c.quantity}</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-white my-10 w-9/10 lg:w-9/10 md:w-2/3 drop-shadow-xl">
      <div className="bg-white p-5">
        <div className="uppercase text-[22px] font-bold relative px-2 w-max z-10 after:w-full after:absolute after:h-1/4 after:bottom-1 after:left-0 after:-z-3 after:bg-[#ece76e] ">
          your food
        </div>

        <div className="flex flex-col gap-3 pt-3">
          {cart && renderCart(cart)}
        </div>
      </div>{" "}
    </div>
  );
}
