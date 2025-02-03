import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCertification } from "../services/addCertificcation";

const useAddCertification = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: addCertificateInfo } = useMutation({
    mutationFn: addCertification,
    onSuccess: () => {
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.error("Error adding certification:", error);
    },
  });

  return { addCertificateInfo };
};

export default useAddCertification;
