import { Link } from "react-router-dom";
import { ArrowRight, Tractor, Wrench, Settings, Headphones, Shield, Award } from "lucide-react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

import tractorMassey from "@/assets/tractor-massey.jpg";
import tractorLovol from "@/assets/tractor-lovol.jpg";
import tractorZoomlion from "@/assets/tractor-zoomlion.jpg";
import farmImplements from "@/assets/farm-implements.jpg";
import spareParts from "@/assets/spare-parts.jpg";

const products = [
  {
    title: "Massey Ferguson Tractors",
    description: "World-renowned reliability and performance for all farming needs. Built to last generations.",
    image: tractorMassey,
    category: "Tractors",
    href: "/products?category=massey-ferguson",
  },
  {
    title: "Lovol Tractors",
    description: "Chinese engineering excellence with advanced features and competitive pricing.",
    image: tractorLovol,
    category: "Tractors",
    href: "/products?category=lovol",
  },
  {
    title: "Zoomlion Tractors",
    description: "Innovative agricultural solutions with cutting-edge technology and robust design.",
    image: tractorZoomlion,
    category: "Tractors",
    href: "/products?category=zoomlion",
  },
  {
    title: "Farm Implements",
    description: "Complete range of ploughs, harrows, sprayers, and cultivation equipment.",
    image: farmImplements,
    category: "Implements",
    href: "/products?category=implements",
  },
  {
    title: "Genuine Spare Parts",
    description: "Original manufacturer parts ensuring optimal performance and longevity.",
    image: spareParts,
    category: "Parts",
    href: "/products?category=spare-parts",
  },
];

const services = [
  {
    title: "Tractor Sales",
    description: "Premium tractors from leading global brands with flexible payment options.",
    icon: Tractor,
  },
  {
    title: "Farm Implements",
    description: "Complete range of farming equipment for tillage, planting, and harvesting.",
    icon: Settings,
  },
  {
    title: "Spare Parts Supply",
    description: "Genuine OEM parts with nationwide delivery and competitive pricing.",
    icon: Wrench,
  },
  {
    title: "After-sales Support",
    description: "Dedicated technical support and maintenance services across Nigeria.",
    icon: Headphones,
  },
  {
    title: "Maintenance & Repairs",
    description: "Expert technicians for servicing and repairs of all machinery brands.",
    icon: Shield,
  },
  {
    title: "Farm Mechanization",
    description: "Consultation services to optimize your agricultural operations.",
    icon: Award,
  },
];

const whyChooseUs = [
  { stat: "15+", label: "Years Experience" },
  { stat: "500+", label: "Tractors Delivered" },
  { stat: "24/7", label: "Support Available" },
  { stat: "100%", label: "Genuine Parts" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
            data-aos="fade-up"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Quality Machinery for Nigerian Agriculture
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From world-class tractors to essential farm implements and genuine spare parts, we provide everything you need to power your agricultural success.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <div
                key={product.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div 
            className="text-center mt-12 lg:mt-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 hero-gradient diagonal-cut relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div 
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
            data-aos="fade-up"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Sankara</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Your Trusted Partner in Agricultural Growth
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              With decades of experience and unwavering commitment to quality, we've become Nigeria's preferred choice for agricultural machinery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.label}
                className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="font-display text-5xl md:text-6xl font-bold text-accent mb-3">
                  {item.stat}
                </p>
                <p className="text-primary-foreground/90 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
            data-aos="fade-up"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From sales to support, we offer end-to-end services to keep your farming operations running smoothly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className="text-center mt-12 lg:mt-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div 
            className="max-w-4xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Ready to Power Your Farm?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg lg:text-xl leading-relaxed">
              Contact us today for expert advice on the best machinery for your agricultural needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary shadow-xl hover:scale-105 transition-transform duration-300" asChild>
                <a href="tel:+2348099933644">
                  Call: +234 809 993 3644
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
