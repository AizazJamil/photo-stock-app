/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useLocation } from "react-router-dom";

import Icon from "../Icons/Icon";
import SearchControl from "./SearchControl";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchCategoriesField from "./SearchCategoriesField";
// import { useGalleryHooks } from "../../pages";
// import { fetchVideo } from "../../api/api";
// import { fetchPhotos, fetchVideo } from "../../api/api";

const SearchInput = () => {
  // const location = useLocation();

  const [search, setSearch] = useState("");
  // const [category, setCategory] = useState<"photos" | "videos">("photos");
  const [category, setCategory] = useState<"photos" | "videos">(() => {
    const savedCategory = localStorage.getItem("searchCategory");

    return savedCategory === "videos" || savedCategory === "photos"
      ? savedCategory
      : "photos";
  });
  // const [category, setCategory] = useState<"photos" | "videos">(() => {
  //   return (
  //     (localStorage.getItem("category") as "photos" | "videos") || "photos"
  //   );
  // });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // setIsCategory
  // const { searchGallery } = useGalleryHooks();

  const handleCategoryChange = (value: string) => {
    const selectedCategory = value as "photos" | "videos";
    setCategory(selectedCategory);
    localStorage.setItem("searchCategory", selectedCategory);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();

    // if (!search.trim()) return;
    const value = search.trim();

    if (!value) {
      setError("Please enter something to search.");
      return;
    }

    if (value.length < 3) {
      setError("Search must be at least 3 characters.");
      return;
    }

    // if (IsCategory === "photos") {
    //   await fetchPhotos(value);
    // } else {
    //   await fetchVideo(value);
    // }

    // const apiMap = {
    //   photos: fetchPhotos,
    //   video: fetchVideo,
    // };

    // const data = await apiMap[category](value);
    // console.log(data);

    console.log("Submit category:", category);
    console.log("Saved category:", localStorage.getItem("searchCategory"));

    setError("");
    navigate(`/search/${category}/${encodeURIComponent(search.trim())}`);
  };

  // const handleVideoClick = async () => {
  //   // fetchDataVideo();
  //   console.log(category);
  //   await searchGallery(search.trim(), category);
  // };

  return (
    <div className="flex flex-col gap-3 w-full">
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
            // setCategory={setCategory}
            setCategory={handleCategoryChange}
          />
          <SearchControl
            search={search}
            placeholder={
              category === "photos"
                ? "Search free photos..."
                : "Search free videos..."
            }
            setSearch={(value: any) => {
              setSearch(value);
              setError("");
            }}
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
      {error && (
        <p className="text-red-400 text-sm w-full text-center max-w-lg mx-auto">
          {error}
        </p>
      )}

      {/* <button onClick={handleVideoClick}>Video API</button> */}
    </div>
  );
};

export default SearchInput;
