import { supabase } from "../configs/supabase";
export const fetchAbout = async () => {
  let { data: about, error } = await supabase.from("about").select("*");
  return { about, error };
};
//
