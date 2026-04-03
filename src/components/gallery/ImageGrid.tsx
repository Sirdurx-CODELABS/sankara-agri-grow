import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { Lightbox } from "./Lightbox";

interface ImageGridProps {
  images: string[];
}

export const ImageGrid = ({ images }: ImageGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Modern Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop, 4 col large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {images.map((image, index) => (
          <ImageCard
            key={image}
            src={image}
            alt={`Kura 2025 Exhibition - Image ${index + 1}`}
            index={index}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        onNavigate={handleNavigate}
      />
    </>
  );
};

