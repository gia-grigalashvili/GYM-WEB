import { useQuery } from "@tanstack/react-query";
import { fetchAbout } from "../services/GymApi";

export const useFetchAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: fetchAbout,
  });
};
