import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div 
      className="group relative p-8 bg-card rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 backdrop-blur-sm"
      data-aos="fade-up"
    >
      {/* Layered Background Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container with Pulse Glow */}
      <div className="relative w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
        <div className="absolute inset-0 rounded-2xl bg-accent/20 animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Icon className="h-8 w-8 text-primary-foreground relative z-10" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
        {description}
      </p>

      {/* Accent line with gradient */}
      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full rounded-b-2xl" />
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
