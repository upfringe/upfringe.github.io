import Fuse from "fuse.js";
import React, { useMemo } from "react";
import { allBlogs } from "contentlayer/generated";
import BlogLayoutThree from "../Blogs/BlogLayout/BlogLayoutThree";

const SearchResult = ({ query }: { query: string }) => {
    const fuse = useMemo(
        () =>
            new Fuse(allBlogs, {
                keys: ["title", "description", "body.raw", "author", "tags"],
                includeScore: true,
                threshold: 0.3, // Adjust this value for fuzziness
            }),
        [],
    );

    // Perform search if there's a query
    const results = useMemo(() => {
        if (!query) return allBlogs;
        return fuse.search(query).map((result) => result.item);
    }, [query, fuse]);

    return (
        <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  2xl:px-32 flex flex-col items-center justify-center">
            <div className="flex w-full justify-between">
                <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
                    {results.length} Posts Found.
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
                {results.slice(0, results.length).map((post, index) => {
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
