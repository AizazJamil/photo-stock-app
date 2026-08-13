/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";

import {
  useGalleryHooks,
  useNavigate,
  Container,
  SearchHeader,
  useSearchHooks,
  GalleryCard,
} from "./index";
// import { fetchPhotos, fetchVideo } from "../api/api";

const Search = () => {
  const { photos, videos, query, loading, category } = useSearchHooks();
  const [search, setSearch] = useState(query ?? "");
  const [prevQuery, setPrevQuery] = useState(query);
  const { handlerDownloadImage } = useGalleryHooks();
  // const [category, setCategory] = useState<"photos" | "videos">("photos");
  // const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  // Adjust state during render instead of in an effect (React docs pattern)
  if (query !== prevQuery) {
    setPrevQuery(query);
    setSearch(query ?? "");
  }

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (!search.trim()) return;

    // try {
    //   if (category === "photos") {
    //     const data = await fetchPhotos(search);
    //     setVideos(data.photos);
    //   } else if (category === "videos") {
    //     const data = await fetchVideo(search);
    //     setVideos(data.videos);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }

    navigate(`/search/${category}/${encodeURIComponent(search.trim())}`);
  };

  // Convert search photos into 4 columns (same as Gallery page)
  const photoColumns = useMemo(() => {
    const columns = 4;
    const cols: any[][] = Array.from({ length: columns }, () => []);

    const items = category === "photos" ? photos : videos;

    items.forEach((item, index) => {
      cols[index % columns].push(item);
    });

    // photos.forEach((photo, index) => {
    //   cols[index % columns].push(photo);
    // });

    // videos.forEach((video, index) => {
    //   cols[index % columns].push(video);
    // });

    return cols;
  }, [photos, videos, category]);

  return (
    <div className="py-35 pb-10">
      <Container>
        <div className="flex flex-col gap-15">
          <SearchHeader
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            category={category}
            query={query}
          />

          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photoColumns.map((column, columnIndex) => (
                <div key={`column-${columnIndex}`} className="grid gap-4">
                  {column.map((item) => (
                    <GalleryCard
                      key={item.id}
                      item={item}
                      // photo={item}
                      // videos={photo.videos}
                      category={category}
                      onDownload={handlerDownloadImage}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Search;
