import React from "react";
import AboutHeader from "./AboutHeader";
import Sharestory from "./Sharestory";
import Certification from "./Certification";

export default function AboutMain() {
  return (
    <div className="flex flex-col gap-[50px]">
      <AboutHeader />
      {/* <Sharestory /> */}
      <Certification />
    </div>
  );
}
