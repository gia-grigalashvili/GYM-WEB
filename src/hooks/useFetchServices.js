import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "../services/fetchServicesApi";

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
};
