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
  "relative transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-sm group",
  {
    variants: {
      // Estilo base neón
      variant: {
        neon: [
          "bg-gradient-to-br from-background/60 via-background/80 to-background/60",
          "border-2 border-primary/20",
          "shadow-[0_0_25px_rgba(var(--primary),0.1),inset_0_0_20px_rgba(var(--secondary),0.1)]",
          // Efecto de brillo ambiental - ajustado para no interferir
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/5 after:via-secondary/5 after:to-accent/5",
          "after:opacity-0 after:transition-opacity after:duration-500",
          "after:pointer-events-none after:z-[1]",
          // Efecto de borde brillante - ajustado para no interferir
          "before:absolute before:inset-[1px] before:rounded-[10px] before:p-[1px]",
          "before:bg-gradient-to-br before:from-primary/20 before:via-secondary/20 before:to-accent/20",
          "before:mask-border before:transition-all before:duration-500",
          "before:pointer-events-none before:z-[1]",
          // Asegurar que el contenido esté por encima
          "[&>*]:relative [&>*]:z-[2]",
        ].join(" "),
      },
      hover: {
        modern: [
          // Efectos hover modernos
          "hover:scale-[1.02] hover:rotate-[0.5deg]",
          "hover:shadow-[0_0_30px_rgba(var(--primary),0.2),0_0_50px_rgba(var(--secondary),0.1)]",
          "hover:border-primary/40",
          "hover:after:opacity-100",
          "hover:before:from-primary/40 hover:before:via-secondary/40 hover:before:to-accent/40",
          "group-hover:translate-y-[-2px]",
        ].join(" "),
      },
    },
    // Valores por defecto
    defaultVariants: {
      variant: "neon",
      hover: "modern",
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
