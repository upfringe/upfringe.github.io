"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch=useDebouncedCallback((term: string)=> {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  },300);

  return(
  <div className="relative flex flex-1 flex-shrink-0 p-1">
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <input
      className="group block w-full text-dark rounded-md border border-slate-200 py-4 pl-10 text-lg outline-2 placeholder:text-slate-500"
      placeholder={placeholder}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      autoFocus
    />
    <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 group-focus:text-slate-900" />
  </div>
  )};

export default Search;
