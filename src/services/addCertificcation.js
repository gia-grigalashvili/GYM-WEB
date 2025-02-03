import { supabase } from "../configs/supabase";

export const addCertification = async (addCerf) => {
  const { data: addCertificate, error } = await supabase
    .from("certification")
    .insert([addCerf]);
  if (error) throw new Error(error.message);
  return addCertificate;
};
