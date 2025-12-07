import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tractor.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Agricultural tractor in field at sunset"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-semibold">Nigeria's Trusted Machinery Partner</span>
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Driving Agricultural Growth With{" "}
            <span className="text-accent drop-shadow-lg">Reliable Machinery</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl text-primary-foreground/90 mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Premium tractors, farm implements, and genuine spare parts from world-leading brands. Powering Nigerian agriculture with quality and excellence.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button variant="hero" size="xl" className="shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/products">
                View Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" className="shadow-xl hover:scale-105 transition-transform duration-300" asChild>
              <a
                href="https://wa.me/2348099933644"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-primary-foreground/20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">15+</p>
              <p className="text-primary-foreground/80 text-sm font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">500+</p>
              <p className="text-primary-foreground/80 text-sm font-medium">Tractors Sold</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">36</p>
              <p className="text-primary-foreground/80 text-sm font-medium">States Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tractor Image (Optional decorative element) */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-1/3 opacity-20"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <img
          src={heroImage}
          alt=""
          className="w-full h-auto object-cover rounded-2xl shadow-2xl animate-float"
        />
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
