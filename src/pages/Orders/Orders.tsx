import BannerLocation from "../../components/BannerLocation";
import { useEffect, useState } from "react";
import { useOrderStore } from "../../store/useOrderStore";
import Order from "../../types/Order";
import OrderDetails from "../../types/OrderDetails";
import Category from "../../types/Category";
import { Tag, Modal, Rate } from "antd";
import { useReviewStore } from "../../store/useReviewStore";
import { notification } from "antd";
import { Link } from "react-router-dom";

export default function Orders() {
  const options = ["All", "Pending", "Confirmed", "Delivered", "Cancelled"];

  const [order, setOrder] = useState("All");
  const [search, setSearch] = useState("");

  const { orders, loadingFetchOrder, fetchOrder } = useOrderStore();
  const { loadingAddReview, addReviews } = useReviewStore();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const status = order == "All" ? undefined : order.toUpperCase();
    const food_name = search.trim() != "" ? search : undefined;

    fetchOrder({ status, food_name });
  }, [order, search, fetchOrder, loadingAddReview]);

  const [content, setContent] = useState("");
  const [score, setScore] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState("");
  const handleOpenReview = (id: string) => {
    setIsModalOpen(id);
  };
  const handleAddReview = async (id: string) => {
    setIsModalOpen("");
    const result = await addReviews(id, score, content);

    if (result.success) {
      api.success({
        message: "Success",
        description: "Your review has been added successfully.",
      });
      setContent("");
      setScore(5);
    } else {
      api.error({
        message: "Error",
        description: result.message || "Failed to add review.",
      });
    }
    setContent("");
    setScore(5);
    window.scrollTo(0, 0);
  };
  const handleCancel = () => {
    setIsModalOpen("");
  };

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
      <div className="flex flex-col justify-center pb-4  ">
        <Link
          to={`/food/${orderDetail.food_id}`}
          className="flex flex-row gap-3 pb-4 border-b border-zinc-300 justify-between "
        >
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
        </Link>
        <div className="flex flex-row justify-end gap-3 pt-4">
          {!orderDetail.is_reviewed && (
            <button
              onClick={() => handleOpenReview(orderDetail.id)}
              className=" relative bg-red-600 w-[120px] h-[40px] border-transparent text-white text-semibold text-[14px] cursor-pointer before:absolute before:w-1 before:bg-black before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500"
            >
              Add review
            </button>
          )}

          <button className=" relative bg-white transition-all duration-300  w-[120px] h-[40px] text-zinc-600 border border-zinc-300 text-semibold text-[14px] cursor-pointer  before:absolute before:w-1 before:bg-zinc-200 before:h-1 before:top-0 before:left-0 before:-z-5 hover:z-10 hover:before:w-full hover:before:h-full before:transition-all before:duration-500">
            Buy again
          </button>
          <Modal
            open={isModalOpen === orderDetail.id}
            onOk={() => handleAddReview(orderDetail.id)}
            onCancel={handleCancel}
          >
            <div className="flex flex-col gap-2 p-4 font-poppins">
              <div className="text-zinc-500 font-semibold text-[20px] capitalize">
                ADD YOUR REVIEW
              </div>
              <div className="flex flex-row gap-3 pb-4 border-b border-zinc-300 justify-between">
                <div className="flex flex-row gap-3">
                  <img
                    src={orderDetail.food.image[0]}
                    className="w-[60px] h-[60px] object-cover"
                    alt="food"
                  />

                  <div className="flex flex-col gap-1 justify-between break-all xs:break-normal">
                    <div className="font-semibold ">
                      {orderDetail.food.name}
                    </div>
                    <div className="text-zinc-500 flex flex-row text-[12px] gap-1 ">
                      Categories:
                      {renderCategories(orderDetail.food.food_categories)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white shadow-xl text-[14px] flex flex-col gap-5">
                <div className="flex flex-row gap-5 items-center">
                  <div className="font-semibold"> Your Rating: </div>
                  <Rate
                    style={{ fontSize: 15 }}
                    value={score}
                    onChange={(value) => {
                      setScore(value);
                    }}
                  />
                </div>

                <form className="flex flex-col gap-5">
                  <textarea
                    placeholder="Type Your Review"
                    className="border w-full border-zinc-400 p-4 h-[250px] focus:outline-none"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                </form>
              </div>
            </div>
          </Modal>
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
      </div>
    ));
  };
  return (
    <div className="pt-[80px] bg-[#f6fee8] font-poppins  ">
      {contextHolder}
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
