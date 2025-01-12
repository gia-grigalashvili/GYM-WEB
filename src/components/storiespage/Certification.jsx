import React from "react";
import Girlsport from "/public/imgs/girsport.png";
import Aboutme from "./Aboutme";
import CeriFIcationComp from "./CeriFIcationComp";
export default function Certification() {
  return (
    <div className="flex mt-[50px] justify-center flex-col items-center">
      <img src={Girlsport} alt="" />
      <Aboutme />
      <CeriFIcationComp />
    </div>
  );
}
