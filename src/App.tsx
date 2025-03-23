import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage/Home.tsx";
import Layout from "./components/layout.tsx";
import About from "./pages/About/About.tsx";
import FoodDetails from "./pages/FoodDetails/FoodDetails.tsx";
import Shop from "./pages/Shop/Shop.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/food/:id", element: <FoodDetails /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
