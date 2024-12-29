import React from "react";
import { useServices } from "../../hooks/useFetchServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import BanerSkeleton from "../skeleton/BanerSkeleton";

import "react-loading-skeleton/dist/skeleton.css";

export default function ServicesSlider() {
  const { data, isLoading } = useServices();
  const services = data?.data || [];
  const loadingPlaceholderCount = 5;

  if (isLoading) {
    return <BanerSkeleton />;
  }
  return (
    <div className="lg:p-[100px] flex  flex-col gap-[20px] justify-center p-[40px]">
      <h1 className="lg:text-[32px] text-[18px]  text-light-gradient font-extrabold font-openSans text-[#ffffffe5]">
        Your Fitness Journey Starts Here
      </h1>
      <div className="border p-[15px]  rounded-[30px] border-gray-500  ">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          className="flex items-center  justify-center"
        >
          {(isLoading
            ? Array.from({ length: loadingPlaceholderCount })
            : services
          ).map((service, index) => (
            <SwiperSlide
              key={service?.id || index}
              className="cursor-pointer rounded-2xl  max-w-[305px] lg:max-w-[295px] border border-[#D7FD44] m-4"
            >
              <div className="flex flex-col items-center justify-between p-5 h-[320px] group">
                {isLoading ? (
                  <div className="flex justify-center items-center w-full h-[240px]"></div>
                ) : (
                  <img
                    className="w-full h-[240px] object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    src={service.image}
                    alt={service.name}
                  />
                )}

                {/* Name Placeholder or Service Name */}
                <span className="mt-3 text-white font-bold py-[2px] text-center">
                  {service.name}
                </span>

                <span className="subtext text-sm max-h-0 overflow-hidden group-hover:max-h-[100px] text-white transition-all duration-500 ease-in-out mt-1 text-center">
                  {service.description}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
