import React from "react";
import { useFetchAbout } from "../../hooks/useFetchAbout";
import BanerSkeleton from "../skeleton/BanerSkeleton";
export default function BlogAuthor() {
  const { data: getAbout, isLoading, isError, error } = useFetchAbout();
  if (isLoading) {
    return <BanerSkeleton />;
  }
  if (error) {
    return (
      <div className="text-red-500 text-center p-2">Error: {error.message}</div>
    );
  }
  let AboutImage = getAbout.about.at(-1)?.image;
  return (
    <div className="text-white min-w-[140px]">
      <span className="text-white text-[20px]">Contributor</span>
      <div className="flex gap-3 border-b border-b-[#C4C4C4] pt-4 pb-2">
        <img
          className="w-[90px] h-[90px] object-cover rounded-full"
          src={AboutImage}
        />
        <div className="flex flex-col text-[18px]">
          <span>Tuna</span>
          <span className="text-[15px] font-light w-[100px] text-[#C4C4C4]  ">
            1 Month ago
          </span>
        </div>
      </div>
      <div className="mt-2 text-[#C4C4C4] font-light text-sm">
        <span className="text-[12px]">Reading time</span>
      </div>
    </div>
  );
}
