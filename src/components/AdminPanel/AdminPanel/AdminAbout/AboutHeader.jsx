import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchAbout } from "../../../../hooks/useFetchAbout";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useAddImage } from "../../../../hooks/useAddImage";
import { supabase } from "../../../../services/FetchSupabaseConfig";

export default function AboutHeader() {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    data,
    isLoading,
    isError,
    error: aboutError,
    refetch,
  } = useFetchAbout();
  const { mutate: addImage } = useAddImage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Image = data?.about?.at(-1)?.image;
  const imageId = data?.about?.at(-1)?.id; // საჭირო იქნება ID ჩანაწერისთვის

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    let imageUrl = null;

    try {
      const imageName = `${uuidv4()}_${data.image[0].name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("about")
        .upload(imageName, data.image[0]);

      if (uploadError) throw uploadError;

      imageUrl = `https://ylzgfzyvohnqdlzlxrfw.supabase.co/storage/v1/object/public/about/${uploadData.path}`;

      addImage({
        image: imageUrl,
      });

      setImagePreview(imageUrl);
      toast.success("Profile updated successfully!");

      refetch(); // მონაცემების განახლება
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Failed to update profile.");
    } finally {
      reset({ image: null });
    }
  };

  const handleRemoveImage = async () => {
    try {
      const currentImage = imagePreview || Image;

      if (currentImage) {
        const imagePath = currentImage.split("public/").pop();

        const { error: storageError } = await supabase.storage
          .from("about")
          .remove([imagePath]);

        if (storageError) throw storageError;

        // მონაცემთა ბაზიდან წაშლა
        const { error: dbError } = await supabase
          .from("about")
          .delete()
          .eq("id", imageId);

        if (dbError) throw dbError;

        setImagePreview(null);
        toast.success("Profile picture removed successfully!");

        refetch(); // მონაცემების განახლება
      }
    } catch (err) {
      console.error("Error removing profile picture:", err);
      toast.error("Failed to remove profile picture.");
    }
  };

  return (
    <div className="felx flex-col">
      <div className="flex flex-col my-[3.25rem]">
        <h1 className="text-[1.875rem] font-bold text-white">About Me</h1>
        <p className="text-[1rem] font-medium text-white">
          Add info for your clients
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[1.81rem]"
      >
        <p className="text-[1.5rem] font-medium text-white">
          Your Profile Picture
        </p>
        <div className="flex items-center gap-6">
          <img
            className="rounded-[50%] w-[5rem] h-[5rem]"
            src={imagePreview || Image || ""}
            alt="Profile"
          />

          <div className="flex gap-4">
            <label className="border-[1px] border-[#D7FD44] bg-[#D7FD44] flex gap-[0.62rem] px-5 py-2 rounded-3xl cursor-pointer max-w-[12.1875rem] text-black">
              <p>+</p>
              <h1 className="text-[11px] lg:text-[17px]">Upload New</h1>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register("image", {
                  required: "Please upload an image",
                  onChange: handleImagePreview,
                })}
              />
            </label>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
            <div
              onClick={handleRemoveImage}
              className="border-[1px] border-[#D7FD44] flex px-5 gap-[5px] rounded-3xl p-[10px] cursor-pointer text-black"
            >
              <h1 className="text-[#D7FD44] text-[10px] lg:text-[17px] font-bold">
                Remove Profile Picture
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="flex px-10 bg-[#D7FD44] rounded-3xl p-[10px] text-center"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
