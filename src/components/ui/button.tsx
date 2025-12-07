import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold font-body ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:scale-105 active:scale-100",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-xl hover:scale-105",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-xl hover:scale-105",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero variant - bold, prominent for CTAs
        hero: "bg-accent text-accent-foreground font-display uppercase tracking-wider hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300 rounded-xl",
        // Hero outline - for secondary hero CTAs
        heroOutline: "border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-display uppercase tracking-wider rounded-xl hover:scale-105 transition-all duration-300",
        // WhatsApp green
        whatsapp: "bg-[hsl(142_70%_45%)] text-primary-foreground hover:bg-[hsl(142_70%_40%)] hover:shadow-xl rounded-xl hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
