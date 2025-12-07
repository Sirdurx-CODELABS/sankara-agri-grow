import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Tractor,
  Wrench,
  Settings,
  Headphones,
  Shield,
  Award,
  Truck,
  GraduationCap,
  ArrowRight,
  Cog,
  Gauge,
  Hammer,
  Scissors,
  CheckCircle,
} from "lucide-react";
import spareParts from "@/assets/spare-parts.jpg";

const services = [
  {
    icon: Wrench,
    title: "Tractor Maintenance & Repairs",
    description: "Professional maintenance and repair services by certified technicians. Keep your tractors running at peak performance with scheduled maintenance and emergency repairs.",
    side: "left",
  },
  {
    icon: Settings,
    title: "Farm Implements Installation",
    description: "Expert installation and setup of all farm implements including ploughs, harrows, sprayers, and cultivation equipment. Proper installation ensures optimal performance.",
    side: "right",
  },
  {
    icon: Cog,
    title: "Genuine Spare Parts Supply",
    description: "100% authentic OEM spare parts ensuring optimal performance and longevity. Extensive inventory for all brands with fast nationwide delivery.",
    side: "left",
  },
  {
    icon: Gauge,
    title: "Hydraulics & Transmission Service",
    description: "Specialized service for hydraulic systems and transmission components. Expert diagnostics, repairs, and replacements to keep your machinery operating smoothly.",
    side: "right",
  },
  {
    icon: Truck,
    title: "On-Site Farm Machinery Support",
    description: "Mobile service team available for on-site repairs and maintenance. We come to your farm to minimize downtime and keep your operations running.",
    side: "left",
  },
  {
    icon: Hammer,
    title: "Engine Overhaul & Diagnostics",
    description: "Comprehensive engine diagnostics and complete overhaul services. Expert technicians use advanced equipment to identify and fix engine issues efficiently.",
    side: "right",
  },
  {
    icon: Scissors,
    title: "Harvesting Equipment Services",
    description: "Specialized maintenance and repair services for harvesting equipment. Keep your harvesters, combines, and related machinery in perfect working condition.",
    side: "left",
  },
  {
    icon: CheckCircle,
    title: "Scheduled Preventive Maintenance",
    description: "Proactive maintenance programs designed to prevent breakdowns and extend equipment lifespan. Regular servicing keeps your machinery reliable and efficient.",
    side: "right",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section - Modernized with New Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Different from Homepage and About */}
        <div className="absolute inset-0">
          <img
            src={spareParts}
            alt="Spare parts and service workshop"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark/Green Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/85" />
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20 animate-pulse" />
          {/* Additional Gradient Blend */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        </div>

        {/* Centered Content */}
        <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Our Services Label */}
            <div 
              className="mb-6"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Premium Agricultural Services
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              From sales to support, we offer end-to-end services to keep your farming operations running at peak performance. Expert technicians, genuine parts, and comprehensive solutions.
            </p>

            {/* CTA Buttons - Centered */}
            <div 
              className="flex flex-wrap justify-center gap-4 lg:gap-6"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Services Tree-UI Section */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div 
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Service Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From maintenance to installation, we provide expert services to keep your agricultural machinery operating at peak efficiency.
            </p>
          </div>

          {/* Tree-UI Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Vertical Line - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 z-0" />

            {/* Services Timeline */}
            <div className="space-y-12 lg:space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isLeft = service.side === "left";

                return (
              <div
                key={service.title}
                    className="relative flex flex-col lg:flex-row items-center"
                    data-aos={isLeft ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    data-aos-duration="800"
                  >
                    {/* Left Side Content - Desktop */}
                    {isLeft && (
                      <div className="hidden lg:flex flex-1 justify-end pr-8">
                        <div className="w-full max-w-md text-right">
                          <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                            <div className="flex items-start gap-4 justify-end mb-4">
                              <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Icon className="h-7 w-7 text-primary-foreground" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                  {service.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Central Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-accent border-4 border-background flex items-center justify-center shadow-2xl">
                        <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Right Side Content - Desktop */}
                    {!isLeft && (
                      <div className="hidden lg:flex flex-1 justify-start pl-8">
                        <div className="w-full max-w-md text-left">
                          <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                  {service.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile/Tablet Layout - Single Column */}
                    <div className="lg:hidden w-full mt-8 max-w-md mx-auto">
                      <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Icon className="h-7 w-7 text-primary-foreground" />
                          </div>
                          <h3 className="font-display text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div 
            className="max-w-3xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg lg:text-xl leading-relaxed">
              Our team of experts is ready to help you find the perfect agricultural solution for your specific needs. Get in touch today for personalized service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
                <a href="https://wa.me/2348099933644" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

