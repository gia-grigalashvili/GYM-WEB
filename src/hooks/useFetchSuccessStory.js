import { useQuery } from "@tanstack/react-query";
import { fetchSuccessStory } from "../services/FetchSuccessStoryApi";

export const useSuccessStory = () => {
  return useQuery({
    queryKey: ["successStory"],
    queryFn: fetchSuccessStory,
  });
};
