import React, { useState } from "react";
import { useFetchAbout } from "../../../../hooks/useFetchAbout.js";
import useAddCertification from "../../../../hooks/useAddCertification.js";
import { useCertification } from "../../../../hooks/useCertification .js";
import { useDeleteCertification } from "../../../../hooks/useDeleteCertification.js";
import CertificateAdd from "./CertificateAdd";
import Sharestory from "./Sharestory.jsx";
import croos from "/public/imgs/CROSS.png";
export default function Certification() {
  const { data, isLoading, error, isError } = useFetchAbout();
  const { data: certifications } = useCertification();
  const { addCertificateInfo } = useAddCertification();
  const { mutate: deleteCertification } = useDeleteCertification();
  const [OpenCertificateModal, setOpenCertificateModal] = useState(false);
  const [certificateText, setCertificateText] = useState("");
  const [certificateStart, setCertificateStart] = useState("");
  const [certificateEnd, setCertificateEnd] = useState("");

  const certification = certifications?.data;

  const handleOpenCertificateModal = () => {
    setOpenCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setOpenCertificateModal(false);
  };

  const aboutFormAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formAction = Object.fromEntries(formData);
    const updatedAbout = {
      story: formAction.story,
      experience: formAction.experience,
    };

    if (certificateText.trim() !== "") {
      try {
        addCertificateInfo({
          name: certificateText,
          startDate: certificateStart,
          endDate: certificateEnd,
        });
        setCertificateText("");
        setOpenCertificateModal(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleDelete = (id) => {
    deleteCertification(id);
  };
  return (
    <div>
      <form onSubmit={aboutFormAction}>
        <Sharestory
          useFetchAbout={useFetchAbout}
          aboutFormAction={aboutFormAction}
        />

        <div>
          <h1 className="text-[20px] text-[#ffff]">Certifications</h1>
          <div className="rounded-[20px] flex flex-col gap-[20px] mt-[20px] bg-[#323232] p-[20px] ">
            {certification?.length > 0 &&
              certification.map((item, index) => (
                <div
                  key={index}
                  className="flex text-[#ffff] text-[20px]  items-center gap-[100px]"
                >
                  <div className="flex items-center gap-[20px]">
                    <p className="text-[15px] lg:text-[20px]">{item.name}</p>
                    <p className="text-[15px] lg:text-[20px]">
                      {item.startDate}
                    </p>
                  </div>

                  <img
                    className="cursor-pointer w-3 h-3   "
                    onClick={() => handleDelete(item.id)}
                    src={croos}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mt-[20px]">
          {OpenCertificateModal && (
            <CertificateAdd
              certificateText={certificateText}
              setCertificateText={setCertificateText}
              certificateStart={certificateStart}
              setCertificateStart={setCertificateStart}
              certificateEnd={certificateEnd}
              setCertificateEnd={setCertificateEnd}
            />
          )}

          <div className="flex justify-center items-center py-4 gap-4">
            <div
              className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[15.1875rem]"
              onClick={handleOpenCertificateModal}
            >
              <p className="w-3 h-3 text-[#D7FD44]">+</p>
              <p className="text-[#D7FD44]">Add Experience</p>
            </div>

            {OpenCertificateModal && (
              <div>
                <div
                  className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[15.1875rem]"
                  onClick={handleCloseCertificateModal}
                >
                  <p className="text-[#D7FD44]">Cancel</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="my-[2.44rem] border-[1px] border-[#D7FD44] bg-[#D7FD44] gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[12.1875rem]">
          {" "}
          upload page
        </button>
      </form>
    </div>
  );
}
