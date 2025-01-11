import { useServices } from "../../hooks/useFetchServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import BanerSkeleton from "../skeleton/BanerSkeleton";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import ServiceSliderContet from "./ServiceSliderContet";

export default function ServicesSlider() {
  const { data, isLoading } = useServices();
  const services = data?.data;
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
              <ServiceSliderContet
                description={service.description}
                image={service.image}
                name={service.name}
                isLoading={isLoading}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
