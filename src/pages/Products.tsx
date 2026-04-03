import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageCircle, Tractor, Wheat, Wrench, Cog, Sparkles, Search, Filter, ArrowRight, CheckCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/hero-tractor.jpg";
import MasseyFergusonMF3752WD from "@/assets/Massey_Ferguson_MF_375_2WD.jpeg";
import MasseyFergusonMF3852WD from "@/assets/Massey_Ferguson_MF_385_2WD.jpeg";
import ZoomlionRKSERIES5044WD from "@/assets/Zoomlion_RK_SERIES_504_4WD.jpeg";
import Lovol754HSeries4WD from "@/assets/tractor-lovol.jpg";
import tractorZoomlion from "@/assets/tractor-zoomlion.jpg";
import farmImplements from "@/assets/farm-implements.jpg";
import LovolHarvesterAF108 from "@/assets/Lovol_Harvester_AF108.jpeg";
import LovolHarvesterRG108 from "@/assets/LovolHarvesterRG108.jpeg";
import LovolRG108Manual from "@/assets/Lovol_RG108_(Manual).jpeg";
import ZoomlionCrawlerTypeHarvesterZL105 from "@/assets/ZoomlionCrawlerTypeHarvesterZL105.jpeg";
import TippingTrailer from "@/assets/TippingTrailer.jpeg";
import OffsetDiscPlough from "@/assets/OffsetDiscPlough.jpeg";
import MouldBoardPlough from "@/assets/MouldBoardPlough.jpeg";
import DiscRidger from "@/assets/DiscRidger.jpeg";
import MouldBoardRidger from "@/assets/MouldBoardRidger.jpeg";
import AlvanBlanchDiscHarrow from "@/assets/AlvanBlanchDiscHarrow.jpeg";
import BamfordBaler from "@/assets/BamfordBaler.jpeg";
import BamfordForageHarvesterChopper from "@/assets/BamfordForageHarvesterChopper.jpeg";
import ShrubmasterRotarySlasher from "@/assets/ShrubmasterRotarySlasher.jpeg";
import TataBoomSprayer from "@/assets/TataBoomSprayer.jpeg";
import TataPowerTrailer from "@/assets/TataPowerTrailer.jpeg";
import PTataPowerTiller from "@/assets/13HPTataPowerTiller.jpeg";
import RiceMill from "@/assets/RiceMill.jpeg";
import RiceTransplanter from "@/assets/RiceTransplanter.jpeg";
import FertilizerApplicator from "@/assets/FertilizerApplicator.jpeg";
import FertilizerApplicator4Planter from "@/assets/FertilizerApplicator4Planter.jpeg";
// TODO: Add the actual image file: lovol-harvester-rg108.jpg to src/assets/
// For now, using farmImplements as placeholder
const lovolHarvesterRG108 = farmImplements;

// Product categories
const categories = [
  { id: "all", name: "All Products", icon: null },
  { id: "tractors", name: "Tractors", icon: Tractor },
  { id: "harvesters", name: "Combine Harvesters", icon: Wheat },
  { id: "implements", name: "Implements", icon: Wrench },
  { id: "other", name: "Other Machinery", icon: Cog },
];

