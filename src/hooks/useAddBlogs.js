import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddBlogs } from "../services/AddBlogs";
import { toast } from "react-toastify";

const useAddBlogs = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: addBlogs } = useMutation({
    mutationFn: AddBlogs,
    onSuccess: () => {
      queryClient.invalidateQueries(["blog"]);
      toast.success("Blog added successfully!");
    },
    onError: (error) => {
      toast.error("Blog added successfully!");
    },
  });
  return { addBlogs };
};

export default useAddBlogs;
