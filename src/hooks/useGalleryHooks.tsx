/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchPhotos, fetchVideo } from "../api/api";
import type { Photo, UseGalleryHooksReturn, Video } from "../types/photo";
// import { setLoading } from "../redux/features/searchSlice";

const useGalleryHooks = (): UseGalleryHooksReturn => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [IsCategory, setIsCategory] = useState<"photos" | "videos">("photos");
  const [visible, setVisible] = useState<number>(40);

  // Fetch photos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const keywords = [
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

        const responses = await Promise.all(
          keywords.map((keyword) => fetchPhotos(keyword)),
        );

        const allPhotos: Photo[] = responses.flatMap(
          (response) => response.photos,
        );

        const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);

        setPhotos(shuffled);
      } catch (error) {
        console.error("Failed to fetch photos:", error);
      }
    };

    fetchData();
  }, []);

  const fetchDataVideo = async () => {
    // const response = await fetchVideo("videos");
    // // Handle video response
    // console.log("Video response:", response);

    try {
      if (videos.length > 0) {
        console.log("Videos already fetched:", videos);
        return;
      }

      const response = await fetchVideo("nature");
      setVideos(response.videos);
      // console.log(`Video response: ${response}`);
      console.log(response.videos[0].video_files[0].link);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  const searchGallery = async (keyword: string, type: "photos" | "videos") => {
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
    } catch (err) {
      console.log(err);
    }
  };

  // Photo columns
  const photoColumns = useMemo(() => {
    const columns = 4;
    const visiblePhotos = photos.slice(0, visible);

    const cols: Photo[][] = Array.from({ length: columns }, () => []);

    visiblePhotos.forEach((photo, index) => {
      cols[index % columns].push(photo);
    });

    return cols;
  }, [photos, visible]);

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
  };
};

export default useGalleryHooks;
