import { useQuery } from "@tanstack/react-query";
import { fetchCertification } from "../services/fetchCertification ";

export const useCertification = () => {
  return useQuery({
    queryKey: ["certification"],
    queryFn: fetchCertification,
  });
};
