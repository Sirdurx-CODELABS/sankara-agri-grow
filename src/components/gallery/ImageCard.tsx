import { useState } from "react";
import { cn } from "@/lib/utils";
import { ZoomIn, Eye } from "lucide-react";

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
        "group relative overflow-hidden rounded-3xl bg-white/60 dark:bg-card/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer",
        !loaded && !error && "animate-pulse"
      )}
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 30, 300)}
      onClick={onClick}
    >
      {/* Gradient Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {error ? (
            <div className="h-full w-full flex flex-col items-center justify-center bg-muted/50">
              <Eye className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-muted-foreground text-sm">Image unavailable</p>
            </div>
          ) : (
            <>
              <img
                key={currentSrc}
                src={currentSrc}
                alt={alt}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover transition-all duration-700 group-hover:scale-110",
                  !loaded && "opacity-0"
                )}
                onLoad={() => setLoaded(true)}
                onError={handleError}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Image Number Badge */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                  <span className="text-white text-xs font-semibold">#{index + 1}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-700 rounded-b-3xl" />
      </div>
    </div>
  );
};

