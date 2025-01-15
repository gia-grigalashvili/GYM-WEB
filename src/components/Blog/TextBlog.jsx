import React from "react";
import { useFetchBlogs } from "../../hooks/UseFetchBlogs";
import BanerSkeleton from "../skeleton/BanerSkeleton";
import DataBlogs from "./DataBlogs";
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
            <DataBlogs
              author={blog.author}
              description={blog.description}
              title={blog.tit}
              id={blog.id}
            />
          );
        })}
      </div>
    </div>
  );
}
