import { supabase } from "../configs/supabase";

export const deleteCertification = async (id) => {
  const { data: deleteCertificate, error } = await supabase
    .from("certification")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return deleteCertificate;
};
