import React from "react";
import Logo from "/public/imgs/Frame 61.png";
import { useFetchAbout } from "../../../hooks/useFetchAbout";
export default function AdminHeader() {
  const { data } = useFetchAbout();

  const Image = data?.about?.at(-1)?.image;
  return (
    <div className="flex justify-between  py-10 px-10">
      <div className="flex gap-4">
        <img src={Logo} alt="Muscle logo" />
      </div>

      <div className="flex  gap-6">
        <div className="w-10 h-10 rounded-full">
          <img
            className="w-10 h-10 rounded-full"
            src={Image}
            alt="About avatar"
          />
        </div>
      </div>
    </div>
  );
}
