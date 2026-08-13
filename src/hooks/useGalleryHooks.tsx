/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchPhotos, fetchVideo } from "../api/api";
import type { Photo, UseGalleryHooksReturn, Video } from "../types/photo";
// import { setLoading } from "../redux/features/searchSlice";

const DEFAULT_KEYWORD = [
  "nature",
  "cars",
  "mountains",
  "technology",
  "cats",
  "dogs",
  "food",
  "travel",
  "flowers",
  "ocean",
];

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const useGalleryHooks = (columnCount: number = 4): UseGalleryHooksReturn => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [IsCategory, setIsCategory] = useState<"photos" | "videos">("photos");
  const [visible, setVisible] = useState<number>(40);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch photos
  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      // try {
      //   // const keywords = [
      //   //   "nature",
      //   //   "cars",
      //   //   "mountains",
      //   //   "technology",
      //   //   "cats",
      //   //   "dogs",
      //   //   "food",
      //   //   "travel",
      //   //   "flowers",
      //   //   "ocean",
      //   // ];

      //   // const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);

      //   setPhotos(shuffled);
      // } catch (error) {
      //   console.error("Failed to fetch photos:", error);
      // }

      try {
        const responses = await Promise.all(
          DEFAULT_KEYWORD.map((keyword) => fetchPhotos(keyword)),
        );

        if (cancelled) return;

        const allPhotos: Photo[] = responses.flatMap(
          (response) => response.photos,
        );
        setPhotos(shuffle(allPhotos));
      } catch (error) {
        console.error("Failed to fetch photos:", error);
        setError("Failed to load photos");
      } finally {
        if (cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  const fetchDataVideo = useCallback(async () => {
    // const response = await fetchVideo("videos");
    // // Handle video response
    // console.log("Video response:", response);

    if (videos.length > 0) return;

    setLoading(true);
    setError(null);

    try {
      // if (videos.length > 0) {
      //   console.log("Videos already fetched:", videos);
      //   return;
      // }

      const response = await fetchVideo("nature");
      setVideos(response.videos);
      // console.log(`Video response: ${response}`);
      console.log(response.videos[0].video_files[0].link);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setError("Failed to load videos.");
    } finally {
      setLoading(false);
    }
  }, [videos.length]);

  const searchGallery = useCallback(
    async (keyword: string, type: "photos" | "videos") => {
      setLoading(true);
      setError(null);
      try {
        if (type === "photos") {
          const response = await fetchPhotos(keyword);
          setPhotos(response.photos);
          setVideos([]);
        } else {
          const response = await fetchVideo(keyword);
          setVideos(response.videos);
          console.log(response);
          setPhotos([]);
        }

        setIsCategory(type);
        setVisible(40);
      } catch (err) {
        console.log("Search failed:", err);
        setError("Search failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  // Photo columns
  const photoColumns = useMemo(() => {
    // const columns = 4;
    const visiblePhotos = photos.slice(0, visible);

    const cols: Photo[][] = Array.from({ length: columnCount }, () => []);

    visiblePhotos.forEach((photo, index) => {
      cols[index % columnCount].push(photo);
    });

    return cols;
  }, [photos, visible, columnCount]);

  // Download image handler
  const handlerDownloadImage = useCallback(
    async (url: string, filename: string) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        link.remove();

        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Download failed:", error);
      }
    },
    [],
  );

  return {
    photoColumns,
    visible,
    setVisible,
    photos,
    handlerDownloadImage,
    videos,
    fetchDataVideo,
    searchGallery,
    IsCategory,
    setIsCategory,
    loading,
    error,
  };
};

export default useGalleryHooks;
