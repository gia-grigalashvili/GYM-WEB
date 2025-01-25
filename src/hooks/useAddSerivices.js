import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddServices } from "../services/AddServices";

const useAddService = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: addServicesInfo } = useMutation({
    mutationFn: AddServices,
    onSuccess: () => {
      queryClient.invalidateQueries(["prices"]);
    },
    onError: (error) => {
      console.error("Error adding service:", error);
    },
  });

  return { addServicesInfo };
};

export default useAddService;
