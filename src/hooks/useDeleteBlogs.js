import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlogs } from "../services/deleteBlogs";

export const useDeleteBlogs = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteBlogs(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["blog"]);
    },
    onError(error) {
      console.error("Error deleting blog:", error.message);
    },
  });
};
