import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative p-6 bg-card rounded-xl border border-border hover-lift transition-all duration-300 hover:border-primary/50">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:animate-pulse">
        <Icon className="h-7 w-7 text-primary-foreground" />
      </div>

      {/* Content */}
      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full rounded-b-xl" />
    </div>
  );
}
