import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage/Home.tsx";
import SignUp from "./pages/SignUp.tsx";
import Layout from "./components/layout.tsx";
import About from "./pages/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout bọc Header
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
