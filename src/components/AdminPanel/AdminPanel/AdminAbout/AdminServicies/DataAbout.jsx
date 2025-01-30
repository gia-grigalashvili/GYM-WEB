import React from "react";
import pen from "/public/imgs/pen.png";
import { useState } from "react";
export default function DataAbout({
  ARROW,
  CROSS,
  index,
  handleDelete,
  handleToggle,
  sessions_single,
  sessions_ten,
  sessions_five,
  arrowClick,
  handleOpenEditModal,
  name,
  id,
}) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // const handleOpenEditModal = (id) => {
  //   setSelectedId(id);
  //   setOpenEditModal(true);
  // };

  return (
    <div>
      <div
        key={index}
        className={`w-full mt-7 bg-[#222] ${
          arrowClick.includes(index) ? "rounded-xl" : "rounded-[8.75rem]"
        } px-8 py-6 flex flex-col cursor-pointer transition-all duration-500`}
      >
        <div className="flex items-center justify-between">
          <p className="text-[1.25rem] font-bold text-[#C4C4C4] uppercase">
            {name}
          </p>
          <div className="flex items-center justify-center gap-5">
            <div
              onClick={() => handleToggle(index)}
              className="bg-[#D7FD44] rounded-full w-[3.375rem] h-[3.375rem] flex items-center justify-center"
            >
              <img
                src={ARROW}
                alt="Expand section"
                className={`transition-transform duration-300 w-[1.58206rem] h-[1.58206rem] ${
                  arrowClick.includes(index) ? "-rotate-[90deg]" : "rotate-0"
                }`}
              />
            </div>
            <img
              onClick={() => handleDelete(id)}
              src={CROSS}
              className="w-6 h-6"
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
              <div className="flex flex-col gap-3">
                <p className="text-white text-[1.25rem] font-bold">Price</p>
                <div>
                  <p className="text-[#ABABAB]">
                    Single Session One-on-one training session $
                    {sessions_single}
                  </p>
                  <p className="text-[#ABABAB]">
                    5-Session Package: 5 one-on-one training sessions $
                    {sessions_five}
                  </p>
                  <p className="text-[#ABABAB]">
                    10-Session Package: 10 one-on-one training sessions $
                    {sessions_ten}
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
    </div>
  );
}
