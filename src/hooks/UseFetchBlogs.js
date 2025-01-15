import { fetchBlogs } from "../services/FetchBlogs";
import { useQuery } from "@tanstack/react-query";
export const useFetchBlogs = () => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
  });
};
