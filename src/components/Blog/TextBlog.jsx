import React from "react";
import { useFetchBlogs } from "../../hooks/UseFetchBlogs";
import BanerSkeleton from "../skeleton/BanerSkeleton";
export default function TextBlog() {
  const { data, isLoading, error } = useFetchBlogs();

  if (isLoading) {
    return <BanerSkeleton />;
  }
  if (error) {
    return (
      <div className="text-red-500 text-center p-2">Error: {error.message}</div>
    );
  }
  return (
    <div>
      {" "}
      <div>
        {data.blogs?.map(function blogsMap(blog) {
          return (
            <div
              key={blog.id}
              className="border-b border-b-[#737373] pb-6 mb-6"
            >
              <div className=" flex items-center gap-4 ">
                <p className="text-[#D7FD44]  text-[1rem] leading-[24px]">
                  {blog.author}
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold py-5 text-white">
                  {blog.title}
                </h1>
              </div>
              <p className="leading-[24px] text-white">{blog.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
