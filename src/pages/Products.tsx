import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageCircle, Tractor, Wheat, Wrench, Cog } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Agricultural machinery and tractors"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/85" />
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20 animate-pulse" />
          {/* Additional Gradient Blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        </div>
        
        {/* Centered Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-10">
          <div 
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider mb-6 block">
              Our Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Premium Agricultural Machinery
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Explore our comprehensive range of tractors, combine harvesters, implements, and specialized machinery from world-leading manufacturers.
            </p>
          </div>
        </div>

        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Products Section with Tabs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1 bg-muted/50 mb-8 lg:mb-12 overflow-x-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
            data-aos="fade-up"
          >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span className="text-sm font-semibold">{cat.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* All Products Tab */}
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {allProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
            </TabsContent>

            {/* Tractors Tab */}
            <TabsContent value="tractors" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Tractors</h2>
                <p className="text-muted-foreground">
                  High-performance tractors from leading manufacturers for all your farming needs.
                </p>
              </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {allProducts
                  .filter((p) => p.category === "tractors")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
            </TabsContent>

            {/* Combine Harvesters Tab */}
            <TabsContent value="harvesters" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Combine Harvesters</h2>
                <p className="text-muted-foreground">
                  Efficient combine harvesters for grain crops with advanced harvesting technology.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {allProducts
                  .filter((p) => p.category === "harvesters")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
            </TabsContent>

            {/* Implements Tab */}
            <TabsContent value="implements" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Farm Implements</h2>
                <p className="text-muted-foreground">
                  Comprehensive range of implements for tillage, planting, and crop management.
                </p>
                  </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {allProducts
                  .filter((p) => p.category === "implements")
                  .map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
            </TabsContent>

            {/* Other Machinery Tab */}
            <TabsContent value="other" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Other Machinery</h2>
                <p className="text-muted-foreground">
                  Specialized machinery including balers, sprayers, tillers, and processing equipment.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div 
            className="max-w-3xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Contact us for custom orders and special requirements. We can source any agricultural machinery you need.
            </p>
            <Button size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Product Card Component
const ProductCard = ({ product, index }: { product: typeof allProducts[0]; index: number }) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-muted relative flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content - flex-grow to push button to bottom */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm lg:text-base mb-6 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.specs.map((spec, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-muted text-xs text-muted-foreground font-medium"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Actions - Fixed at bottom */}
        <div className="flex gap-2 mt-auto">
          <Button variant="default" size="sm" className="flex-1 hover:scale-105 transition-transform duration-300" asChild>
            <a href="tel:+2348099933644">
              <Phone className="h-4 w-4" />
              Contact for Price
            </a>
          </Button>
          <Button variant="whatsapp" size="sm" className="hover:scale-105 transition-transform duration-300" asChild>
            <a
              href={`https://wa.me/2348099933644?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
