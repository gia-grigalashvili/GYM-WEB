import { Link } from "react-router-dom";
import { useFetchAbout } from "../../hooks/useFetchAbout";
import BanerSkeleton from "../skeleton/BanerSkeleton";

export default function AboutME() {
  const { data, error, isLoading } = useFetchAbout();

  // Fetching data
  const Image = data?.about?.at(-1)?.image;
  const Story = data?.about?.[0]?.story || "";

  // Splitting the story into two halves
  const midpoint = Math.ceil(Story.length / 2); // Find the midpoint of the story
  const firstHalf = Story.slice(0, midpoint); // First half of the story
  const secondHalf = Story.slice(midpoint); // Second half of the story

  // Error and Loading states
  if (isLoading) {
    return <BanerSkeleton />;
  }

  if (error) {
    return (
      <p className="text-red-500">Something went wrong: {error.message}</p>
    );
  }

  return (
    <div className="bg-[#121212] pt-[3.75rem] pb-10 px-[2.5rem] flex flex-col lg:pl-[100px] w-full max-w-[1520px] gap-10">
      <div>
        <h1 className="lg:text-[32px] text-[18px] text-light-gradient font-extrabold font-openSans text-[#ffffffe5]">
          About Me
        </h1>
      </div>
      <div className="flex  gap-[100px] lg:gap-[0px] flex-col  lg:flex-row ">
        <div className="h-[240px] lg:h-[440px] w-full lg:w-[50%] overflow-hidden relative">
          <img
            className="h-full w-[89%] rounded-[30px]"
            src={Image}
            alt="About Me"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between  ">
          <div className="flex flex-col gap-[50px]">
            <p className="max-w-[36.6875rem] text-[15px] text-[#C4C4C4]">
              {firstHalf}
            </p>
            <p className="max-w-[36.6875rem] text-[15px] text-[#C4C4C4]">
              {secondHalf}
            </p>
          </div>

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
