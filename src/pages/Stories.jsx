import React from "react";
import Navigation from "../components/Header/Nanvigation";
import AboutME from "../components/about/AboutME";
import Aboutme from "../components/storiespage/Aboutme";
import Certification from "../components/storiespage/Certification";

export default function Stories() {
  return (
    <section className="pl-[50px] pr-[50px] justify-center bg-[#121212] min-h-screen">
      <Navigation />
      <Certification />
    </section>
  );
}
