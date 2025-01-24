import { supabase } from "../configs/supabase";
export const deleteServices = async (id) => {
  const { data: deleteService, error } = await supabase
    .from("prices")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return deleteService;
};
