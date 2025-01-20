import { supabase } from "../configs/supabase";
export const addImage = async (addImage) => {
  const { data: addImg, error } = await supabase
    .from("about")
    .insert([addImage]);
  if (error) throw new Error(error.message);
  return addImage;
};
