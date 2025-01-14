import React from "react";
import Girlsport from "/public/imgs/girsport.png";
import Aboutme from "./Aboutme";
import CeriFIcationComp from "./CeriFIcationComp";
import StoryCarousel from "../SuccessStory/StoryCarousel";
import Footer from "../Fotter/Footer";

export default function Certification() {
  return (
    <div className="flex mt-[50px] justify-center flex-col ">
      <img className="px-[50px] lg:px-[100px]" src={Girlsport} alt="" />
      <Aboutme />
      <CeriFIcationComp />
      <StoryCarousel />
      <Footer />
    </div>
  );
}
