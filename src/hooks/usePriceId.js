import { useQuery } from "@tanstack/react-query";
import { fetchPricesId } from "../services/fetchPricesId";

export const usePriceId = (priceId) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["prices", priceId],
    queryFn: () => fetchPricesId(priceId),
  });
  return { data, isError, error, isLoading };
};
