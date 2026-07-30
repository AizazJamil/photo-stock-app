import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos, fetchVideo } from "../api/api";

const useSearchHooks = () => {
  // const { query } = useParams();
  const { query, category: urlCategory } = useParams<{
    query: string;
    category: "photos" | "videos";
  }>();
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  // const [category, setCategory] = useState<"photos" | "videos">("photos");
  const [loading, setLoading] = useState(false);

  const category: "photos" | "videos" =
    urlCategory === "videos" ? "videos" : "photos";

  useEffect(() => {
    if (!query || !category) return;

    const loadData = async () => {
      try {
        setLoading(true);
        // const response = await fetchPhotos(query);
        // setPhotos(response.photos);

        if (category === "photos") {
          const data = await fetchPhotos(query);

          setPhotos(data.photos);
          setVideos([]);
        } else {
          const data = await fetchVideo(query);

          setVideos(data.videos);
          setPhotos([]);
        }
      } catch (error) {
        console.error("Failed to fetch photos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [query, category]);

  return { photos, videos, query, loading, category };
};

export default useSearchHooks;
