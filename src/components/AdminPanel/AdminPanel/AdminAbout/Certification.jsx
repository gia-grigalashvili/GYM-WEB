import React, { useState } from "react";
import { useCertification } from "../../../../hooks/useCertification ";

export default function Certification() {
  const { data: certifications } = useCertification();
  const certification = certifications?.data;
  const [certificateText, setCertificateText] = useState(false);

  const handleOpenCertificateModal = () => {
    setCertificateText(true);
  };

  const handleCloseModal = () => {
    setCertificateText(false);
  };

  console.log(certifications);

  return (
    <div>
      <h1 className="text-[20px] text-[#ffff]">Certifications</h1>
      <div className="rounded-[20px] flex flex-col gap-[20px] mt-[20px] bg-[#323232] p-[20px] ">
        {certification?.length > 0 &&
          certification.map((item, index) => (
            <div
              key={index}
              className="flex text-[#ffff] text-[20px] gap-[20px]"
            >
              <p className="text-[15px] lg:text-[20px]">{item.name}</p>
              <p className="text-[15px] lg:text-[20px]">{item.startDate}</p>
            </div>
          ))}

        <div
          className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[15.1875rem]"
          onClick={handleOpenCertificateModal}
        >
          <p className="w-3 h-3 text-[#D7FD44]">+</p>
          <p className="text-[#D7FD44]">Add Experience</p>
        </div>
      </div>

      {/* Modal */}
      {certificateText && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#444] p-6 rounded-md w-[400px] text-[#fff] relative">
            <h2 className="text-[18px] mb-4">Add Certification</h2>
            <input
              type="text"
              placeholder="Certification Name"
              className="w-full mb-4 p-2 rounded-md bg-[#555] text-[#fff]"
            />
            <input
              type="text"
              placeholder="Start Date"
              className="w-full mb-4 p-2 rounded-md bg-[#555] text-[#fff]"
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-[#D7FD44] px-4 py-2 rounded-md text-black"
                onClick={handleCloseModal}
              >
                Save
              </button>
              <button
                className="bg-[#555] px-4 py-2 rounded-md text-[#fff]"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
