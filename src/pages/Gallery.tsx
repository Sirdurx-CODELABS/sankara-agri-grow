import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { Camera } from "lucide-react";
import heroImage from "@/assets/hero-tractor.jpg";

// List of image filenames in public/images/ (excluding videos)
// Note: The actual filenames contain narrow no-break space (\u202f) instead of regular spaces
// In Vite, files in public folder are served from root, so we reference them by filename
const imageFilenames = [
  "WhatsApp Image 2025-12-04 at 4.05.14\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.14\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.14\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.15\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.15\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.15\u202fPM (3).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.15\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.16\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.16\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.16\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.17\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.17\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.17\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.18\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.18\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.18\u202fPM (3).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.18\u202fPM (4).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.18\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.19\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.19\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.19\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.20\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.20\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.20\u202fPM (3).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.20\u202fPM (4).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.20\u202fPM.jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.21\u202fPM (1).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.21\u202fPM (2).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.21\u202fPM (3).jpeg",
  "WhatsApp Image 2025-12-04 at 4.05.21\u202fPM.jpeg",
];


const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Convert image filenames to paths
    // In Vite, files in public folder are served from root
    // Use encodeURIComponent to properly encode all special characters including non-breaking spaces
    const imagePaths = imageFilenames.map((filename) => {
      // encodeURIComponent will properly encode the narrow no-break space (\u202f) and other special chars
      return `/images/${encodeURIComponent(filename)}`;
    });
    setImages(imagePaths);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gallery Background"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm mb-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Camera className="h-8 w-8 text-primary" />
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Photo Gallery
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Kura 2025 – Exhibition Highlights
          </p>
          <div
            className="flex items-center justify-center gap-2 text-white/80"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-sm sm:text-base">
              {images.length} {images.length === 1 ? "Photo" : "Photos"}
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Exhibition Moments
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Relive the highlights from the Kura 2025 Exhibition. Browse through
              our collection of memorable moments, showcasing our products, services,
              and the vibrant community we serve.
            </p>
          </div>

          {images.length > 0 ? (
            <>
              {/* Debug info - remove in production */}
              <div className="mb-4 text-xs text-muted-foreground text-center">
                Debug: {images.length} images loaded. Sample path: {images[0]}
              </div>
              <ImageGrid images={images} />
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading gallery...</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
