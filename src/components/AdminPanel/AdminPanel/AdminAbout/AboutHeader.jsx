import React from "react";
import { useFetchAbout } from "../../../../hooks/useFetchAbout";
export default function AboutHeader() {
  const { data, isLoading, isError, error: aboutError } = useFetchAbout();
  const Image = data?.about?.at(-1)?.image;
  return (
    <div className="felx flex-col">
      <div className="flex flex-col my-[3.25rem]">
        <h1 className="text-[1.875rem] font-bold text-white">About Me</h1>
        <p className="text-[1rem] font-medium text-white">
          Add info for your clients
        </p>
      </div>
      <form
        //   onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[1.81rem]"
      >
        <p className="text-[1.5rem] font-medium text-white">
          Your Profile Picture
        </p>
        <div className="flex items-center  gap-6">
          <img
            className="rounded-[50%] w-[5rem] h-[5rem]"
            src={Image || ""}
            alt="Profile"
          />

          <div className="flex gap-4">
            <div className="border-[1px] border-[#D7FD44] bg-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer  text-black">
              <p className="w-3 h-3">+</p>
              <p className="text-[16px] font-bold ">Upload New</p>
            </div>

            <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer  text-black">
              <h1 className="text-[#D7FD44] font-bold ">
                Remove Profile Picture
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center  gap-6">
          <button
            type="submit"
            className="flex px-10 bg-[#D7FD44]  rounded-3xl  p-[10px] text-center"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
