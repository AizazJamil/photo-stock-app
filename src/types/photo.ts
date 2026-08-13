import type { SetStateAction, Dispatch } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Gallery Hooks Return Interface
export interface UseGalleryHooksReturn {
  photoColumns?: Photo[][];
  visible?: number;
  setVisible: Dispatch<SetStateAction<number>>;
  popularKeywords?: string[];
  photos: Photo[];
  videos: Video[];
  handlerDownloadImage: (url: string, filename: string) => Promise<void>;
  fetchDataVideo: () => Promise<void>;
  searchGallery: (keyword: string, type: "photos" | "videos") => Promise<void>;
  IsCategory: "photos" | "videos";
  setIsCategory: any;
  loading: boolean;
  error: string | null;
}

// export interface Photo {
//   id: number;
//   alt: string;
//   photographer: string;
//   src: {
//     original: string;
//     large2x: string;
//     large: string;
//     medium: string;
//     small: string;
//     portrait: string;
//     landscape: string;
//     tiny: string;
//   };
// }

// Photo Interface
export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url?: string;
  photographer_id?: number;
  avg_color?: string;
  liked?: boolean;
  alt: string;

  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

// export interface Video {
//   id: number;
//   title: string;
//   description: string;
//   thumbnail: string;
//   src: {
//     original: string;
//     large: string;
//     medium: string;
//     small: string;
//   };
// }

// Video Interface
export interface Video {
  id: number;

  image: string;

  user: {
    name: string;
  };

  video_files: {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    link: string;
  }[];
}

// export interface GalleryProps {
//   photo?: any;
//   video?: any;
//   item: Photo | Video;
//   category?: "photos" | "videos";
//   onDownload: (url: string, filename: string) => void;
// }

// Gallery Props Interface
export type GalleryProps =
  | {
      category: "photos";
      item: Photo;
      onDownload: (url: string, filename: string) => void;
    }
  | {
      category: "videos";
      item: Video;
      onDownload: (url: string, filename: string) => void;
    };

// Category Interface
export type Category = {
  keyword: string;
  image: string;
};
