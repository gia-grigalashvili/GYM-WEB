import { supabase } from "../configs/supabase";
export const fetchBlogs = async () => {
  let { data: blogs, error } = await supabase.from("blog").select("*");
  return { blogs, error };
};
