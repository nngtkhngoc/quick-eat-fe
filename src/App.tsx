import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage/Home.tsx";
import Layout from "./components/layout.tsx";
import About from "./pages/About/About.tsx";
import FoodDetails from "./pages/FoodDetails/FoodDetails.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import ChefList from "./pages/ChefList/ChefList.tsx";
import ChefDetails from "./pages/ChefDetails/ChefDetails.tsx";
import Authentication from "./pages/Authentication/Authentication.tsx";
import { useAuthStore } from "./store/useAuthStore.tsx";
import { useEffect } from "react";
import Cart from "./pages/Cart/Cart.tsx";
import { useCartStore } from "./store/useCartStore.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import Orders from "./pages/Orders/Orders.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import ResetPasswordToken from "./pages/ResetPasswordToken/ResetPasswordToken.tsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/food/:id", element: <FoodDetails /> },
      { path: "/shop", element: <Shop /> },
      { path: "/chef", element: <ChefList /> },
      { path: "/chef/:id", element: <ChefDetails /> },
      { path: "/auth", element: <Authentication /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/orders", element: <Orders /> },
      { path: "/profile", element: <Profile /> },
      { path: "/reset-password-token", element: <ResetPasswordToken /> },
      {
        path: "/reset-password/:reset_password_token",
        element: <ResetPassword />,
      },
    ],
  },
]);

function App() {
  const { fetchUser } = useAuthStore();
  const { fetchCart } = useCartStore();

  useEffect(() => {
    fetchUser();
    fetchCart();
  }, [fetchUser, fetchCart]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
