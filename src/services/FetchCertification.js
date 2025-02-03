import { supabase } from "../configs/supabase";

export const fetchCertification = async () => {
  let { data, error } = await supabase.from("certification").select("*");
  if (error) throw new Error(error.message);
  return { data };
};
