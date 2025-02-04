import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCertification } from "../services/fetchdeleteCertification ";

export const useDeleteCertification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCertification,
    onSuccess: (data, variables) => {
      console.log("Deleted certification:", data);
      queryClient.invalidateQueries(["certifications"], (oldData) =>
        oldData?.filter((cert) => cert.id !== variables)
      );
    },
    onError: (error) => {
      console.error("Error deleting certification:", error.message);
    },
  });
};
