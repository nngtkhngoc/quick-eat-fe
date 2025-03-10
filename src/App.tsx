import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/sign-up", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
