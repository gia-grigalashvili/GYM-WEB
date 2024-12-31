import { useSuccessStory } from "../../hooks/useFetchSuccessStory";
import { Swiper, SwiperSlide } from "swiper/react";
import BanerSkeleton from "../skeleton/BanerSkeleton";
import { Grid } from "swiper/modules";
import ThreeArrow from "/public/imgs/Frame 11.png";
import FourArrow from "/public/imgs/Frame 112.png";
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
    <div className="relative max-w-[1520px] w-full px-[2.5rem]">
      <div className="border-[#4D4D4D] border-[1px] p-10 bg-[#121212]  rounded-2xl mx-0">
        <div className="flex justify-start items-center gap-6 mb-10">
          <img src={ThreeArrow} alt="" className="rotate" />
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
          grid={{ rows: 1 }}
          modules={[Grid]}
          breakpoints={{
            640: { slidesPerView: 2, grid: { rows: 1 } },
            768: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 3, grid: { rows: 1 }, spaceBetween: 50 },
          }}
        >
          {mappedImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Success Story Image ${index + 1}`}
                  className="w-full lg:h-[215px] h-[167px] object-center rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end mt-8 lg:mt-10">
          <img src={ThreeArrow} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
}
