import { useQuery } from "@tanstack/react-query";
import { fetchPrices } from "../services/FetchPrices";

export const usePrice = () => {
  return useQuery({
    queryKey: ["prices"],
    queryFn: fetchPrices,
  });
};
