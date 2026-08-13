import useGalleryHooks from "../../hooks/useGalleryHooks";
import type { MasonryGalleryProps } from "../../types/GalleryInterface";
import type { Photo } from "../../types/photo";
import LoadMoreButton from "../Buttons/LoadMoreButton";
import Container from "../Container/Container";
import GalleryCard from "./GalleryCard";
// import type { Photo } from "../../types/photo"
import { useCallback } from "react";

const MasonryGallery = ({
  columnCount = 4,
  loadStep = 30,
  gap = "gap-4",
  className = "",
}: MasonryGalleryProps) => {
  const {
    photoColumns,
    visible,
    setVisible,
    photos,
    handlerDownloadImage,
    loading,
    error,
  } = useGalleryHooks();

  const handleLoadMore = useCallback(() => {
    setVisible((prev) => prev + loadStep);
  }, [setVisible, loadStep]);

  const hasMore = visible < photos.length;

  const renderContent = () => {
    // 1. First-load loading state
    if (loading) {
      return (
        <p className="text-center text-sm text-gray-400 py-16">
          Loading photos...
        </p>
      );
    }

    // 2. API responded but returned nothing
    if (!photos.length) {
      return (
        <p className="text-center text-sm text-gray-400 py-16">
          No photos available
        </p>
      );
    }

    // 3. API responded with data
    return (
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        style={{
          ...(photos
            ? { gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }
            : {}),
        }}
      >
        {photoColumns.map((column: Photo[], columnIndex: number) => (
          <div key={`column-${columnIndex}`} className={`grid ${gap}`}>
            {column.map((item) => (
              <GalleryCard
                key={item.id}
                // photo={item}
                item={item}
                category="photos"
                onDownload={handlerDownloadImage}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`relative pb-32 ${className}`}>
      <Container>
        {error && (
          <p className="text-center text-sm text-red-500 py-16">{error}</p>
        )}

        {renderContent()}

        {/* {visible < photos.length && <LoadMoreButton onClick={handleLoadMore} />} */}
        {hasMore && !loading && <LoadMoreButton onClick={handleLoadMore} />}
      </Container>
    </div>
  );
};

export default MasonryGallery;
