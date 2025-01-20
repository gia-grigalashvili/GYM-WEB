import React from "react";
import AboutHeader from "./AboutHeader";
import Sharestory from "./Sharestory";

export default function AboutMain() {
  return (
    <div className="flex flex-col gap-[50px]">
      <AboutHeader />
      <Sharestory />
    </div>
  );
}
