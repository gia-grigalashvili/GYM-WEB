import { supabase } from "../configs/supabase";

export const AddServices = async (addServices) => {
  const { data: services, error } = await supabase
    .from("prices")
    .insert([addServices]);

  if (error) throw new Error(error.message);
  return { services, error };
};
