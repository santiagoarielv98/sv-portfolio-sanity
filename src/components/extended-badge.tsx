import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const extendedBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 px-3 py-1 transition-all duration-300 backdrop-blur-sm relative group",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5",
          "text-primary/80 border border-primary/30",
        ].join(" "),
        solid: [
          "bg-primary/20",
          "text-primary font-medium",
          "border border-primary/30",
        ].join(" "),
        ghost: [
          "bg-primary/5",
          "text-primary/80 font-medium",
          "border border-transparent",
        ].join(" "),
        outline: [
          "bg-transparent",
          "border border-primary",
          "text-primary font-medium",
        ].join(" "),
        gradient: [
          "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20",
          "text-primary font-medium",
          "border border-primary/30",
        ].join(" "),
        secondary: [
          "bg-secondary/10",
          "text-secondary font-medium",
          "border border-secondary/20",
        ].join(" "),
      },
      // glow: {
      //   none: "",
      //   xs: "hover:shadow-[0_0_10px_rgba(var(--primary),0.1)]",
      //   sm: "hover:shadow-[0_0_15px_rgba(var(--primary),0.15)]",
      //   md: "hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]",
      //   lg: "hover:shadow-[0_0_25px_rgba(var(--primary),0.25)]",
      // },
    },
    defaultVariants: {
      variant: "default",
      // glow: "md",
    },
  },
);

function ExtendedBadge({
  className,
  variant,
  // glow,
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
          // glow,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { ExtendedBadge, extendedBadgeVariants };
