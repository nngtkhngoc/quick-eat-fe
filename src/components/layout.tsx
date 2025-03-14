import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import FooterBottom from "./FooterBootom.tsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
}
