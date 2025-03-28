import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const extendedBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md font-semibold w-fit whitespace-nowrap shrink-0 gap-1.5 transition-all duration-300",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20",
          "text-primary font-bold",
          "border border-primary/30",
        ].join(" "),
        solid: [
          "bg-primary/20",
          "text-primary font-bold",
          "border border-primary/30",
        ].join(" "),
        ghost: [
          "bg-primary/10",
          "text-primary font-bold",
          "border border-transparent",
        ].join(" "),
        outline: [
          "bg-transparent",
          "border border-primary",
          "text-primary font-bold",
        ].join(" "),
        gradient: [
          "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20",
          "text-primary font-bold",
          "border border-primary/30",
        ].join(" "),
        secondary: [
          "bg-secondary/20",
          "text-secondary-foreground font-bold",
          "border border-secondary/30",
        ].join(" "),
      },
      size: {
        xs: "text-[0.65rem] px-2 py-0.5 [&>svg]:size-2.5",
        sm: "text-xs px-2.5 py-0.5 [&>svg]:size-3",
        md: "text-xs px-3 py-1 [&>svg]:size-3.5",
        lg: "text-sm px-3.5 py-1.5 [&>svg]:size-4",
        xl: "text-base px-4 py-2 [&>svg]:size-4.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function ExtendedBadge({
  className,
  variant,
  size,
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
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { ExtendedBadge, extendedBadgeVariants };
