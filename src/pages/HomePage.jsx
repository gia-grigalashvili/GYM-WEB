import Header from "../components/Header/Header";
import Customersinfo from "../components/Header/Customersinfo";

import ServicesSlider from "../components/SliderSerivce/SerivcesSlider";
import AboutME from "../components/about/AboutME";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Customersinfo />
      <ServicesSlider />
      <AboutME />
    </div>
  );
}
