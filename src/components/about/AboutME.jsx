import { Link } from "react-router-dom";
import { useFetchAbout } from "../../hooks/useFetchAbout";
import BanerSkeleton from "../skeleton/BanerSkeleton";

export default function AboutME() {
  const { data, error, isLoading } = useFetchAbout();

  // მონაცემების წამოღება
  const Image = data?.about?.at(-1)?.image;
  const Story = data?.about?.[0]?.story;

  // Error და Loading მდგომარეობები
  if (isLoading) {
    return <BanerSkeleton />;
  }

  if (error) {
    return (
      <p className="text-red-500">Something went wrong: {error.message}</p>
    );
  }

  return (
    <div className="bg-[#121212] pt-[3.75rem] pb-10 px-[2.5rem] flex flex-col items-center w-full max-w-[1520px] gap-10">
      <div>
        <h1 className="lg:text-[32px] text-[18px]  text-light-gradient font-extrabold font-openSans text-[#ffffffe5]">
          About Me
        </h1>
      </div>
      <div className="flex gap-[100px] items-center">
        {/* Image Container for Half Visibility */}
        <div
          className="h-[240px] lg:h-[440px] w-[50%] overflow-hidden relative"
          style={{
            clipPath: "inset(0 0 50% 0)", // Shows the top half of the image
          }}
        >
          <img
            className="h-full w-full object-cover"
            src={Image}
            alt="About Me"
          />
        </div>
        <div className="flex flex-col gap-6 lg:justify-between lg:mt-[4.25rem]">
          <p className="max-w-[36.6875rem] text-[#C4C4C4]">{Story}</p>
          <div className="flex justify-start lg:justify-end">
            <Link to="/stories">
              <button className="bg-[#B8D44A] text-[1rem] rounded-lg py-2 px-[3.325rem] cursor-pointer transform scale-100 hover:scale-105 transition-transform duration-300">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
