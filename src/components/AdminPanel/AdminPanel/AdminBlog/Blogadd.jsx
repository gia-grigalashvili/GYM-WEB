import React, { useState } from "react";

import useAddBlogs from "../../../../hooks/useAddBlogs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cross from "/public/imgs/CROSS.png";
export default function Blogadd({ handleClosemModal }) {
  const { addBlogs } = useAddBlogs();
  const closeModal = () => {
    handleClosemModal();
  };
  const submitBlogAdd = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = {
      author: formData.get("author"),
      title: formData.get("title"),
      description: formData.get("description"),
    };

    if (Object.values(formValues).some((value) => !value)) {
      toast.error("All fields are required!");
      return;
    }

    try {
      addBlogs(formValues);
      handleClosemModal();
    } catch (error) {
      console.error("Failed to add blog:", error);
    }
  };
  return (
    <div>
      <div className="p-[1.56rem] lg:px-[2.56rem] bg-[#323232] flex items-center justify-center w-[20rem] lg:w-[55rem] rounded-[1.25rem]">
        <div className="px-[1.375rem] bg-black rounded-lg w-full py-[2.56rem]">
          <div className="flex w-full items-center justify-between pb-[2.56rem]">
            <div className="flex flex-col gap-4">
              <p className="uppercase font-bold text-[1.5rem] text-white">
                Add Blogs
              </p>
              <p className="text-white">Add Blogs you provide</p>
            </div>
            <div
              onClick={closeModal}
              className="bg-[#D7FD44] flex py-4 px-4 items-center justify-center rounded-full cursor-pointer"
            >
              <img src={cross} alt="Close" />
            </div>
          </div>
          <form onSubmit={submitBlogAdd}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <h2 className="text-white">Input Blogs Title</h2>
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="Title..."
                  name="title"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <h2 className="text-white">Input Name</h2>
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="Lionel Messi..."
                  name="author"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <h2 className="text-white">Input Description</h2>
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="Description..."
                  name="description"
                />
              </div>
            </div>
            <button className="flex items-center justify-center mt-[3.81rem] ">
              <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer">
                <p className="w-3 h-3 text-[#D7FD44]">+</p>
                <p className="text-[#D7FD44]">Add Blog</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
