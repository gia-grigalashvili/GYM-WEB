import React from "react";
import { useState } from "react";
import { usePrice } from "../../../../../hooks/usePrice";
import CROSS from "/public/imgs/CROSS.png";
import { useDeleteServices } from "../../../../../hooks/useDeleteServices";
import ARROW from "/public/imgs/arrowbig.png";
import DataAbout from "./DataAbout";
import Servicesaddd from "./Servicesaddd";
import ServiciesEdit from "./ServiciesEdit";
export default function AdminSerivices() {
  const { data, error, isLoading } = usePrice();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [saveId, setSaveId] = useState();
  const [modalOpen, setModalOpen] = useState(true);
  const [openBlogEditModal, setOpenBlogEditModal] = useState(false);

  const handleCloseEdit = () => {
    setOpenBlogEditModal((prev) => !prev);
  };

  const handleOpenEditModal = (id) => {
    setSaveId(id);
    setOpenBlogEditModal((prev) => !prev);
  };
  const onemodal = () => {
    setOpenModal(!openModal);
  };

  const [arrowClick, setArrowClick] = useState([]);
  const handleToggle = (index) => {
    setArrowClick((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const { mutate: deleteServices } = useDeleteServices();
  const handleDelete = (id) => {
    deleteServices(id);
  };
  return (
    <div>
      {" "}
      <div className="relative px-[1rem] lg:px-[5rem] mt-[5rem] pb-[10.5rem]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-[1.3rem] lg:text-[2.3rem] text-white">
              Services
            </p>
            <p className="text-white text-[1.2rem]">Add services you provide</p>
          </div>
          <div
            className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-5 lg:px-10 py-2 rounded-3xl cursor-pointer"
            onClick={onemodal}
          >
            <p className="w-3 h-3 text-[#D7FD44]">+</p>
            <p className="text-[#D7FD44]">Add Service</p>
          </div>
        </div>

        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full mt-7">
                <div className="bg-[#222] rounded-[8.75rem] px-8 py-6 flex items-center justify-between"></div>
              </div>
            ))
          : data?.about.map((item, index) => (
              <DataAbout
                key={index}
                ARROW={ARROW}
                CROSS={CROSS}
                sessions_single={item.sessions_single}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                sessions_five={item.sessions_five}
                sessions_ten={item.sessions_ten}
                index={index}
                arrowClick={arrowClick}
                name={item.name}
                id={item.id}
                handleOpenEditModal={handleOpenEditModal}
              />
            ))}
      </div>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Servicesaddd onemodal={onemodal} />
        </div>
      )}
      {openBlogEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ServiciesEdit saveId={saveId} handleCloseEdit={handleCloseEdit} />
        </div>
      )}
    </div>
  );
}