// All products
const allProducts = [
  // TRACTORS - Massey Ferguson
  {
    id: 1,
    name: "Massey Ferguson MF 375 2WD",
    category: "tractors",
    subcategory: "massey-ferguson",
    image: MasseyFergusonMF3752WD,
    description: "75HP 2WD tractor perfect for medium-scale farming operations. Known for reliability, fuel efficiency, and ease of operation. Ideal for plowing, harrowing, and general farm work.",
    specs: ["75 HP", "2WD", "8 Forward Gears", "2 Reverse Gears", "Diesel Engine", "Power Steering", "Hydraulic Lift"],
  },
  {
    id: 2,
    name: "Massey Ferguson MF 385 2WD",
    category: "tractors",
    subcategory: "massey-ferguson",
    image: MasseyFergusonMF3852WD,
    description: "85HP 2WD tractor with superior power and performance. Designed for heavy-duty farming operations with excellent fuel economy and durability.",
    specs: ["85 HP", "2WD", "12 Forward Gears", "4 Reverse Gears", "Turbo Diesel", "Power Steering", "ROPS Certified"],
  },
  // TRACTORS - Lovol
  {
    id: 3,
    name: "Lovol 754 H-SERIES 4WD",
    category: "tractors",
    subcategory: "lovol",
    image: Lovol754HSeries4WD,
    description: "75HP 4WD tractor from Lovol's H-Series. Features advanced technology, excellent traction, and superior performance for all farming conditions.",
    specs: ["75 HP", "4WD", "Synchromesh Transmission", "Diesel Engine", "AC Cabin Available", "Hydraulic System"],
  },
  // TRACTORS - Zoomlion
  {
    id: 4,
    name: "Zoomlion RK SERIES 504 - 4WD",
    category: "tractors",
    subcategory: "zoomlion",
    image: ZoomlionRKSERIES5044WD,
    description: "50HP 4WD compact tractor from Zoomlion RK Series. Perfect for small to medium farms with excellent maneuverability and fuel efficiency.",
    specs: ["50 HP", "4WD", "Compact Design", "Synchromesh Gearbox", "Diesel Engine", "ROPS"],
  },
  {
    id: 5,
    name: "Zoomlion RK SERIES 754 - 4WD",
    category: "tractors",
    subcategory: "zoomlion",
    image: tractorZoomlion,
    description: "75HP 4WD tractor offering powerful performance and versatility. Ideal for various agricultural applications with modern features.",
    specs: ["75 HP", "4WD", "12 Forward Gears", "Turbo Engine", "Power Steering", "Hydraulic Lift"],
  },
  {
    id: 6,
    name: "Zoomlion RK SERIES 904 - 4WD",
    category: "tractors",
    subcategory: "zoomlion",
    image: tractorZoomlion,
    description: "90HP 4WD heavy-duty tractor for large-scale farming operations. Features advanced technology and superior power for demanding tasks.",
    specs: ["90 HP", "4WD", "16 Forward Gears", "Turbo Diesel", "Deluxe Cabin", "Electronic Display"],
  },
  // COMBINE HARVESTERS - Lovol
  {
    id: 7,
    name: "Lovol Harvester AF108",
    category: "harvesters",
    subcategory: "lovol",
    image: LovolHarvesterAF108,
    description: "Advanced combine harvester from Lovol with automatic features. Designed for efficient grain harvesting with minimal grain loss.",
    specs: ["Auto Feed System", "Grain Tank Capacity", "Cutting Width", "Threshing System", "Straw Chopper"],
  },
  {
    id: 8,
    name: "Lovol Harvester RG108",
    category: "harvesters",
    subcategory: "lovol",
    image: LovolHarvesterRG108,
    description: "Reliable combine harvester with robust design. Suitable for various grain crops with excellent harvesting efficiency.",
    specs: ["Reliable Performance", "Grain Tank", "Cutting Width", "Threshing Mechanism", "Straw Management"],
  },
  {
    id: 9,
    name: "Lovol RG108 (Manual)",
    category: "harvesters",
    subcategory: "lovol",
    image: LovolRG108Manual,
    description: "Manual control version of the RG108 harvester. Cost-effective solution for farmers who prefer manual operation.",
    specs: ["Manual Controls", "Grain Tank", "Cutting Width", "Manual Threshing", "Affordable Option"],
  },
  // COMBINE HARVESTERS - Zoomlion
  {
    id: 10,
    name: "Zoomlion Crawler Type Harvester ZL105",
    category: "harvesters",
    subcategory: "zoomlion",
    image: ZoomlionCrawlerTypeHarvesterZL105,
    description: "Crawler-type combine harvester designed for challenging terrain. Excellent traction and stability for wet or uneven fields.",
    specs: ["Crawler Track", "High Traction", "Grain Tank", "Cutting Width", "Stable Operation"],
  },
  // IMPLEMENTS
  {
    id: 11,
    name: "Tipping Trailer",
    category: "implements",
    subcategory: "trailers",
    image: TippingTrailer,
    description: "Heavy-duty tipping trailer for efficient transport of crops, materials, and farm produce. Hydraulic tipping mechanism for easy unloading.",
    specs: ["Hydraulic Tipping", "Various Capacities", "Heavy-Duty Construction", "Tractor Mounted"],
  },
  {
    id: 12,
    name: "Offset Disc Plough",
    category: "implements",
    subcategory: "ploughs",
    image: OffsetDiscPlough,
    description: "Offset disc plough for primary tillage operations. Designed to work in hard and stony soils with excellent penetration.",
    specs: ["Offset Design", "Multiple Discs", "Adjustable Depth", "Heavy-Duty Frame"],
  },
  {
    id: 13,
    name: "Mould Board Plough",
    category: "implements",
    subcategory: "ploughs",
    image: MouldBoardPlough,
    description: "Traditional mould board plough for deep tillage. Turns soil effectively, burying crop residues and preparing seedbeds.",
    specs: ["Mould Board Design", "Deep Tillage", "Soil Inversion", "Various Sizes"],
  },
  {
    id: 14,
    name: "Disc Ridger",
    category: "implements",
    subcategory: "ridgers",
    image: DiscRidger,
    description: "Disc ridger for creating ridges and furrows. Essential for row crop farming and water management.",
    specs: ["Disc Design", "Ridge Formation", "Adjustable Width", "Tractor Mounted"],
  },
  {
    id: 15,
    name: "Mould Board Ridger",
    category: "implements",
    subcategory: "ridgers",
    image: MouldBoardRidger,
    description: "Mould board ridger for creating well-defined ridges. Ideal for crops requiring raised beds and proper drainage.",
    specs: ["Mould Board Design", "Ridge Formation", "Deep Penetration", "Various Sizes"],
  },
  {
    id: 16,
    name: "Alvan Blanch Disc Harrow",
    category: "implements",
    subcategory: "harrows",
    image: AlvanBlanchDiscHarrow,
    description: "High-quality disc harrow from Alvan Blanch for secondary tillage. Excellent for seedbed preparation and weed control.",
    specs: ["Alvan Blanch Brand", "Multiple Discs", "Adjustable Angle", "Heavy-Duty Construction"],
  },
  // OTHER MACHINERY
  {
    id: 17,
    name: "Bamford Baler",
    category: "other",
    subcategory: "balers",
    image: BamfordBaler,
    description: "Reliable baler from Bamford for creating compact bales of hay, straw, or other crops. Essential for efficient storage and transport.",
    specs: ["Bamford Brand", "Bale Formation", "Various Bale Sizes", "PTO Driven"],
  },
  {
    id: 18,
    name: "Bamford Forage Harvester (Chopper)",
    category: "other",
    subcategory: "harvesters",
    image: BamfordForageHarvesterChopper,
    description: "Forage harvester/chopper for cutting and chopping green crops for silage. Ensures uniform chop length for better fermentation.",
    specs: ["Forage Chopping", "Adjustable Chop Length", "PTO Driven", "High Capacity"],
  },
  {
    id: 19,
    name: "Shrubmaster Rotary Slasher",
    category: "other",
    subcategory: "slashers",
    image: ShrubmasterRotarySlasher,
    description: "Heavy-duty rotary slasher for clearing bushes, shrubs, and overgrown vegetation. Powerful cutting action for land clearing.",
    specs: ["Rotary Cutting", "Heavy-Duty Blades", "Land Clearing", "Tractor Mounted"],
  },
  {
    id: 20,
    name: "Tata Boom Sprayer",
    category: "other",
    subcategory: "sprayers",
    image: TataBoomSprayer,
    description: "Tractor-mounted boom sprayer for efficient crop protection. Wide coverage area with adjustable nozzles for precise application.",
    specs: ["Boom Design", "Wide Coverage", "Adjustable Nozzles", "Tank Capacity"],
  },
  {
    id: 21,
    name: "7HP Tata Power Tiller",
    category: "other",
    subcategory: "tillers",
    image: TataPowerTrailer,
    description: "Compact 7HP power tiller for small-scale farming. Perfect for vegetable gardens, orchards, and small plots with excellent maneuverability.",
    specs: ["7 HP Engine", "Compact Design", "Easy Operation", "Versatile Use"],
  },
  {
    id: 22,
    name: "13HP Tata Power Tiller",
    category: "other",
    subcategory: "tillers",
    image: PTataPowerTiller,
    description: "More powerful 13HP power tiller for medium-scale operations. Handles tougher soils and larger areas with ease.",
    specs: ["13 HP Engine", "Higher Power", "Durable Construction", "Multiple Attachments"],
  },
  {
    id: 23,
    name: "Tata 6N2018X-G Rice Mill",
    category: "other",
    subcategory: "processing",
    image: RiceMill,
    description: "Complete rice milling machine for processing paddy into polished rice. Efficient and reliable for rice processing operations.",
    specs: ["Rice Processing", "Polishing System", "High Capacity", "Complete System"],
  },
  {
    id: 24,
    name: "Tata Rice Transplanter",
    category: "other",
    subcategory: "planters",
    image: RiceTransplanter,
    description: "Mechanized rice transplanter for efficient seedling transplantation. Reduces labor and ensures uniform planting for better yields.",
    specs: ["Mechanized Planting", "Uniform Spacing", "Labor Saving", "High Efficiency"],
  },
  {
    id: 25,
    name: "Tata 2BYZF-4 No-Till Planter with Fertilizer Applicator",
    category: "other",
    subcategory: "planters",
    image: FertilizerApplicator,
    description: "4-row no-till planter with integrated fertilizer applicator. Plants seeds directly into unplowed fields while applying fertilizer simultaneously.",
    specs: ["4 Rows", "No-Till Design", "Fertilizer Applicator", "Soil Conservation"],
  },
  {
    id: 26,
    name: "Tata 2BYZF-6 No-Till Planter with Fertilizer Applicator",
    category: "other",
    subcategory: "planters",
    image: FertilizerApplicator4Planter,
    description: "6-row no-till planter with fertilizer applicator for larger fields. Increases planting efficiency while preserving soil structure.",
    specs: ["6 Rows", "No-Till Design", "Fertilizer Applicator", "Higher Capacity"],
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section - Products with Tractor Showcase Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/new/backgrounds/bglaeste.jpeg"
            alt="Premium agricultural tractors and machinery"
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
              <span className="text-white font-semibold text-sm">Premium Agricultural Machinery</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Discover Our
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Product Range
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              Explore our comprehensive collection of tractors, harvesters, implements, and specialized machinery from world-leading manufacturers.
            </p>

            {/* Quick Stats */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                { value: "26+", label: "Products" },
                { value: "4", label: "Categories" },
                { value: "100%", label: "Authentic" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
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

      {/* Products Section with Modern Tabs */}
      <section className="py-20 lg:py-32 bg-background relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Browse by Category</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Product Catalog
            </h2>
            <p className="text-muted-foreground text-lg">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
            </p>
          </div>

          {/* Modern Category Tabs with Glassmorphism */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
              <TabsList className="inline-flex p-1.5 bg-white/50 dark:bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300",
                        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg",
                        "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground"
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span className="hidden sm:inline">{cat.name}</span>
                      <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* All Products Tab */}
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* Tractors Tab */}
            <TabsContent value="tractors" className="mt-0">
              <div className="mb-10 text-center" data-aos="fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                  <Tractor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Tractors</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  High-performance tractors from leading manufacturers for all your farming needs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allProducts
                  .filter((p) => p.category === "tractors")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
              </div>
            </TabsContent>

            {/* Combine Harvesters Tab */}
            <TabsContent value="harvesters" className="mt-0">
              <div className="mb-10 text-center" data-aos="fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                  <Wheat className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Combine Harvesters</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Efficient combine harvesters for grain crops with advanced harvesting technology.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allProducts
                  .filter((p) => p.category === "harvesters")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
              </div>
            </TabsContent>

            {/* Implements Tab */}
            <TabsContent value="implements" className="mt-0">
              <div className="mb-10 text-center" data-aos="fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Farm Implements</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive range of implements for tillage, planting, and crop management.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allProducts
                  .filter((p) => p.category === "implements")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
              </div>
            </TabsContent>

            {/* Other Machinery Tab */}
            <TabsContent value="other" className="mt-0">
              <div className="mb-10 text-center" data-aos="fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-4">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Other Machinery</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Specialized machinery including balers, sprayers, tillers, and processing equipment.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allProducts
                  .filter((p) => p.category === "other")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section with Glassmorphism */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div 
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            {/* Glassmorphism Card */}
            <div className="bg-white/40 dark:bg-card/40 backdrop-blur-2xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-lg">
                  <Search className="h-10 w-10 text-white" />
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Can't Find What You Need?
                </h2>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Contact us for custom orders and special requirements. We can source any agricultural machinery you need with competitive pricing and reliable delivery.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: CheckCircle, text: "Custom Orders" },
                    { icon: Star, text: "Best Prices" },
                    { icon: Phone, text: "Expert Support" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <feature.icon className="h-4 w-4 text-primary" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="shadow-xl hover:scale-105 transition-all duration-300 group" asChild>
                    <Link to="/contact">
                      Contact Our Team
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="shadow-lg hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm" asChild>
                    <a href="tel:+2348099933644">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Product Card Component with Glassmorphism
const ProductCard = ({ product, index }: { product: typeof allProducts[0]; index: number }) => {
  return (
    <div
      className="group relative bg-white/60 dark:bg-card/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Gradient Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col h-full">
        {/* Image Container */}
        <div className="aspect-[4/3] overflow-hidden bg-muted/50 relative flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge - Glassmorphism */}
          <div className="absolute top-4 left-4 z-10">
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                {product.category}
              </span>
            </div>
          </div>

          {/* Hover Overlay with Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm lg:text-base mb-6 leading-relaxed line-clamp-3 flex-grow">
            {product.description}
          </p>

          {/* Specs - Glassmorphism Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.specs.slice(0, 3).map((spec, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs text-foreground font-medium"
              >
                {spec}
              </div>
            ))}
            {product.specs.length > 3 && (
              <div className="px-3 py-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-xs text-muted-foreground font-medium">
                +{product.specs.length - 3} more
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 hover:scale-105 transition-all duration-300 shadow-lg group/btn" 
              asChild
            >
              <a href="tel:+2348099933644">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Get Price</span>
                <span className="sm:hidden">Price</span>
              </a>
            </Button>
            <Button 
              variant="whatsapp" 
              size="sm" 
              className="hover:scale-105 transition-all duration-300 shadow-lg" 
              asChild
            >
              <a
                href={`https://wa.me/2348099933644?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-700 rounded-b-3xl" />
      </div>
    </div>
  );
};

export default Products;
