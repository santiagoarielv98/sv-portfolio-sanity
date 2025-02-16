import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        neon: [
          "bg-gradient-to-r from-secondary to-primary",
          "text-primary-foreground font-bold",
          "shadow-[0_0_20px_rgba(var(--primary),0.4)]",
          "active:scale-[0.98]",
          "active:shadow-[0_0_15px_rgba(var(--primary),0.5)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-200%] before:transition-transform before:duration-[1s]",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      hover: {
        scale: "hover:scale-105",
        glow: "hover:shadow-[0_0_25px_rgba(var(--primary),0.6)]",
        gradient:
          "hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
        shine: "hover:before:translate-x-[200%]",
        all: [
          "hover:scale-105",
          "hover:shadow-[0_0_25px_rgba(var(--primary),0.6)]",
          "hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
          "hover:before:translate-x-[200%]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
      hover: "all",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
