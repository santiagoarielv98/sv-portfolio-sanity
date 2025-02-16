import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const extendedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: [
          "bg-primary",
          "text-primary-foreground font-medium",
          "shadow-[0_0_20px_rgba(var(--primary),0.2)]",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        solid: [
          "bg-gradient-to-r from-primary to-secondary",
          "text-primary-foreground font-bold",
          "shadow-[0_0_20px_rgba(var(--primary),0.3)]",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        neon: [
          // ...existing neon styles...
        ].join(" "),
        outline: [
          "bg-transparent",
          "border-2 border-primary",
          "text-primary font-medium",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        ghost: [
          "bg-transparent",
          "text-primary font-medium",
          "hover:bg-primary/10",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        link: [
          "bg-transparent",
          "text-primary underline-offset-4 hover:underline",
          "shadow-none",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      scale: {
        none: "",
        xs: "hover:scale-[1.02] active:hover:scale-[1.01]",
        sm: "hover:scale-[1.04] active:hover:scale-[1.02]",
        md: "hover:scale-[1.05] active:hover:scale-[1.03]",
        lg: "hover:scale-[1.08] active:hover:scale-[1.05]",
      },
      glow: {
        none: "",
        xs: [
          "hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]",
          "hover:after:opacity-10",
        ].join(" "),
        sm: [
          "hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]",
          "hover:after:opacity-20",
        ].join(" "),
        md: [
          "hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]",
          "hover:after:opacity-30",
        ].join(" "),
        lg: [
          "hover:shadow-[0_0_40px_rgba(var(--primary),0.6)]",
          "hover:after:opacity-40",
        ].join(" "),
      },
      gradient: {
        none: "",
        true: [
          "hover:bg-[length:100%_100%]",
          "hover:animate-shimmer",
          "hover:bg-gradient-to-l hover:from-primary hover:via-secondary hover:to-accent",
        ].join(" "),
      },
      shine: {
        none: "",
        true: [
          "hover:before:translate-x-[200%]",
          "hover:after:scale-x-100 hover:after:opacity-30",
        ].join(" "),
      },
      float: {
        none: "",
        true: [
          "[&>*]:hover:translate-y-[-1px]",
          "[&>*]:transition-transform [&>*]:duration-300",
          "hover:shadow-lg hover:shadow-primary/20",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      scale: "md",
      glow: "md",
      gradient: true,
      shine: true,
      float: true,
    },
  },
);

function ExtendedButton({
  className,
  variant,
  size,
  scale,
  glow,
  gradient,
  shine,
  float,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof extendedButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        extendedButtonVariants({
          variant,
          size,
          scale,
          glow,
          gradient,
          shine,
          float,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { ExtendedButton, extendedButtonVariants };
