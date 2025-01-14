import React, { useState } from "react";
import { usePrice } from "../../hooks/usePrice";
import arrowbig from "/public/imgs/arrowbig.png";
import BanerSkeleton from "../skeleton/BanerSkeleton";
import VisibleDta from "./VisibleDta";

export default function Prices() {
  const { data, error, isLoading } = usePrice();
  const [arrowClick, setArrowClick] = useState([]);
  const [showAll, setShowAll] = useState(false);

  if (isLoading) {
    return <BanerSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-2">Error: {error.message}</div>
    );
  }

  const visibleData = showAll ? data.about : data.about.slice(0, 6);

  const handleToggle = (index) => {
    if (arrowClick.includes(index)) {
      setArrowClick(arrowClick.filter((i) => i !== index));
    } else {
      setArrowClick([...arrowClick, index]);
    }
  };

  return (
    <div className="lg:flex flex-col justify-center items-center w-full">
      <div className="px-[2.5rem] mt-[5rem] pb-[5.5rem] w-full relative max-w-[1520px]">
        <div className="flex justify-center flex-col">
          <p
            className="uppercase font-bold text-[2rem]"
            style={{
              background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Prices
          </p>
        </div>

        {visibleData.map((item, index) => (
          <VisibleDta
            key={index}
            index={index}
            arrowClick={arrowClick}
            arrowbig={arrowbig}
            name={item.name}
            sessions_single={item.sessions_single}
            sessions_five={item.sessions_five}
            sessions_ten={item.sessions_ten}
            handleToggle={() => handleToggle(index)}
          />
        ))}

        {data.about.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 text-[#D7FD44] font-bold uppercase text-center w-full"
          >
            {showAll ? "Show Less..." : "See More..."}
          </button>
        )}
      </div>
    </div>
  );
}
