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
    ],
  },
]);

function App() {
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
