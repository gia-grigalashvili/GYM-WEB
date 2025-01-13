import { useFetchAbout } from "../../hooks/useFetchAbout";
import arrows from "/public/imgs/arrow1.png";
import star from "/public/imgs/Star1.png";
import React from "react";

export default function Aboutme() {
  const { data, error, isLoading, isError } = useFetchAbout();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const { story, experience } = data?.about[0];
  const yearExp = experience;

  // დაყავით story სამ ნაწილად slice-ის გამოყენებით
  const words = story.split(" ");
  const part1 = words.slice(0, Math.ceil(words.length / 3)).join(" ");
  const part2 = words
    .slice(Math.ceil(words.length / 3), Math.ceil((words.length * 2) / 3))
    .join(" ");
  const part3 = words.slice(Math.ceil((words.length * 2) / 3)).join(" ");

  return (
    <div className="flex flex-col pl-[50px] pr-[50px] mt-[100px] gap-5 text-[#C4C4C4] leading-[27.2px] text-[18px]">
      <div className="flex gap-3 items-center">
        <img src={arrows} className="w-[80px]" alt="Arrows Icon" />
        <h3
          style={{
            background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[16px] font-bold"
        >
          ABOUT ME
        </h3>
      </div>
      <div className="flex flex-col gap-12 md:justify-between md:items-center md:flex-row">
        <p className="text-white flex flex-col gap-3 md:w-[60%]">
          <span>{part1}</span>
          <span>{part2}</span>
          <span>{part3}</span>
        </p>
        <div className="flex flex-col gap-4 justify-center text-center items-center">
          <div className="relative flex justify-center items-center">
            <img
              src={star}
              className="lg:w-[12.5rem] lg:h-[12.5rem] w-[5rem] h-[5rem]"
              alt="Star Icon"
            />
            <span className="absolute text-[1.5rem] lg:text-[2.5rem] font-bold text-black">
              {/* {yearExp}+ */}
            </span>
          </div>
          <span className="text-white">
            {yearExp} Years Of Training Experience
          </span>
        </div>
      </div>
    </div>
  );
}
