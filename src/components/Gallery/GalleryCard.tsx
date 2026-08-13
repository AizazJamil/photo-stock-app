/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import type { GalleryProps } from "../../types/photo";
import { useRef } from "react";

const GalleryCard = ({ item, category, onDownload }: GalleryProps) => {
  const isPhoto = category === "photos";
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guard against mismatched item/category during transient state updates
  const hasPhotoData = isPhoto && !!item?.src?.large;
  const hasVideoData = !isPhoto && !!item?.video_files[0]?.link;

  const handleMouseEnter = () => {
    // console.log("Enter hover");
    if (!isPhoto && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    // console.log("Leave hover");
    if (!isPhoto && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (!hasPhotoData && !hasVideoData) {
    return null;
  }

  return (
    <article
      className="relative h-full overflow-hidden rounded-base"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        // to={`${item.src.large2x}`}
        to={isPhoto ? item.src.large2x : item.video_files[0].link}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden relative"
      >
        <div className="contain-content h-full rounded-base">
          {category === "photos" ? (
            <img
              src={item.src.large}
              alt={item.alt}
              className="w-full h-full object-cover rounded-base hover:scale-105 transition-transform"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <video
              // controls
              ref={videoRef}
              muted
              playsInline
              loop
              preload="metadata"
              className="w-full h-full rounded-base object-cover object-center"
            >
              <source src={item.video_files[0].link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Link>
      <div className="px-4 py-3 absolute inset-0 bg-transparent opacity-0 hover:opacity-100 transition-all duration-300 z-10 flex items-end justify-between w-full h-full">
        <div className="w-full flex flex-col justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex-1 leading-4">
              <span className="text-white text-sm font-semibold capitalize">
                {/* {item.photographer} */}
                {category === "photos" ? item.photographer : item.user.name}
              </span>
            </div>

            {/* <a
              download
              onClick={() => onDownload(item.src.large2x, item.alt || "image")}
              className="relative backdrop-blur-xs right-2 bg-white/20 rounded-full border border-white hover:bg-white/40 transition-all text-white px-4 py-2 cursor-pointer leading-4"
            >
              Download
            </a> */}

            {category === "photos" && (
              <a
                download
                onClick={() =>
                  onDownload(item.src.large2x, item.alt || "image")
                }
                className="relative backdrop-blur-xs right-2 bg-white/20 rounded-full border border-white hover:bg-white/40 transition-all text-white px-4 py-2 cursor-pointer leading-4"
              >
                Download
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full scale-105 bg-linear-to-t from-slate-950 via-slate-500/10 to-slate-500/0 pointer-events-none"></div>
    </article>
  );
};

export default GalleryCard;
