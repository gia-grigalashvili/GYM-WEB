import { supabase } from "../configs/supabase";

export const fetchPricesId = async (priceId) => {
  let { data: about, error } = await supabase
    .from("prices")
    .select("*")
    .eq("id", priceId);
  return { about, error };
};
