import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { Camera, GraduationCap, Bus, Users, BookOpen, Sparkles, Image as ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import farmImplements from "@/assets/farm-implements.jpg";

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

const categories = [
  { id: "all", name: "All Photos", icon: Camera, color: "from-blue-500 to-cyan-500" },
  { id: "student-visit", name: "Student Visit", icon: GraduationCap, color: "from-purple-500 to-pink-500" },
  { id: "excursion", name: "Excursion", icon: Bus, color: "from-green-500 to-emerald-500" },
  { id: "ecowas-visit", name: "ECOWAS Visit", icon: Users, color: "from-orange-500 to-red-500" },
  { id: "workshop", name: "Workshop", icon: BookOpen, color: "from-indigo-500 to-blue-500" },
];

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

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

  const activeTab = categories.find(cat => cat.id === activeCategory);

  return (
    <Layout>
      {/* Hero Section - Gallery with Exhibition Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/new/backgrounds/bglaeste.jpeg"
            alt="Agricultural exhibition and machinery showcase"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 z-10" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-white font-semibold text-sm">Kura 2025 Exhibition</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Photo
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              Relive the highlights from our exhibition. Browse through memorable moments showcasing our products, services, and vibrant community.
            </p>

            {/* Stats */}
            <div 
              className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-white">{images.length}</div>
                    <div className="text-xs text-white/70">Photos</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-white">5</div>
                    <div className="text-xs text-white/70">Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Gallery Section with Modern Tabs */}
      <section className="py-20 lg:py-32 bg-background relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Exhibition Moments
            </h2>
            <p className="text-muted-foreground text-lg">
              Browse through our collection of memorable moments from Kura 2025
            </p>
          </div>

          {/* Modern Category Tabs with Glassmorphism */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Scrollable Tab Container */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-2" data-aos="fade-up" data-aos-delay="100">
              <TabsList className="inline-flex p-1.5 bg-white/50 dark:bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl min-w-max">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className={cn(
                        "flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap",
                        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg",
                        "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{cat.name}</span>
                      <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab Content with Category Headers */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {/* Category Header */}
                {category.id !== "all" && (
                  <div className="mb-10 text-center" data-aos="fade-up">
                    <div className={cn(
                      "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br mb-4 shadow-lg",
                      category.color
                    )}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {category.id === "student-visit" && "Highlights from student visits during the Kura 2025 Exhibition"}
                      {category.id === "excursion" && "Excursion activities and field visits during the exhibition"}
                      {category.id === "ecowas-visit" && "Special moments from the ECOWAS delegation visit"}
                      {category.id === "workshop" && "Workshop sessions and training activities during the exhibition"}
                    </p>
                  </div>
                )}

                {/* Image Grid */}
                {images.length > 0 ? (
                  <ImageGrid images={images} />
                ) : (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
                      <Camera className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-lg">Loading gallery...</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
