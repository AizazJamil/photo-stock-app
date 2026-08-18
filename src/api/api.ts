import axios from "axios";

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
// const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
// const TENOR_API_KEY = import.meta.env.VITE_TENOR_API_KEY;

const API_URL_PHOTOS = "https://api.pexels.com/v1/search";
const API_URL_VIDEOS = "https://api.pexels.com/v1/videos/search";

export async function fetchVideo(query: string, per_page: number = 20) {
  if (!PEXELS_API_KEY) {
    throw new Error("Pexels API key is missing");
  }
  const response = await axios.get(API_URL_VIDEOS, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
    params: {
      query,
      per_page,
    },
  });
  return response.data;
}

export async function fetchPhotos(query: string, per_page: number = 20) {
  if (!PEXELS_API_KEY) {
    throw new Error("Pexels API key is missing");
  }
  const response = await axios.get(API_URL_PHOTOS, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
    params: {
      query,
      per_page,
    },
  });
  return response.data;
}
