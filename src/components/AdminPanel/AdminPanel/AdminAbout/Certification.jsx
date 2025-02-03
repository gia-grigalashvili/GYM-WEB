import React, { useState } from "react";
import { useFetchAbout } from "../../../../hooks/useFetchAbout.js";
import useAddCertification from "../../../../hooks/useAddCertification.js";
import { useCertification } from "../../../../hooks/useCertification .js";
import CertificateAdd from "./CertificateAdd";

export default function Certification() {
  const { data, isLoading, error, isError } = useFetchAbout();
  const { data: certifications } = useCertification();
  // const { mutate: deleteCertification } = useDeleteCertification();
  // const { addCertificateInfo } = useAddCertification();

  const [certificateText, setCertificateText] = useState("");
  const [certificateStart, setCertificateStart] = useState("");
  const [certificateEnd, setCertificateEnd] = useState("");

  const certification = certifications?.data;
  const { addCertificateInfo } = useAddCertification();
  const handleOpenCertificateModal = (id) => {
    setOpenCertificateModal(true);
  };
  const [OpenCertificateModal, setOpenCertificateModal] = useState(false);
  function aboutFormAction(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formAction = Object.fromEntries(formData);

    const updatedAbout = {
      story: formAction.story,
      experience: formAction.experience,
    };

    editAbout.mutate(
      { id: data.about[0].id, updatedAbout },
      {
        onSuccess: () => {
          console.log("About info updated successfully!");
        },
        onError: (error) => {
          console.error("Failed to update about info:", error.message);
        },
      }
    );
    if (selectedCertificateId) {
    }

    if (certificateText.trim() != "") {
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
  }

  const handleCloseCertificateModal = (id) => {
    setOpenCertificateModal(true);
  };
  const handleCloseModal = () => {
    setCertificateText(false);
  };

  console.log(certifications);

  return (
    <div>
      <form onSubmit={aboutFormAction}>
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
              onClick={() => handleOpenCertificateModal(null)}
            >
              <p className="w-3 h-3 text-[#D7FD44]">+</p>
              <p className="text-[#D7FD44]">Add Experience</p>
            </div>

            {OpenCertificateModal && (
              <div
                className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[15.1875rem]"
                onClick={() => handleCloseCertificateModal(null)}
              >
                <p className="text-[#D7FD44]">gg</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
