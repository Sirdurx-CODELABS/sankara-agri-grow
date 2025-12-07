import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const currentImage = images[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

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
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none [&>button]:hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Custom Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Previous Button */}
          {hasPrevious && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute left-2 sm:left-4 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
              )}
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
          )}

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <img
              src={currentImage}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          {hasNext && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-2 sm:right-4 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
              )}
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

