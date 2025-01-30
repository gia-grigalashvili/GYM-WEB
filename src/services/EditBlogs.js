import { supabase } from "../configs/supabase";

export const editBlogs = async (id, author, title, description) => {
  const { data: blogs, error } = await supabase
    .from("blog")
    .update({ author, title, description })
    .eq("id", id);
  if (error) throw new Error(error.message);
};
