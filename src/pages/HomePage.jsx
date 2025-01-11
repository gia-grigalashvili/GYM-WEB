import Header from "../components/Header/Header";
import Customersinfo from "../components/Header/Customersinfo";

import ServicesSlider from "../components/SliderSerivce/SerivcesSlider";
import AboutME from "../components/about/AboutME";
import StoryCarousel from "../components/SuccessStory/StoryCarousel";
import Contact from "../components/Contact/Contact";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Customersinfo />
      <ServicesSlider />
      <AboutME />
      <StoryCarousel />
      <Contact />
    </div>
  );
}
