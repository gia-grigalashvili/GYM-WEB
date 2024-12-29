import { supabase } from "../configs/supabase";
export const fetchSuccessStory = async () => {
  let { data: about, error } = await supabase.from("successStory").select("*");
  return { about, error };
};
