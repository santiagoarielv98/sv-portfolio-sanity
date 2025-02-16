import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group",
  {
    variants: {
      variant: {
        neon: [
          // Base mejorada
          "bg-gradient-to-r from-primary via-secondary to-accent",
          "text-primary-foreground font-bold",
          "shadow-[0_0_20px_rgba(var(--primary),0.3)]",
          // Efectos de capa
          "after:absolute after:inset-0 after:bg-black/10",
          "after:transition-opacity after:duration-300",
          // Efecto de brillo
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
          "before:translate-x-[-200%] before:transition-transform before:duration-500",
          "before:skew-x-[-20deg]",
          // Estados activos
          "active:scale-[0.98] active:shadow-[0_0_15px_rgba(var(--primary),0.5)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      hoverScale: {
        sm: "hover:scale-[1.01]",
        md: "hover:scale-[1.05]",
        lg: "hover:scale-[1.08]",
      },
      hoverGlow: {
        sm: "hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]",
        md: "hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]",
        lg: "hover:shadow-[0_0_40px_rgba(var(--primary),0.6)]",
      },
      hoverGradient: {
        true: "hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
      },
      hoverShine: {
        true: "hover:before:translate-x-[200%]",
      },
      hoverContent: {
        lift: "[&>*]:hover:translate-y-[-1px] [&>*]:transition-transform [&>*]:duration-300",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
      hoverScale: "md",
      hoverGlow: "md",
      hoverGradient: true,
      hoverShine: true,
      hoverContent: "lift",
    },
  },
);

function Button({
  className,
  variant,
  size,
  hoverScale,
  hoverGlow,
  hoverGradient,
  hoverShine,
  hoverContent,
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
      className={cn(
        buttonVariants({
          variant,
          size,
          hoverScale,
          hoverGlow,
          hoverGradient,
          hoverShine,
          hoverContent,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
