import { usePriceId } from "../../../../../hooks/usePriceId";
import { useState } from "react";
import { toast } from "react-toastify";
import croos from "/public/imgs/CROSS.png";
import "react-toastify/dist/ReactToastify.css";
import useEditPrice from "../../../../../hooks/useEditPrice";

export default function ServiciesEdit({ closeModal, modalOpen }) {
  const {
    data,
    isLoading: priceLoading,
    isError,
    error: priceError,
  } = usePriceId();
  const { mutate: editService } = useEditPrice();

  const [formErrors, setFormErrors] = useState({});

  if (priceLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{priceError.message}</p>;
  }

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

    const updatedData = {
      name: formValues.title,
      sessions_single: formValues.singleSession,
      sessions_five: formValues.fiveSession,
      sessions_ten: formValues.tenSession,
    };

    try {
      editService({ id: selectedId, updatedData });
      closeModal();
      toast.success("Services updated successfully!");
    } catch (error) {
      toast.error("An error occurred while updating services");
    }
  }
  const { name, sessions_single, sessions_five, sessions_ten } = data?.about[0];
  return (
    <>
      {modalOpen && (
        <>
          {/* Modal Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="p-[2.56rem] bg-[#323232] flex items-center justify-center w-[55rem] rounded-[1.25rem]">
              <div className="px-[1.375rem] bg-black rounded-lg w-full py-[2.56rem]">
                <div className="flex w-full items-center justify-between pb-[2.56rem]">
                  <div className="flex flex-col gap-4">
                    <p className="uppercase font-bold text-[1.5rem] text-white">
                      Edit Services
                    </p>
                    <p className="text-white">Edit services you provide</p>
                  </div>
                  <div
                    onClick={closeModal}
                    className="bg-[#D7FD44] flex py-4 px-4 items-center justify-center rounded-full cursor-pointer"
                  >
                    <img src={croos} alt="Close" />
                  </div>
                </div>
                <form onSubmit={formAction}>
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
                        defaultValue={name}
                      />
                      {formErrors.title && (
                        <p className="text-red-500 text-sm">
                          {formErrors.title}
                        </p>
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
                        <label className="text-white">
                          Single Session Price
                        </label>
                        <input
                          type="number"
                          className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                          placeholder="10$"
                          name="singleSession"
                          defaultValue={sessions_single}
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
                          defaultValue={sessions_five}
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
                          defaultValue={sessions_ten}
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
                    <button className="flex items-center justify-center mt-[3.81rem] ">
                      <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer">
                        <p className="w-3 h-3 text-[#D7FD44]">+</p>
                        <p className="text-[#D7FD44]">Edit Service</p>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
