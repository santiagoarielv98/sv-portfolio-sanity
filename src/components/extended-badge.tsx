import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const extendedBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 px-3 py-1 transition-all duration-300 backdrop-blur-sm relative group",
  {
    variants: {
      variant: {
        solid: [
          "bg-gradient-to-r from-primary/20 to-secondary/20",
          "text-primary font-medium",
          "border border-primary/30",
          "shadow-[0_0_10px_rgba(var(--primary),0.1)]",
        ].join(" "),
        neon: [
          "bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5",
          "text-primary/80 border border-primary/30",
          "shadow-[0_0_15px_rgba(var(--primary),0.1)]",
          // Efectos neón
          "before:absolute before:inset-0 before:rounded-[6px]",
          "before:bg-gradient-to-r before:from-primary/10 before:via-secondary/10 before:to-accent/10",
          "before:opacity-0 before:transition-opacity before:duration-300",
          "animate-shimmer bg-[length:200%_100%]",
        ].join(" "),
        soft: [
          "bg-primary/10",
          "text-primary/80 font-medium",
          "border border-primary/20",
        ].join(" "),
        outline: [
          "bg-transparent",
          "border border-primary/50",
          "text-primary font-medium",
        ].join(" "),
        ghost: [
          "bg-primary/5",
          "text-primary/80 font-medium",
          "border border-transparent",
        ].join(" "),
        secondary: [
          "bg-secondary/10",
          "text-secondary font-medium",
          "border border-secondary/20",
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
      variant: "neon",
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
