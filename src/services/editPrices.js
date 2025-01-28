import { supabase } from "../configs/supabase";

export const editPrices = async (id, updatedData) => {
  const { data: services, error } = await supabase
    .from("prices")
    .update(updatedData)
    .eq("id", id);
  if (error) throw new Error(error.message);
};
