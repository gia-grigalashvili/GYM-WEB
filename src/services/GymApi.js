import { supabase } from "./supabaseConfig";
export const fetchAbout = async () => {
  let { data: about, error } = await supabase.from("about").select("*");
  return { about, error };
};
export const fetchSuccessStory = async () => {
  let { data: about, error } = await supabase.from("successStory").select("*");
  return { about, error };
};
