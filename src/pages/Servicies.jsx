import React from "react";
import Navigation from "../components/Header/Nanvigation";
import ServicesSlider from "../components/SliderSerivce/SerivcesSlider";
import Prices from "../components/Prices/Prices";
import Footer from "../components/Fotter/Footer";

export default function Servicies() {
  return (
    <div>
      <Navigation />
      <ServicesSlider />
      <Prices />
      <Footer />
    </div>
  );
}
