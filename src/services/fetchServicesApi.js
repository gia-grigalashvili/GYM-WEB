import { supabase } from "../configs/supabase";

export const fetchServices = async () => {
  let { data, error } = await supabase.from("services").select("*");
  return { data, error };
};
