import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
}

export function ProductCard({ title, description, image, category, href }: ProductCardProps) {
  return (
    <div 
      className="group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-border/50 transition-all duration-500 hover:-translate-y-2"
      data-aos="fade-up"
    >
      {/* Image Container with Gradient Overlay */}
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Category Badge */}
      <div className="absolute top-5 left-5 z-10">
        <span className="px-4 py-1.5 rounded-full bg-primary/95 backdrop-blur-sm text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-lg">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm lg:text-base mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 hover:scale-105" 
          asChild
        >
          <Link to={href}>
            View Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
