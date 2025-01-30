import { useEditBlogs } from "../../../../hooks/useEditBlogs";
import { useFetchBlogs } from "../../../../hooks/UseFetchBlogs";
import { toast } from "react-toastify";
import croos from "/public/imgs/CROSS.png";
import "react-toastify/dist/ReactToastify.css";
export default function BlogEdit({ cancel, setCancel, blogId }) {
  const { data, isLoading, isError, error } = useFetchBlogs();
  const { mutate: editBlogs } = useEditBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const blogToEdit = data.blogs.find(function findBlogId(blog) {
    return blog.id == blogId;
  });

  if (!blogToEdit) {
    return <p>Blog not found</p>;
  }

  function submitEditBlogs(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formAction = Object.fromEntries(formData);

    if (!formAction.title || !formAction.author || !formAction.description) {
      toast.error("All fields are required!");
      return;
    }

    const author = formData.get("author");
    const title = formData.get("title");
    const description = formData.get("description");
    try {
      setCancel((prev) => !prev);
      editBlogs({ id: blogToEdit.id, author, title, description });
      toast.success("Blog updated successfully!");
    } catch (error) {
      toast.error("All fields are required!");
    }
  }
  return (
    <div>
      {" "}
      <div>
        <div className="p-[2.56rem] bg-[#323232] flex items-center justify-center w-[55rem] rounded-[1.25rem]">
          <div className="px-[1.375rem] bg-black rounded-lg w-full py-[2.56rem]">
            <div className="flex w-full items-center justify-between pb-[2.56rem]">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-bold text-[1.5rem] text-white">
                  Edit Blogs
                </p>
                <p className="text-white">Edit Blogs you provide</p>
              </div>
              <div
                onClick={() => setCancel(false)}
                className="bg-[#D7FD44] flex py-4 px-4 items-center justify-center rounded-full cursor-pointer"
              >
                <img src={croos} alt="Close" />
              </div>
            </div>
            <form onSubmit={submitEditBlogs}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <h2 className="text-white">Input Blogs Title</h2>
                </div>
                <div className="flex flex-col ml-[1.44rem]">
                  <input
                    type="text"
                    className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                    placeholder="Title..."
                    name="title"
                    defaultValue={blogToEdit.title}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <h2 className="text-white">Input Name</h2>
                </div>
                <div className="flex flex-col ml-[1.44rem]">
                  <input
                    type="text"
                    className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                    placeholder="Lionel Messi..."
                    name="author"
                    defaultValue={blogToEdit.author}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <h2 className="text-white">Input Description</h2>
                </div>
                <div className="flex flex-col ml-[1.44rem]">
                  <input
                    type="text"
                    className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                    placeholder="Description..."
                    name="description"
                    defaultValue={blogToEdit.description}
                  />
                </div>
              </div>
              <button className="flex items-center justify-center mt-[3.81rem] ">
                <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer">
                  <p className="w-3 h-3 text-[#D7FD44]">+</p>
                  <p className="text-[#D7FD44]">Edit Blogs</p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
