import React, { useContext } from "react";
// import Cancel from "/cancel.svg";
import { Cross } from "hamburger-react";
import useAddService from "../../../../../hooks/useAddSerivices";
import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Servicesaddd() {
  const { addServicesInfo } = useAddService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addServicesInfo({
        name: data.serviceText,
        sessions_single: data.singleSessionPrice,
        sessions_five: data.fiveSessionPrice,
        sessions_ten: data.tenSessionPrice,
      });
      reset();

      toast.success("Services added successfully!");
    } catch (error) {
      toast.error("Failed to add Services!");
    }
  };

  return (
    <div className="p-[2.56rem] bg-[#323232] flex items-center justify-center w-[55rem] rounded-[1.25rem]">
      <div className="px-[1.375rem] bg-black rounded-lg w-full py-[2.56rem]">
        <div className="flex w-full items-center justify-between pb-[2.56rem]">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-[1.5rem] text-white">
              Services
            </p>
            <p className="text-white">Add services you provide</p>
          </div>
          <div
            className="bg-[#D7FD44] flex py-4 px-4 items-center justify-center rounded-full cursor-pointer"
            // onClick={closeModal}
          >
            <img src={Cross} alt="Close" />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h2 className="text-white">Input Service Title</h2>
            </div>
            <div className="flex flex-col ml-[1.44rem]">
              <input
                type="text"
                className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                placeholder="Weight Loss"
                {...register("serviceText", {
                  required: "Service title is required",
                })}
              />
              {errors.serviceText && (
                <p className="text-red-500 mt-1">
                  {errors.serviceText.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-9">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <h2 className="text-white">Session Prices</h2>
              </div>
            </div>

            <div className="flex gap-4 pl-5">
              <div className="flex flex-col mt-3 gap-2">
                <label className="text-white">Single Session Price</label>
                <input
                  type="number"
                  className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="10$"
                  {...register("singleSessionPrice", {
                    required: "Single session price is required",
                  })}
                />
                {errors.singleSessionPrice && (
                  <p className="text-red-500 mt-1">
                    {errors.singleSessionPrice.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label className="text-white">5-Session Package Price</label>
                <input
                  type="number"
                  className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="50$"
                  {...register("fiveSessionPrice", {
                    required: "5-session package price is required",
                  })}
                />
                {errors.fiveSessionPrice && (
                  <p className="text-red-500 mt-1">
                    {errors.fiveSessionPrice.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label className="text-white">10-Session Package Price</label>
                <input
                  type="number"
                  className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="100$"
                  {...register("tenSessionPrice", {
                    required: "10-session package price is required",
                  })}
                />
                {errors.tenSessionPrice && (
                  <p className="text-red-500 mt-1">
                    {errors.tenSessionPrice.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-[3.81rem]">
            <button
              type="submit"
              className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer"
            >
              <p className="w-3 h-3 text-[#D7FD44]">+</p>
              <p className="text-[#D7FD44]">Add Service</p>
            </button>
          </div>
        </form>

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}
