// import type { Dispatch, FormEvent, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

// import useSearchHooks from "../../hooks/useSearchHooks";
import type { SearchHeaderProps } from "../../types/SearchInterface";
import Icon from "../Icons/Icon";
import SearchCategoriesField from "../Input/SearchCategoriesField";
import SearchControl from "../Input/SearchControl";

const SearchHeader = ({
  search,
  setSearch,
  handleSearch,
  category = "photos",
  query,
}: SearchHeaderProps) => {
  // const { query } = useSearchHooks();

  const navigate = useNavigate();

  const handleCategoryChange = (value: "photos" | "videos") => {
    if (!query) return;

    navigate(`/search/${value}/${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      <form
        className="flex items-center max-w-lg mx-auto space-x-2 w-full"
        onSubmit={handleSearch}
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full flex">
          {/* <div className="absolute text-body inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
            <Icon name="search" size={24} />
          </div> */}

          <SearchCategoriesField
            category={category}
            setCategory={handleCategoryChange}
          />
          <SearchControl
            search={search}
            setSearch={setSearch}
            // placeholder="Search photos..."
            placeholder={
              category === "photos" ? "Search photos..." : "Search videos..."
            }
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center shrink-0 text-body-subtle bg-transparent border border-olive-700 hover:bg-olive-700 hover:border-olive-700 focus:ring-brand-medium shadow-xs rounded-full w-10 h-10 focus:outline-none cursor-pointer outline-0 focus:outline-0 min-h-10.5 min-w-10.5"
        >
          <Icon name="search" size={20} />
          <span className="sr-only">Icon description</span>
        </button>
      </form>
      <h1 className="text-white text-4xl capitalize">
        Free {query} {category === "photos" ? "Photos" : "Videos"}
      </h1>
    </>
  );
};

export default SearchHeader;
