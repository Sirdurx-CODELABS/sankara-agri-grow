import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const Lightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentImage = images[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrevious) {
        onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight" && hasNext) {
        onNavigate(currentIndex + 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, hasPrevious, hasNext, onNavigate, onClose]);

  const handlePrevious = () => {
    if (hasPrevious) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onNavigate(currentIndex + 1);
    }
  };

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[100vw] w-full h-screen p-0 bg-black/95 backdrop-blur-2xl border-none [&>button]:hidden overflow-hidden">
        {/* Blurred Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={currentImage}
            alt="Background blur"
            className="w-full h-full object-cover opacity-10 blur-3xl scale-110"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Top Bar - Counter and Actions */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-50 flex items-center justify-between">
            {/* Counter */}
            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <span className="text-white font-semibold text-sm sm:text-base">
                {currentIndex + 1} / {images.length}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Download Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl"
                asChild
              >
                <a href={currentImage} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  <span className="sr-only">Download image</span>
                </a>
              </Button>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl"
                onClick={onClose}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>

          {/* Image Modal Card - Centered with Max Dimensions */}
          <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center" style={{ maxHeight: 'calc(100vh - 180px)' }}>
            {/* Previous Button */}
            {hasPrevious && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 sm:-left-16 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl hover:scale-110"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">Previous image</span>
              </Button>
            )}

            {/* Image Container Card */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden mx-12 sm:mx-20">
              {/* Loading State */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-white animate-spin" />
                </div>
              )}

              {/* Image with Proper Containment */}
              <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <img
                  src={currentImage}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className={cn(
                    "max-w-full max-h-full object-contain rounded-2xl transition-opacity duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    maxHeight: 'calc(100vh - 240px)',
                    maxWidth: 'calc(100vw - 200px)',
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>

            {/* Next Button */}
            {hasNext && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 sm:-right-16 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl hover:scale-110"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">Next image</span>
              </Button>
            )}
          </div>

          {/* Bottom Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-[90vw] overflow-x-auto">
            {images.slice(Math.max(0, currentIndex - 5), Math.min(images.length, currentIndex + 6)).map((_, idx) => {
              const actualIndex = Math.max(0, currentIndex - 5) + idx;
              return (
                <button
                  key={actualIndex}
                  onClick={() => onNavigate(actualIndex)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0",
                    actualIndex === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Go to image ${actualIndex + 1}`}
                />
              );
            })}
          </div>

          {/* Keyboard Hints - Desktop Only */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-4 text-white/60 text-xs">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/20">←</kbd>
              <span>Previous</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/20">→</kbd>
              <span>Next</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/20">ESC</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

