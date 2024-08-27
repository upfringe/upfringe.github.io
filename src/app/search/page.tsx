'use client'
import React from "react";
import Search from "@/components/Search";
import SearchResult from "@/components/Search/SearchResult";
import { useSearchParams } from 'next/navigation'

const SearchPage = () => {
    const params= useSearchParams();
  const query = params.get("query") || "";
  return <div>
    <Search placeholder="Search Blogs..." />
    <SearchResult query={query}/>
  </div>;
};

export default SearchPage;
