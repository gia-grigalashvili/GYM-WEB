import React from "react";
// import { useFetchAbout } from "../../../../hooks/useFetchAbout";
import { from } from "form-data";

export default function Sharestory({ aboutFormAction, useFetchAbout }) {
  const { data, isLoading, error, isError } = useFetchAbout();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const { story, experience } = data.about[0];
  return (
    <from onSubmit={aboutFormAction}>
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col w-full gap-3">
          <p className="text-white">Share your story</p>
          <textarea
            className="placeholder:w-[34rem] w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
            placeholder="Hi, I'm Tuna, a personal trainer dedicated to helping people transform through fitness. My journey began when I overcame my own struggles with body confidence and health. Now, I use my experience to empower others to achieve their fitness goals..."
            name="story"
            cols="30"
            rows="7"
            defaultValue={story}
          ></textarea>
        </div>
        <div>
          <p className="text-white">Experience</p>
          <input
            type="number"
            name="experience"
            placeholder="add your experience"
            className="placeholder:w-[34rem] w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
            defaultValue={experience}
          />
        </div>
      </div>
    </from>
  );
}
