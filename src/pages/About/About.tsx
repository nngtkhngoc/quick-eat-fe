import Awards from "./components/Awards";
import BannerLocation from "../../components/BannerLocation";
import Firm from "./components/Firm";
import Menu from "./components/Menu";
import Partners from "./components/Partners";
import Service from "./components/Service";
import WorkWithUs from "./components/WorkWithUs";

export default function About() {
  return (
    <div className="pt-[80px] bg-[#f7ffe9]">
      <BannerLocation text="About us" />
      <Firm />
      <Service />
      <Menu />
      <Awards />
      <WorkWithUs />
      <Partners />
    </div>
  );
}
