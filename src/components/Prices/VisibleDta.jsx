import React, { useState } from "react";

export default function VisibleDta({
  index,
  name,
  arrowbig,
  sessions_single,
  sessions_five,
  sessions_ten,
}) {
  const [localArrowClick, setLocalArrowClick] = useState([]);

  const handleToggle = (index) => {
    if (localArrowClick.includes(index)) {
      setLocalArrowClick(localArrowClick.filter((i) => i !== index));
    } else {
      setLocalArrowClick([...localArrowClick, index]);
    }
  };

  return (
    <div>
      <div key={index} className="w-full mt-7">
        <div
          className="bg-[#222] px-8 py-6 flex items-center cursor-pointer justify-between rounded-[8.75rem]"
          onClick={() => handleToggle(index)}
        >
          <p className="text-[1.25rem] font-bold uppercase text-center text-[#C4C4C4]">
            {name}
          </p>
          <div className="bg-[#D7FD44] rounded-full w-[5rem] h-[5rem] flex items-center justify-center cursor-pointer transform scale-100 hover:scale-125 transition-transform duration-300">
            <img
              src={arrowbig}
              alt="Expand section"
              className={`transition-transform duration-300 ${
                localArrowClick.includes(index) ? "rotate-[49deg]" : "rotate-0"
              }`}
            />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            localArrowClick.includes(index)
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
          style={{ transformOrigin: "top" }}
        >
          <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around md:py-8 lg:py-8 bg-[#333] p-4 pl-8 mt-4 text-white border border-[#D7FD44] rounded-[8.75rem] transition-all duration-500 ease-in-out">
            <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
              <b className="text-[#D7FD44] font-extrabold">X</b> 1 session - $
              {sessions_single}
            </p>
            <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
              <b className="text-[#D7FD44] font-extrabold">X</b> 5 sessions - $
              {sessions_five}
            </p>
            <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
              <b className="text-[#D7FD44] font-extrabold">X</b> 10 sessions - $
              {sessions_ten}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
