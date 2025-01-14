import { supabase } from "../configs/supabase";

export const fetchPrices = async () => {
  let { data: about, error } = await supabase.from("prices").select("*");
  return { about, error };
};
