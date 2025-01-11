import React from "react";

export default function StoryCarouselImgs({ image, index }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={image}
        alt={`Success Story ${index + 1}`}
        className="w-full h-[215px]  object-center rounded-lg"
      />
    </div>
  );
}
