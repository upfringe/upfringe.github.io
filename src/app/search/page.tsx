import Search from "@/components/Search";
import SearchResult from "@/components/Search/SearchResult";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  return <div>
    <Search placeholder="Search Blogs..." />
    <SearchResult query={query}/>
  </div>;
};

export default page;
