import React from "react";
import { useCertification } from "../../hooks/useCertification ";
import BanerSkeleton from "../skeleton/BanerSkeleton";

import CertificationMap from "./CertificationMap";
export default function CertificationComp() {
  const {
    data: certifications,
    isError,
    isLoading,
    error,
  } = useCertification();

  if (isLoading) {
    return <BanerSkeleton />;
  }
  const certification = certifications?.data;

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="text-white md:grid-cols-2 md:grid  pl-[20px] pr-[20px] mt-[100px] bg-[#121212] flex flex-col gap-10 mb-[5rem]">
      {certification.map((certification) => (
        <CertificationMap
          key={certification.id}
          endDate={certification.endDate}
          name={certification.name}
          startDate={certification.startDate}
        />
      ))}
    </div>
  );
}
