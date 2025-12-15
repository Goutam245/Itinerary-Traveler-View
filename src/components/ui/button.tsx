import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-luxury hover:shadow-luxury-hover hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground shadow-luxury hover:shadow-luxury-hover hover:scale-[1.02]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-luxury hover:shadow-luxury-hover hover:scale-[1.02]",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium variants
        hero: "bg-gradient-to-r from-primary to-tertiary text-primary-foreground shadow-glow-primary hover:shadow-lg hover:scale-[1.03] font-semibold tracking-wide",
        gold: "bg-gradient-to-r from-gold to-secondary text-foreground shadow-glow-gold hover:shadow-lg hover:scale-[1.03] font-semibold",
        glass: "glass text-foreground hover:bg-background/80 shadow-luxury hover:shadow-luxury-hover",
        "glass-light": "bg-background/20 backdrop-blur-lg border border-background/30 text-background hover:bg-background/30 shadow-luxury",
        accent: "bg-accent text-accent-foreground shadow-luxury hover:shadow-luxury-hover hover:scale-[1.02]",
        warm: "bg-gradient-to-r from-secondary to-accent text-foreground shadow-glow-secondary hover:shadow-lg hover:scale-[1.03] font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 rounded-2xl px-8 py-3 text-base",
        xl: "h-16 rounded-2xl px-10 py-4 text-lg",
        icon: "h-11 w-11 rounded-xl",
        "icon-sm": "h-9 w-9 rounded-lg",
        "icon-lg": "h-14 w-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
