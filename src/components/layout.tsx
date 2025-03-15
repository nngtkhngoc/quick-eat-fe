import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import FooterBottom from "./FooterBootom.tsx";
import ScrollToTop from "./ScrollToTop.tsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
      <FooterBottom />
    </div>
  );
}
