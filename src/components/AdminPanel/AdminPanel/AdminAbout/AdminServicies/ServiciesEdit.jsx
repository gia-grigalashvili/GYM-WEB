import { usePriceId } from "../../../hooks/usePriceId";
import { useState } from "react";

import useEditPrices from "../../../hooks/useEditPrices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ServiciesEdit() {
  const { selectedId, closeModal } = useContext(Mycontext);
  const { mutate: editService } = useEditPrices();
  const {
    data,
    isLoading: priceLoading,
    isError,
    error: priceError,
  } = usePriceId(selectedId);
  const [formErrors, setFormErrors] = useState({});
  return <div>ServiciesEdit</div>;
}
