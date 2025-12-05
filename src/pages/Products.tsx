import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

import tractorMassey from "@/assets/tractor-massey.jpg";
import tractorLovol from "@/assets/tractor-lovol.jpg";
import tractorZoomlion from "@/assets/tractor-zoomlion.jpg";
import farmImplements from "@/assets/farm-implements.jpg";
import spareParts from "@/assets/spare-parts.jpg";

const categories = [
  { id: "all", name: "All Products" },
  { id: "massey-ferguson", name: "Massey Ferguson" },
  { id: "lovol", name: "Lovol" },
  { id: "zoomlion", name: "Zoomlion" },
  { id: "implements", name: "Farm Implements" },
  { id: "spare-parts", name: "Spare Parts" },
];

const products = [
  {
    id: 1,
    name: "Massey Ferguson MF 375",
    category: "massey-ferguson",
    image: tractorMassey,
    description: "75HP 2WD tractor perfect for medium-scale farming operations. Known for reliability and fuel efficiency.",
    specs: ["75 HP", "2WD", "8 Forward Gears", "Diesel Engine"],
  },
  {
    id: 2,
    name: "Massey Ferguson MF 385",
    category: "massey-ferguson",
    image: tractorMassey,
    description: "85HP 4WD tractor with superior traction and power for demanding agricultural tasks.",
    specs: ["85 HP", "4WD", "8 Forward Gears", "Power Steering"],
  },
  {
    id: 3,
    name: "Lovol M504-B",
    category: "lovol",
    image: tractorLovol,
    description: "50HP compact tractor ideal for small to medium farms. Excellent value proposition.",
    specs: ["50 HP", "4WD", "Compact Design", "Hydraulic Lift"],
  },
  {
    id: 4,
    name: "Lovol M904-B",
    category: "lovol",
    image: tractorLovol,
    description: "90HP heavy-duty tractor with advanced features for large-scale operations.",
    specs: ["90 HP", "4WD", "AC Cabin", "Electronic Display"],
  },
  {
    id: 5,
    name: "Zoomlion RK704",
    category: "zoomlion",
    image: tractorZoomlion,
    description: "70HP versatile tractor with modern technology and excellent performance.",
    specs: ["70 HP", "4WD", "Synchromesh Gearbox", "ROPS Certified"],
  },
  {
    id: 6,
    name: "Zoomlion RK1004",
    category: "zoomlion",
    image: tractorZoomlion,
    description: "100HP powerful tractor for heavy-duty farming and commercial agriculture.",
    specs: ["100 HP", "4WD", "Turbo Engine", "Deluxe Cabin"],
  },
  {
    id: 7,
    name: "Disc Plough (3 Disc)",
    category: "implements",
    image: farmImplements,
    description: "Heavy-duty 3-disc plough for primary tillage. Suitable for all soil types.",
    specs: ["3 Discs", "26\" Diameter", "Adjustable Angle", "Cat II Hitch"],
  },
  {
    id: 8,
    name: "Disc Harrow (20 Disc)",
    category: "implements",
    image: farmImplements,
    description: "20-disc harrow for secondary tillage and seedbed preparation.",
    specs: ["20 Discs", "22\" Diameter", "Hydraulic Depth", "Heavy Frame"],
  },
  {
    id: 9,
    name: "Boom Sprayer (600L)",
    category: "implements",
    image: farmImplements,
    description: "600-liter tractor-mounted boom sprayer for efficient crop protection.",
    specs: ["600L Tank", "12m Boom", "Adjustable Nozzles", "PTO Pump"],
  },
  {
    id: 10,
    name: "Engine Parts Kit",
    category: "spare-parts",
    image: spareParts,
    description: "Complete engine service kit including filters, gaskets, and seals.",
    specs: ["Oil Filter", "Air Filter", "Fuel Filter", "Gasket Set"],
  },
  {
    id: 11,
    name: "Hydraulic Components",
    category: "spare-parts",
    image: spareParts,
    description: "Genuine hydraulic parts for tractor lift systems and implements.",
    specs: ["Hydraulic Pump", "Control Valve", "Cylinder Seals", "Hoses"],
  },
  {
    id: 12,
    name: "Transmission Parts",
    category: "spare-parts",
    image: spareParts,
    description: "Quality transmission components for smooth power delivery.",
    specs: ["Clutch Kit", "Gears", "Bearings", "Synchros"],
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Premium Agricultural Machinery
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Explore our comprehensive range of tractors, implements, and spare parts from world-leading manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href="tel:+2348099933644">
                        <Phone className="h-4 w-4" />
                        Contact for Price
                      </a>
                    </Button>
                    <Button variant="whatsapp" size="sm" asChild>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us for custom orders and special requirements. We can source any agricultural machinery you need.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
