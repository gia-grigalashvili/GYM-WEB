import React from "react";
import BlogHeader from "./BlogHeader";
import BlogAuthor from "./BlogAuthor";
import TextBlog from "./TextBlog";

import ServicesSlider from "../SliderSerivce/SerivcesSlider";
import Footer from "../Fotter/Footer";
export default function Blog() {
  return (
    <section className="bg-[#121212]  ">
      <BlogHeader />
      <div className="flex flex-col w-[90%] items-start mx-auto md:flex-row lg:flex-row lg:gap-[12rem] gap-6">
        <BlogAuthor />
        <TextBlog />
      </div>
      <ServicesSlider />
      <Footer />
    </section>
  );
}
