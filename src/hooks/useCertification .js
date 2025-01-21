import { useQuery } from "@tanstack/react-query";
import { fetchCertification } from "../services/FetchCertification";

export const useCertification = () => {
  return useQuery({
    queryKey: ["certification"],
    queryFn: fetchCertification,
  });
};
