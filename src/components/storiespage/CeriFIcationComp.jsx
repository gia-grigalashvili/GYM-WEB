import React from "react";
import { useCertification } from "../../hooks/useCertification ";
import BanerSkeleton from "../skeleton/BanerSkeleton";
import star from "/public/imgs/Star1.png";
import corekct from "/public/imgs/coreckt.png";
export default function CertificationComp() {
  const {
    data: certifications,
    isError,
    isLoading,
    error,
  } = useCertification();

  if (isLoading) {
    return <BanerSkeleton />;
  }
  const certification = certifications?.data;

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="text-white md:grid-cols-2 md:grid bg-[#121212] flex flex-col gap-10 mb-[5rem]">
      {certification.map((certification, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-[#323232] hover:bg-[#3e3e3e] p-6 rounded-lg shadow-xl cursor-pointer transform scale-100 hover:scale-105 transition-transform duration-300"
        >
          <span className="flex text-[#FFFFFF] leading-[21.8px] items-start text-[14px] gap-2 w-[50%]">
            <div className="relative flex items-center justify-center">
              <div className="w-10">
                <img src={star} className="w-10 h-10" alt="Star Icon" />
              </div>
              <img
                src={corekct}
                className="absolute w-[0.94213rem] h-[0.94213rem]"
                alt="Check Icon"
              />
            </div>
            {certification.name}
          </span>
          <div className="flex flex-col">
            <p>
              <b className="text-green-300">Start</b> {certification.startDate}
            </p>
            <p>
              <b className="text-red-300">End</b> {certification.endDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
