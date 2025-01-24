import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteServices } from "../services/GymApi";

export const useDeleteServices = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteServices(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["prices"]);
    },
    onError: (error) => {
      console.error("Error deleting certification:", error.message);
    },
  });
};
