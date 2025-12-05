import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tractor.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Agricultural tractor in field at sunset"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-semibold">Nigeria's Trusted Machinery Partner</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Driving Agricultural Growth With{" "}
            <span className="text-accent">Reliable Machinery</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed animate-fade-up delay-200">
            Premium tractors, farm implements, and genuine spare parts from world-leading brands. Powering Nigerian agriculture with quality and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                View Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
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
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up delay-400">
            <div>
              <p className="font-display text-3xl font-bold text-accent">15+</p>
              <p className="text-primary-foreground/70 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">500+</p>
              <p className="text-primary-foreground/70 text-sm">Tractors Sold</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">36</p>
              <p className="text-primary-foreground/70 text-sm">States Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
