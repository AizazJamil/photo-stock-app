import useGalleryHooks from "../../hooks/useGalleryHooks";
import LoadMoreButton from "../Buttons/LoadMoreButton";
import Container from "../Container/Container";
import GalleryCard from "./GalleryCard";
// import type { Photo } from "../../types/photo";
import { useCallback } from "react";

const MasonryGallery = () => {
  const { photoColumns, visible, setVisible, photos, handlerDownloadImage } =
    useGalleryHooks();

  const handleLoadMore = useCallback(() => {
    setVisible((prev) => prev + 30);
  }, [setVisible]);

  return (
    <div className="relative pb-32">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photoColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="grid gap-4">
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
        {visible < photos.length && <LoadMoreButton onClick={handleLoadMore} />}
      </Container>
    </div>
  );
};

export default MasonryGallery;
