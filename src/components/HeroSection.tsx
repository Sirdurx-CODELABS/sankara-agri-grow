import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tractor.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="/images/new/backgrounds/bglaeste.jpeg"
          alt="Agricultural tractor in field"
          className="w-full h-full object-cover scale-105"
          style={{ transform: 'translateZ(0)' }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-20 max-w-7xl z-10">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-white text-sm font-semibold">Nigeria's Premier Agricultural Machinery Partner</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Driving Agricultural
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Premium tractors, farm implements, and genuine spare parts from world-leading brands. Empowering Nigerian farmers with reliable machinery and exceptional service.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-16"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="shadow-2xl hover:scale-105 transition-all duration-300 group" 
              asChild
            >
              <Link to="/products">
                Explore Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="shadow-xl hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20" 
              asChild
            >
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
            <Button 
              variant="whatsapp" 
              size="xl" 
              className="shadow-xl hover:scale-105 transition-all duration-300" 
              asChild
            >
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

          {/* Stats Cards with Glassmorphism */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              { icon: TrendingUp, value: "40+", label: "Years Experience" },
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: Award, value: "1200+", label: "Tractors Delivered" },
              { icon: Phone, value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-6 h-6 text-primary mb-2" />
                <p className="font-display text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/70 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
