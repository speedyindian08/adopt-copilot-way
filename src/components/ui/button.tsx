import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-secondary text-white border-none rounded-full hover:opacity-90 hover:shadow-[0_4px_24px_var(--color-primary-glow)] hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "bg-transparent border border-white/15 text-white rounded-full hover:border-white/35 hover:bg-white/5",
        secondary: "bg-transparent border border-white/15 text-white rounded-full hover:border-white/35 hover:bg-white/5",
        ghost: "hover:bg-white/5 hover:text-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-primary to-secondary text-white border-none rounded-full hover:opacity-90 hover:shadow-[0_4px_24px_var(--color-primary-glow)] hover:-translate-y-0.5 font-semibold",
      },
      size: {
        default: "h-10 px-7 py-2",
        sm: "h-9 px-5",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
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
