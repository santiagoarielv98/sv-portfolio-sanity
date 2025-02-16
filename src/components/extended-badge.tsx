import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const extendedBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 px-3 py-1 transition-all duration-300 backdrop-blur-sm relative group",
  {
    variants: {
      variant: {
        default: [
          // Base mejorada
          "bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5",
          "text-primary/80 border border-primary/30",
          "shadow-[0_0_15px_rgba(var(--primary),0.1)]",
          // Efecto de brillo interno
          "before:absolute before:inset-0 before:rounded-[6px]",
          "before:bg-gradient-to-r before:from-primary/10 before:via-secondary/10 before:to-accent/10",
          "before:opacity-0 before:transition-opacity before:duration-300",
          // Animación de fondo
          "animate-shimmer bg-[length:200%_100%]",
        ].join(" "),
      },
      scale: {
        none: "",
        xs: "hover:scale-[1.005]",
        sm: "hover:scale-[1.01]",
        md: "hover:scale-[1.02]",
        lg: "hover:scale-[1.03]",
      },
      glow: {
        none: "",
        xs: "hover:shadow-[0_0_10px_rgba(var(--primary),0.1)]",
        sm: "hover:shadow-[0_0_15px_rgba(var(--primary),0.15)]",
        md: "hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]",
        lg: "hover:shadow-[0_0_25px_rgba(var(--primary),0.25)]",
      },
      border: {
        none: "",
        light: "hover:border-primary/40",
        medium: "hover:border-primary/60",
        strong: "hover:border-primary/80",
      },
      highlight: {
        none: "",
        true: "hover:text-primary",
      },
      float: {
        none: "",
        true: "[&>*]:hover:translate-y-[-1px] [&>*]:transition-transform [&>*]:duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
      scale: "md",
      glow: "md",
      border: "medium",
      highlight: true,
      float: true,
    },
  },
);

function ExtendedBadge({
  className,
  variant,
  scale,
  glow,
  border,
  highlight,
  float,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof extendedBadgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        extendedBadgeVariants({
          variant,
          scale,
          glow,
          border,
          highlight,
          float,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { ExtendedBadge, extendedBadgeVariants };
