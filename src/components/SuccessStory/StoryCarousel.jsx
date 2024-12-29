import React from "react";
import { useSuccessStory } from "../../hooks/useFetchSuccessStory";
export default function StoryCarousel() {
  const { data, error, isLoading } = useSuccessStory();
  console.log(data);
  const mappedImages = data?.about.map((item) => item.image);
  return (
    <div>
      {" "}
      {mappedImages?.map((image, index) => (
        <div key={index}>
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt={`Success Story ${index + 1}`}
              className="w-full h-[215px]  object-center rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
