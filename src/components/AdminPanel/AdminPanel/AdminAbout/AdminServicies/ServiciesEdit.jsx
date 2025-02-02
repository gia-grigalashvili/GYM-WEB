import { usePriceId } from "../../../../../hooks/usePriceId";
import useEditPrices from "../../../../../hooks/UseEditPricess";
import { useState } from "react";
import { toast } from "react-toastify";
import croos from "/public/imgs/CROSS.png";

import "react-toastify/dist/ReactToastify.css";

export default function ServiciesEdit({ handleCloseEdit, saveId }) {
  const {
    data,
    isLoading: priceLoading,
    isError,
    error: priceError,
  } = usePriceId(saveId);
  console.log(data);
  const { mutate: editService } = useEditPrices();
  const [formErrors, setFormErrors] = useState({});
  const closemodal = () => {
    handleCloseEdit();
  };
  function formAction(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    let errors = {};
    if (!formValues.title) errors.title = "Title is required";
    if (!formValues.singleSession)
      errors.singleSession = "Single Session Price is required";
    if (!formValues.fiveSession)
      errors.fiveSession = "5-Session Package Price is required";
    if (!formValues.tenSession)
      errors.tenSession = "10-Session Package Price is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    const selectedId = data.about[0].id;

    const updatedData = {
      name: formValues.title,
      sessions_single: formValues.singleSession,
      sessions_five: formValues.fiveSession,
      sessions_ten: formValues.tenSession,
    };

    try {
      editService({ id: selectedId, updatedData });
      handleCloseEdit();

      toast.success("Services updated successfully!");
    } catch (error) {
      toast.error("An error occurred while updating services");
    }
  }

  if (priceLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{priceError.message}</p>;
  }
  return (
    <>
      <>
        <div className="p-[1.56rem] bg-[#323232] flex  items-center justify-center w-[21rem] lg:w-[55rem] h-auto rounded-[1.25rem]">
          <div className="px-[1.375rem] bg-black rounded-lg w-full py-[2.56rem]">
            <div className="flex w-full items-center justify-between pb-[2.56rem]">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-bold text-[1.5rem] text-white">
                  Edit Services
                </p>
                <p className="text-white">Edit services you provide</p>
              </div>
              <div
                onClick={closemodal}
                className="bg-[#D7FD44] flex py-4 px-4 items-center justify-center rounded-full cursor-pointer"
              >
                <img src={croos} alt="Close" />
              </div>
            </div>
            {data?.about.map((service) => (
              <form key={service.id} onSubmit={formAction}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h2 className="text-white">Input Service Title</h2>
                  </div>
                  <div className="flex flex-col ml-[1.44rem]">
                    <input
                      type="text"
                      className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                      placeholder="Weight Loss"
                      name="title"
                      defaultValue={service.name}
                    />
                    {formErrors.title && (
                      <p className="text-red-500 text-sm">{formErrors.title}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-9">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <h2 className="text-white">Session Prices</h2>
                    </div>
                  </div>

                  <div className="flex gap-4 pl-5">
                    <div className="flex flex-col mt-3 gap-2">
                      <label className="text-white">Single Session Price</label>
                      <input
                        type="number"
                        className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                        placeholder="10$"
                        name="singleSession"
                        defaultValue={service.sessions_single}
                      />
                      {formErrors.singleSession && (
                        <p className="text-red-500 text-sm">
                          {formErrors.singleSession}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col mt-3 gap-2">
                      <label className="text-white">
                        5-Session Package Price
                      </label>
                      <input
                        type="number"
                        className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                        placeholder="50$"
                        name="fiveSession"
                        defaultValue={service.sessions_five}
                      />
                      {formErrors.fiveSession && (
                        <p className="text-red-500 text-sm">
                          {formErrors.fiveSession}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col mt-3 gap-2">
                      <label className="text-white">
                        10-Session Package Price
                      </label>
                      <input
                        type="number"
                        className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                        placeholder="100$"
                        name="tenSession"
                        defaultValue={service.sessions_ten}
                      />
                      {formErrors.tenSession && (
                        <p className="text-red-500 text-sm">
                          {formErrors.tenSession}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center">
                  <button className="flex items-center justify-center mt-[3.81rem]">
                    <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer">
                      <p className="w-3 h-3 text-[#D7FD44]">+</p>
                      <p className="text-[#D7FD44]">Edit Service</p>
                    </div>
                  </button>
                </div>
              </form>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
