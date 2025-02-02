import React from "react";
import { useFetchBlogs } from "../../../../hooks/UseFetchBlogs";
import { useState } from "react";
import arrow from "/public/imgs/arrowbig.png";
import croos from "/public/imgs/CROSS.png";
import pen from "/public/imgs/pen.png";
import { useDeleteBlogs } from "../../../../hooks/useDeleteBlogs";
import Blogadd from "./Blogadd";
import FetchBlogs from "./FetchBlogs";
import BlogEdit from "./BlogEdit";
export default function Blogsmain() {
  const [blogId, setBlogId] = useState(null);
  const [openBlogEditModal, setOpenBlogEditModal] = useState(false);
  const [openBlogAddModal, setOpenBlogAddModal] = useState(false);
  const [cancel, setCancel] = useState(false);
  const { mutate: deleteBlog } = useDeleteBlogs();
  const { data: fetchBlogs, isLoading, error } = useFetchBlogs();
  const [arrowClick, setArrowClick] = useState([]);
  //xuravs add-is modals
  const handleClosemModal = () => {
    setOpenBlogAddModal((prev) => !prev);
  };
  const handleCloseEdit = () => {
    setOpenBlogEditModal((prev) => !prev);
  };
  const handleToggle = (index) => {
    setArrowClick((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  //xsnis
  const handleOpenAddModal = () => {
    setOpenBlogAddModal((prev) => !prev);
  };
  const handleOpenEditModal = (id) => {
    setBlogId(id);
    setOpenBlogEditModal((prev) => !prev);
  };
  const handleDelete = (id) => {
    deleteBlog(id);
  };

  return (
    <div>
      <div className="relative px-[2rem] lg:[5rem] mt-[5rem] pb-[10.5rem]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-[1.5rem] text-white">
              Blogs
            </p>
            <p className="text-white">Add Blogs you provide</p>
          </div>
          <div
            onClick={handleOpenAddModal}
            className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-5 lg:px-10 py-2 rounded-3xl cursor-pointer"
          >
            <p className="w-3 h-3 text-[#D7FD44]">+</p>
            <p className="text-[#D7FD44]">Add Blogs</p>
          </div>
        </div>

        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full mt-7"></div>
            ))
          : fetchBlogs?.blogs.map((item) => (
              <FetchBlogs
                key={item.id}
                description={item.description}
                title={item.title}
                id={item.id}
                author={item.author}
                pen={pen}
                croos={croos}
                arrowClick={arrowClick}
                arrow={arrow}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                handleOpenEditModal={handleOpenEditModal}
              />
            ))}

        {openBlogAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Blogadd handleClosemModal={handleClosemModal} />
          </div>
        )}
        {openBlogEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <BlogEdit
              blogId={blogId}
              handleCloseEdit={handleCloseEdit}
              setCancel={setCancel}
            />
          </div>
        )}
      </div>
    </div>
  );
}
