import BannerLocation from "../../components/BannerLocation";
import { useEffect, useState } from "react";
import { useOrderStore } from "../../store/useOrderStore";
import Order from "../../types/Order";
import OrderDetails from "../../types/OrderDetails";
import Category from "../../types/Category";
import { Tag } from "antd";
export default function Orders() {
  const options = ["All", "Pending", "Confirmed", "Delivered", "Cancelled"];

  const [order, setOrder] = useState("All");
  const [search, setSearch] = useState("");

  const { orders, loadingFetchOrder, fetchOrder } = useOrderStore();

  useEffect(() => {
    const status = order == "All" ? undefined : order.toUpperCase();
    const food_name = search.trim() != "" ? search : undefined;

    fetchOrder({ status, food_name });
  }, [order, search, fetchOrder]);

  const renderOptions = (options: string[]) => {
    return options.map((option) => (
      <div
        key={option}
        className={`text-medium text-[14px] hover:text-red-600 cursor-pointer transition-all duration-300 border-b-2 w-full text-center py-3 px-5 ${
          order !== option
            ? "border-zinc-300 "
            : "border-red-600 text-red-600  "
        }`}
        onClick={() => setOrder(option)}
      >
        {option}
      </div>
    ));
  };

  const renderCategories = (categories: Category[]) => {
    return categories.map((category, index) => (
      <div className="text-[12px] flex flex-row" key={category.category.name}>
        {category.category.name}{" "}
        {index + 1 !== categories.length && <div>, </div>}
      </div>
    ));
  };

  const renderOrderDetails = (orderDetails: OrderDetails[]) => {
    return orderDetails.map((orderDetail) => (
      <div className="flex flex-row gap-3 pb-4 border-b border-zinc-300 justify-between">
        <div className="flex flex-row gap-3">
          <img
            src={orderDetail.food.image[0]}
            className="w-[80px] h-[80px] object-cover"
            alt="food"
          />

          <div className="flex flex-col gap-1 justify-between break-all xs:break-normal">
            <div className="font-semibold ">{orderDetail.food.name}</div>
            <div className="text-zinc-500 flex flex-row text-[12px] gap-1 ">
              Categories:{renderCategories(orderDetail.food.food_categories)}
            </div>
            <div className="text-[13px]">x{orderDetail.quantity}</div>
          </div>
        </div>

        <div className="text-[12px] font-semibold text-red-600  ">
          ${orderDetail.total_price}
        </div>
      </div>
    ));
  };

  const renderOrders = (orders: Order[]) => {
    return orders.map((order) => (
      <div className="bg-white p-5 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="text-red-600 text-lg font-bold border-b border-zinc-300 pb-1">
            {order.orderedAt.split("T")[0]}
          </div>
          <div>
            <Tag
              color={
                order.status === "PENDING"
                  ? "gold"
                  : order.status === "CONFIRMED"
                  ? "blue"
                  : order.status === "DELIVERED"
                  ? "green"
                  : "red"
              }
            >
              {order.status.toLowerCase()}
            </Tag>{" "}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          {renderOrderDetails(order.order_details)}
        </div>

        <div className="flex flex-row justify-end gap-3">
          <button className=" relative bg-red-600 w-[120px] h-[40px] border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500">
            Add review
          </button>
          <button className=" relative bg-white transition-all duration-300  w-[120px] h-[40px] text-zinc-600 border border-zinc-300 text-semibold text-[14px] cursor-pointer  before:absolute before:w-1 before:bg-zinc-200 before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500">
            Buy again
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div className="pt-[80px] bg-[#f6fee8] font-poppins  ">
      <BannerLocation text="Orders" />

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="p-6 w-9/10 lg:w-1/2 flex flex-col gap-5">
          <div className="w-full bg-white shadow-md flex flex-row justify-around overflow-x-scroll no-scrollbar">
            {renderOptions(options)}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search order by food name"
              className="bg-white border-1 py-3 border-red-300 p-2 text-[12px] w-full focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            {orders && !loadingFetchOrder && renderOrders(orders)}
            {orders.length === 0 && !loadingFetchOrder && (
              <div>No order is found</div>
            )}
            {loadingFetchOrder && <div className="text-[13px]">Loading...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
