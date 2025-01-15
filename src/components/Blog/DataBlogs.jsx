import React from "react";

export default function DataBlogs({ author, title, description, id }) {
  return (
    <div>
      <div key={id} className="border-b border-b-[#737373] pb-6 mb-6">
        <div className=" flex items-center gap-4 ">
          <p className="text-[#D7FD44]  text-[1rem] leading-[24px]">{author}</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold py-5 text-white">{title}</h1>
        </div>
        <p className="leading-[24px] text-white">{description}</p>
      </div>
    </div>
  );
}
