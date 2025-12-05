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
} from "lucide-react";

const services = [
  {
    icon: Tractor,
    title: "Tractor Sales",
    description: "Premium agricultural tractors from leading global manufacturers including Massey Ferguson, Lovol, and Zoomlion.",
    features: [
      "Wide range of horsepower options (25HP - 200HP)",
      "New and certified pre-owned tractors",
      "Flexible payment and financing options",
      "Complete documentation and warranty",
    ],
  },
  {
    icon: Settings,
    title: "Farm Implements",
    description: "Comprehensive range of farming equipment for all stages of agricultural operations.",
    features: [
      "Disc ploughs and harrows",
      "Rotary tillers and cultivators",
      "Seeders and planters",
      "Boom sprayers and spreaders",
    ],
  },
  {
    icon: Wrench,
    title: "Spare Parts Supply",
    description: "Genuine OEM spare parts ensuring optimal performance and longevity of your machinery.",
    features: [
      "Original manufacturer parts",
      "Extensive inventory for all brands",
      "Competitive wholesale pricing",
      "Fast nationwide delivery",
    ],
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description: "Dedicated customer support team available to assist with any queries or issues.",
    features: [
      "24/7 phone and WhatsApp support",
      "Technical consultation services",
      "Warranty claim processing",
      "Customer feedback management",
    ],
  },
  {
    icon: Shield,
    title: "Maintenance & Repairs",
    description: "Professional maintenance and repair services by certified technicians.",
    features: [
      "Scheduled maintenance programs",
      "Emergency breakdown repairs",
      "On-site service available",
      "Genuine parts replacement",
    ],
  },
  {
    icon: GraduationCap,
    title: "Operator Training",
    description: "Comprehensive training programs for tractor operators and maintenance personnel.",
    features: [
      "Basic operation training",
      "Safety and best practices",
      "Maintenance fundamentals",
      "Certification upon completion",
    ],
  },
  {
    icon: Award,
    title: "Farm Mechanization Consulting",
    description: "Expert consultation to optimize your agricultural operations through mechanization.",
    features: [
      "Farm assessment and analysis",
      "Equipment recommendations",
      "Cost-benefit analysis",
      "Implementation planning",
    ],
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description: "Reliable delivery services ensuring your equipment reaches you safely and on time.",
    features: [
      "Nationwide delivery coverage",
      "Secure transportation",
      "Real-time tracking",
      "Installation support",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Comprehensive Agricultural Solutions
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From sales to support, we offer end-to-end services to keep your farming operations running at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-xl border border-border bg-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our team of experts is ready to help you find the perfect agricultural solution for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
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
