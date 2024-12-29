import { useFetchAbout } from "../../hooks/useFetchAbout";

import star from "/public/imgs/Star 3.png";
import BanerSkeleton from "../skeleton/BanerSkeleton";
function Customersinfo() {
  const { data, error, isLoading } = useFetchAbout();

  if (isLoading) {
    return <BanerSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-2">Error: {error.message}</div>
    );
  }

  const { experience } = data.about[0];
  const yearExp = experience;

  return (
    <div className="bg-[#D7FD44] h-[6.25rem]  flex items-center px-10 justify-evenly gap-3">
      <div className="flex">
        <img
          src={star}
          className="hidden lg:block w-[50px] h-[50px]"
          alt="Star Icon"
        />
      </div>
      <div className="flex items-center justify-center text-center">
        <p>
          <b>200 + </b>Happy Customers
        </p>
      </div>
      <div className="flex items-center justify-center text-center">
        <p>
          <b>{yearExp}+</b> Years Of Training Experience
        </p>
      </div>
      <div className="flex items-center justify-center text-center">
        <p>
          <b>98 %</b> Customer Satisfaction
        </p>
      </div>
      <div className="flex">
        <img
          className="w-[50px] h-[50px] hidden lg:block"
          src={star}
          alt="Star Icon"
        />
      </div>
    </div>
  );
}

export default Customersinfo;
