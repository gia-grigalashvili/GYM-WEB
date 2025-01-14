import { useQuery } from "@tanstack/react-query";
import { fetchPrices } from "../services/GymApi";

export const usePrice = () => {
  return useQuery({
    queryKey: ["prices"],
    queryFn: fetchPrices,
  });
};
