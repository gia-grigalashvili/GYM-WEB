import React from "react";
import Navigation from "../components/Header/Nanvigation";

import Certification from "../components/storiespage/Certification";

export default function Stories() {
  return (
    <section className=" bg-[#121212] min-h-screen">
      <Navigation />
      <Certification />
    </section>
  );
}
