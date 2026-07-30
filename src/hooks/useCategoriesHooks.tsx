import { useEffect, useMemo, useState } from "react";
import { fetchPhotos } from "../api/api";
import type { Category, Photo } from "../types/photo";

const useCategoriesHooks = () => {
  const [trending] = useState<Photo[]>([]);
  const [visible, setVisible] = useState(7);
  const [trendingCategories, setTrendingCategories] = useState<Category[]>([]);
  const [popularCategories, setPopularCategories] = useState<Category[]>([]);

  const formatCategory = (text: string) => {
    return text
      .replace(/([a-z])([A-Z])/g, "$1 $2") // helloWorld -> hello World
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Hello World
  };

  const trendingKeywords = [
    "worldCup",
    "wedding",
    "graduation",
    "beach",
    "garden",
    "rose",
    "iceCream",
  ];

  const popularKeywords = [
    "wallpapers",
    "background",
    "flowers",
    "dogs",
    "sunset",
    "beach",
    "mountain",
  ];

  // Fetch photos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingResponses, popularResponses] = await Promise.all([
          Promise.all(trendingKeywords.map((keyword) => fetchPhotos(keyword))),
          Promise.all(popularKeywords.map((keyword) => fetchPhotos(keyword))),
        ]);

        const trendingData = trendingKeywords.map((keyword, index) => ({
          keyword,
          image: trendingResponses[index].photos[0]?.src.small || "",
        }));
        setTrendingCategories(trendingData);

        const popularData = popularKeywords.map((keyword, index) => ({
          keyword,
          image: popularResponses[index].photos[0]?.src.small || "",
        }));
        setPopularCategories(popularData);
      } catch (error) {
        console.error("Failed to fetch trending photos:", error);
      }
    };

    fetchData();
  }, []);

  // Photo columns
  const photoTrending = useMemo(() => {
    const columns = 4;
    const visiblePhotos = trending.slice(0, visible);

    const cols: Photo[][] = Array.from({ length: columns }, () => []);

    visiblePhotos.forEach((photo, index) => {
      cols[index % columns].push(photo);
    });

    return cols;
  }, [trending, visible]);

  return {
    trending,
    photoTrending,
    setVisible,
    formatCategory,
    trendingKeywords,
    trendingCategories,
    popularCategories,
  };
};

export default useCategoriesHooks;
