import type { SetStateAction, Dispatch } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type Category = {
  keyword: string;
  image: string;
};
