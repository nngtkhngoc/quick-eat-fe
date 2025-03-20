import {
  createBrowserRouter,
  RouterProvider,
  // useLocation,
} from "react-router-dom";
import Home from "./pages/HomePage/Home.tsx";
import SignUp from "./pages/SignUp.tsx";
import Layout from "./components/layout.tsx";
import About from "./pages/About/About.tsx";
import FoodDetails from "./pages/FoodDetails/FoodDetails.tsx";
// import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout bọc Header
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/about", element: <About /> },
      { path: "/food/:id", element: <FoodDetails /> },
    ],
  },
]);

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
