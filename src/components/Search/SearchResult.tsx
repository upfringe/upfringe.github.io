import { allBlogs } from "contentlayer/generated";
import React from "react";
import BlogLayoutThree from "../Blogs/BlogLayout/BlogLayoutThree";

const SearchResult = ({ query }: { query: string }) => {
  const posts = allBlogs.filter((blog) => {
    if (blog.isPublished) {
      if (
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.description.toLowerCase().includes(query.toLowerCase()) ||
        blog.body.raw.toLowerCase().includes(query.toLowerCase()) ||
        blog.author.toLowerCase().includes(query.toLowerCase())||
        blog.tags.some(tag=>tag.toLowerCase().includes(query.toLowerCase()))
      ) {
        return true;
      }
    }
  });
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  2xl:px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          {posts.length} Posts Found.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {posts.slice(0, posts.length).map((post, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResult;
