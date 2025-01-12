import { useSuccessStory } from "../../hooks/useFetchSuccessStory";
import { Swiper, SwiperSlide } from "swiper/react";
import BanerSkeleton from "../skeleton/BanerSkeleton";
import arrow from "/public/imgs/arrow1.png";

import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import ThreeArrow from "/public/imgs/Frame 11.png";
import { grid } from "ldrs";
import StoryCarouselImgs from "./StoryCarouselImgs";
grid.register();
export default function StoryCarousel() {
  const { data, error, isLoading } = useSuccessStory();
  const mappedImages = data?.about?.map((item) => item.image);

  if (isLoading) {
    return <BanerSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-2">
        {error?.message || "An error occurred"}
      </div>
    );
  }

  if (!mappedImages || mappedImages.length === 0) {
    return <div className="text-center p-2">No stories available</div>;
  }

  return (
    <div className="relative pl-[40px] mt-[100px] max-w-[1820px] w-full px-[2.5rem]">
      <div className="border-[#4D4D4D] border-[1px] p-10 bg-[#121212]  rounded-2xl mx-0">
        <div className="flex justify-start  items-center gap-6 mb-10">
          <img src={ThreeArrow} alt="" className="rotate block lg:hidden" />
          <img className="hidden lg:block" src={arrow} alt="" />
          <p
            className="uppercase font-bold"
            style={{
              background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Success Story
          </p>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          modules={[Grid]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              grid: { rows: 1 },
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 4 },
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 3 },
              spaceBetween: 50,
            },
          }}
        >
          {mappedImages?.map((image, index) => (
            <SwiperSlide key={index}>
              <StoryCarouselImgs index={index} image={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end mt-8 lg:mt-10">
          <img src={ThreeArrow} alt="" className="block lg:hidden rotate-180" />
          <img src={arrow} alt="" className="rotate-180 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
