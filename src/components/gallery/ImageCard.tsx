import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

export const ImageCard = ({ src, alt, index, onClick }: ImageCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (currentSrc === src) {
      // First attempt failed, try with unencoded parentheses
      const altSrc = src.replace(/%28/g, "(").replace(/%29/g, ")");
      if (altSrc !== src) {
        console.log("Retrying with unencoded parentheses:", altSrc);
        setCurrentSrc(altSrc);
        return;
      }
      // Try completely unencoded
      try {
        const unencoded = decodeURIComponent(src);
        if (unencoded !== src) {
          console.log("Retrying with unencoded path:", unencoded);
          setCurrentSrc(unencoded);
          return;
        }
      } catch (e) {
        // decodeURIComponent failed, continue to error state
      }
    }
    setError(true);
    console.error("Failed to load image after retries:", src);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-muted/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer",
        !loaded && !error && "animate-pulse"
      )}
      data-aos="fade-up"
      data-aos-delay={index * 50}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {error ? (
          <div className="h-full w-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground text-sm">Failed to load</p>
          </div>
        ) : (
          <img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            loading="lazy"
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
              !loaded && "opacity-0"
            )}
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-white text-sm font-medium line-clamp-2">{alt}</p>
      </div>
    </div>
  );
};

