import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 px-3 py-1 transition-all duration-300 backdrop-blur-sm",
  {
    variants: {
      variant: {
        neon: [
          "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10",
          "text-primary/70 border-2 border-primary/20",
          "shadow-[0_0_15px_rgba(var(--primary),0.1),inset_0_0_10px_rgba(var(--secondary),0.1)]",
          "animate-shimmer",
        ].join(" "),
      },
      hover: {
        scale: "hover:scale-105",
        glow: [
          "hover:shadow-[0_0_20px_rgba(var(--primary),0.3),0_0_40px_rgba(var(--secondary),0.2)]",
          "hover:border-primary/60",
        ].join(" "),
        gradient: [
          "hover:bg-gradient-to-r hover:from-primary/20 hover:via-secondary/20 hover:to-primary/20",
          "hover:text-primary",
        ].join(" "),
        all: [
          "hover:scale-105",
          "hover:shadow-[0_0_20px_rgba(var(--primary),0.3),0_0_40px_rgba(var(--secondary),0.2)]",
          "hover:border-primary/60",
          "hover:bg-gradient-to-r hover:from-primary/20 hover:via-secondary/20 hover:to-primary/20",
          "hover:text-primary",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "neon",
      hover: "all",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
