import React from "react";
import Logo from "/public/imgs/Frame 61.png";
import { useNavigate } from "react-router-dom";
import { useFetchAbout } from "../../../hooks/useFetchAbout";
export default function AdminHeader() {
  const { data } = useFetchAbout();
  const navigate = useNavigate();
  const Image = data?.about?.at(-1)?.image;
  const onSubmit = async () => {
    sessionStorage.removeItem("adminLogin", true);

    navigate("/admin");
    window.location.reload();
  };
  return (
    <div className="flex justify-between  py-10 px-10">
      <div className="flex gap-4">
        <img src={Logo} alt="Muscle logo" />
      </div>

      <div className="flex items-center  gap-6">
        <div className="w-10 flex  h-10 rounded-full">
          <img
            className="w-10 h-10 rounded-full"
            src={Image}
            alt="About avatar"
          />
        </div>
        <button
          className="w-[100px] rounded-[70%] bg-[#ff1515] p-2"
          onClick={onSubmit}
        >
          log out
        </button>
      </div>
    </div>
  );
}
