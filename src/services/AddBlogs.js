import { supabase } from "../configs/supabase";
export const AddBlogs = async (addBlogs) => {
  const { data: blogs, error } = await supabase.from("blog").insert([addBlogs]);
  if (error) throw new Error(error.message);
  return { blogs, error };
};
