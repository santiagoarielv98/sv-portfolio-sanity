import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const extendedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden isolate disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-primary via-secondary to-accent",
          "text-primary-foreground font-bold",
          "shadow-[0_0_20px_rgba(var(--primary),0.3)]",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        solid: [
          "bg-primary",
          "text-primary-foreground font-bold",
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
        outline: [
          "bg-transparent",
          "border-2 border-primary",
          "text-primary font-medium",
          "active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-primary/70",
        ].join(" "),
        gradient: [
          "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20",
          "text-primary font-medium",
          "border border-primary/30",
          "shadow-[0_0_15px_rgba(var(--primary),0.15)]",
          "hover:bg-gradient-to-r hover:from-primary/30 hover:via-secondary/30 hover:to-accent/30",
          "active:scale-[0.98]",
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
      variant: "default",
      size: "default",
      shine: true,
      float: true,
    },
  },
);

function ExtendedButton({
  className,
  variant,
  size,
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
