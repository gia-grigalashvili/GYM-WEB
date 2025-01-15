import React from "react";
import BlogHeader from "./BlogHeader";
import BlogAuthor from "./BlogAuthor";
export default function Blog() {
  return (
    <section className="bg-[#121212] nunito ">
      <BlogHeader />
      <div className="flex flex-col w-[90%] items-start mx-auto md:flex-row lg:flex-row lg:gap-[12rem] gap-6">
        <BlogAuthor />
      </div>
    </section>
  );
}
