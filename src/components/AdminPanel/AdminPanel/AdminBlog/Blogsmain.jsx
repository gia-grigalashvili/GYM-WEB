import React from "react";
import { useFetchBlogs } from "../../../../hooks/UseFetchBlogs";
import { useState } from "react";
import arrow from "/public/imgs/arrowbig.png";
import croos from "/public/imgs/CROSS.png";
import pen from "/public/imgs/pen.png";
export default function Blogsmain() {
  const [arrowClick, setArrowClick] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const [openBlogEditModal, setOpenBlogEditModal] = useState(false);
  const [openBlogAddModal, setOpenBlogAddModal] = useState(false);
  const [cancel, setCancel] = useState(false);
  const { data: fetchBlogs, isError, isLoading, error } = useFetchBlogs();
  const handleToggle = (index) => {
    setArrowClick((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const handleOpenAddModal = () => {
    setOpenBlogAddModal(true);
    setCancel(true);
  };
  const handleOpenEditModal = (id) => {
    setBlogId(id);
    setOpenBlogEditModal(true);
    setCancel(true);
  };
  const handleDelete = (id) => {
    deleteBlog(id);
  };

  return (
    <div>
      <div className="relative px-[5rem] mt-[5rem] pb-[10.5rem]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-[1.5rem] text-white">
              Blogs
            </p>
            <p className="text-white">Add Blogs you provide</p>
          </div>
          <div
            // onClick={handleOpenAddModal}
            className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer"
          >
            <p className="w-3 h-3 text-[#D7FD44]">+</p>
            <p className="text-[#D7FD44]">Add Blogs</p>
          </div>
        </div>

        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full mt-7"></div>
            ))
          : fetchBlogs?.blogs.map((item, index) => (
              <div
                key={index}
                className={`w-full mt-7 bg-[#222] ${
                  arrowClick.includes(index)
                    ? "rounded-xl"
                    : "rounded-[8.75rem]"
                } px-8 py-6 flex flex-col cursor-pointer transition-all duration-500`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[1.25rem] font-bold text-[#C4C4C4] uppercase">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <div
                      onClick={() => handleToggle(index)}
                      className="bg-[#D7FD44] rounded-full w-[3.375rem] h-[3.375rem] flex items-center justify-center"
                    >
                      <img
                        src={arrow}
                        alt="Expand section"
                        className={`transition-transform duration-300 w-[1.58206rem] h-[1.58206rem] ${
                          arrowClick.includes(index)
                            ? "-rotate-[90deg]"
                            : "rotate-0"
                        }`}
                      />
                    </div>
                    <img
                      onClick={() => handleDelete(item.id)}
                      src={croos}
                      className="w-6 h-6 "
                    />
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    arrowClick.includes(index)
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {arrowClick.includes(index) && (
                    <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between mt-4 transition-all duration-500 ease-in-out">
                      <div className="flex flex-col gap-3 w-[70%]">
                        <p className="text-white text-[1.25rem] font-bold">
                          {item.author}
                        </p>
                        <div>
                          <p className="text-[#ABABAB] ">
                            Single Session One-on-one training session $
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => handleOpenEditModal(item.id)}
                        className="bg-[#D7FD44] w-[3.375rem] h-[3.375rem] rounded-full flex items-center justify-center"
                      >
                        <img
                          className="w-[1.58206rem] h-[1.58206rem]"
                          src={pen}
                          alt="Edit"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

        {openBlogAddModal && cancel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <BlogAddModal cancel={cancel} setCancel={setCancel} />
          </div>
        )}
        {openBlogEditModal && cancel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <BlogEditModal
              cancel={cancel}
              setCancel={setCancel}
              blogId={blogId}
            />
          </div>
        )}
      </div>
    </div>
  );
}
