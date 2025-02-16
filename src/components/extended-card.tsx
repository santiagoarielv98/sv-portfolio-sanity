import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";

const cardNeonVariants = cva(
  "relative transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-sm",
  {
    variants: {
      // Estilo base neón
      variant: {
        neon: [
          "bg-gradient-to-br from-background/80 via-background/90 to-background/80",
          "border-2 border-primary/20",
          "shadow-[0_0_20px_rgba(var(--primary),0.1),inset_0_0_15px_rgba(var(--secondary),0.1)]",
          // Efecto de brillo base
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/5 before:to-transparent",
          "before:translate-x-[-200%] before:transition-transform before:duration-[2s]",
        ].join(" "),
      },
      // Efectos hover
      hover: {
        none: "",
        illuminate: [
          "hover:border-primary/50",
          "hover:shadow-[0_0_30px_rgba(var(--primary),0.3),0_0_50px_rgba(var(--secondary),0.2)]",
          "hover:before:translate-x-[200%]",
        ].join(" "),
        scale: [
          "hover:scale-[1.02]",
          "hover:border-primary/40",
          "hover:shadow-[0_0_25px_rgba(var(--primary),0.2)]",
        ].join(" "),
        full: [
          "hover:scale-[1.02]",
          "hover:border-primary/50",
          "hover:shadow-[0_0_30px_rgba(var(--primary),0.3),0_0_50px_rgba(var(--secondary),0.2)]",
          "hover:before:translate-x-[200%]",
        ].join(" "),
      },
    },
    // Valores por defecto
    defaultVariants: {
      variant: "neon",
      hover: "none",
    },
  },
);

interface ExtendedCardProps
  extends React.ComponentProps<typeof Card>,
    VariantProps<typeof cardNeonVariants> {}

function ExtendedCard({
  className,
  variant,
  hover,
  ...props
}: ExtendedCardProps) {
  return (
    <Card
      className={cn(cardNeonVariants({ variant, hover }), className)}
      {...props}
    />
  );
}

// Re-exportamos los componentes internos de Card
export {
  ExtendedCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
