import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import FooterBottom from "./FooterBottom.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import AutoScrollToTop from "./AutoScrollToTop.tsx";

export default function Layout() {
  return (
    <div>
      <AutoScrollToTop />
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
      <FooterBottom />
    </div>
  );
}
