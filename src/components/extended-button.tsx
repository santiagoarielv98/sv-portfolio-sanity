import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        neon: [
          // Gradiente y fondo base más intenso
          "bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20",
          "backdrop-blur-md bg-[length:200%_100%]",
          // Borde y texto inicial más visible
          "border-2 border-primary/40",
          "text-primary/80",
          // Sombras iniciales más fuertes
          "shadow-[0_0_20px_rgba(var(--primary),0.2),0_0_30px_rgba(var(--secondary),0.2),inset_0_0_15px_rgba(var(--primary),0.2)]",
          // Efectos hover más intensos
          "hover:border-primary/80",
          "hover:text-primary",
          "hover:bg-gradient-to-r hover:from-primary/40 hover:via-secondary/40 hover:to-primary/40",
          "hover:shadow-[0_0_25px_rgba(var(--primary),0.4),0_0_50px_rgba(var(--secondary),0.3),0_0_75px_rgba(var(--primary),0.2),inset_0_0_20px_rgba(var(--secondary),0.2)]",
          "hover:scale-[1.02]",
          // Efectos active más pronunciados
          "active:scale-[0.98]",
          "active:shadow-[0_0_15px_rgba(var(--primary),0.3)]",
          // Animación
          "animate-shimmer",
          // Enfoque más visible
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
          // Efecto de resplandor adicional
          "after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-r after:from-transparent after:via-primary/10 after:to-transparent after:pointer-events-none",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
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
