import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const extendedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden isolate",
  {
    variants: {
      variant: {
        solid: [
          "bg-gradient-to-r from-primary to-secondary",
          "text-primary-foreground font-bold",
          "shadow-[0_0_20px_rgba(var(--primary),0.3)]",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        neon: [
          "bg-gradient-to-r from-primary via-secondary to-accent",
          "text-primary-foreground font-bold",
          "shadow-[0_0_20px_rgba(var(--primary),0.3)]",
          "after:absolute after:inset-0 after:-z-10",
          "after:bg-gradient-to-r after:from-white/0 after:via-white/10 after:to-white/0",
          "after:transition-all after:duration-500 after:opacity-0",
          "before:absolute before:inset-0 before:-z-10",
          "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
          "before:translate-x-[-200%] before:skew-x-[-20deg]",
          "before:transition-transform before:duration-500 before:ease-out",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
          "hover:before:translate-x-[200%]",
          "hover:after:opacity-100",
        ].join(" "),
        soft: [
          "bg-primary/10",
          "text-primary font-medium",
          "border-2 border-primary/20",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
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
          "shadow-none p-0 h-auto",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-6 text-base",
        icon: [
          "size-9 p-2",
          "[&_svg]:size-5",
          "[&_svg]:transition-transform",
          "[&_svg]:duration-300",
        ].join(" "),
      },
      glow: {
        none: "",
        xs: "hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]",
        sm: "hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]",
        md: "hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]",
        lg: "hover:shadow-[0_0_40px_rgba(var(--primary),0.6)]",
      },
      shine: {
        none: "",
        true: [
          "after:absolute after:inset-0 after:-z-10",
          "after:bg-gradient-to-r after:from-white/0 after:via-white/20 after:to-white/0",
          "after:translate-x-[-200%] after:skew-x-[-20deg]",
          "after:transition-transform after:duration-500 after:ease-out",
          "hover:after:translate-x-[200%]",
        ].join(" "),
      },
      float: {
        none: "",
        true: "hover:translate-y-[-1px]",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
      glow: "md",
      // gradient: true,
      shine: true,
      float: true,
    },
  },
);

function ExtendedButton({
  className,
  variant,
  size,
  glow,
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
          glow,
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
