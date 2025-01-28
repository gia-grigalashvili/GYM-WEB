import React from "react";

export default function FetchBlogs({
  index,
  title,
  id,
  description,
  author,
  pen,
  croos,
  arrowClick,
  arrow,
  handleDelete,
  handleToggle,
}) {
  return (
    <div
      key={index}
      className={`w-full mt-7 bg-[#222] ${
        arrowClick.includes(index) ? "rounded-xl" : "rounded-[8.75rem]"
      } px-8 py-6 flex flex-col cursor-pointer transition-all duration-500`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[1.25rem] font-bold text-[#C4C4C4] uppercase">
          {title}
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
                arrowClick.includes(index) ? "-rotate-[90deg]" : "rotate-0"
              }`}
            />
          </div>
          <img
            onClick={() => handleDelete(id)}
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
              <p className="text-white text-[1.25rem] font-bold">{author}</p>
              <div>
                <p className="text-[#ABABAB] ">
                  Single Session One-on-one training session ${description}
                </p>
              </div>
            </div>
            <div
              onClick={() => handleOpenEditModal(id)}
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
  );
}
