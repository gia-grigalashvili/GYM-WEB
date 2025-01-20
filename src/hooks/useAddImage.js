import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addImage } from "../services/FetchImgs";

export const useAddImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["about"]);
      console.log("Succesfully added Image!");
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
