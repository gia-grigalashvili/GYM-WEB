import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPrices } from "../services/editPrices";

const useEditPrices = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: ({ id, updatedData }) => editPrices(id, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["prices"]);
    },
    onError: (error) => {
      console.error("Error updating service:", error);
    },
  });

  return { mutate, isLoading, error, isSuccess };
};

export default useEditPrices;
