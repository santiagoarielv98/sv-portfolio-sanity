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
      hoverScale: {
        sm: "hover:scale-[1.01]",
        md: "hover:scale-[1.02]",
        lg: "hover:scale-[1.03]",
      },
      hoverRotate: {
        left: "hover:rotate-[-0.5deg]",
        right: "hover:rotate-[0.5deg]",
      },
      hoverGlow: {
        sm: "hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]",
        md: "hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]",
        lg: "hover:shadow-[0_0_40px_rgba(var(--primary),0.25)]",
      },
      hoverBorder: {
        subtle: "hover:border-primary/30",
        medium: "hover:border-primary/50",
        strong: "hover:border-primary/70",
      },
      hoverLift: {
        true: "hover:translate-y-[-2px]",
      },
    },
    // Valores por defecto
    defaultVariants: {
      variant: "neon",
      hoverScale: "md",
      hoverGlow: "md",
      hoverBorder: "medium",
      hoverLift: true,
    },
  },
);

interface ExtendedCardProps
  extends React.ComponentProps<typeof Card>,
    VariantProps<typeof cardNeonVariants> {}

function ExtendedCard({
  className,
  variant,
  hoverScale,
  hoverRotate,
  hoverGlow,
  hoverBorder,
  hoverLift,
  ...props
}: ExtendedCardProps) {
  return (
    <Card
      className={cn(
        cardNeonVariants({
          variant,
          hoverScale,
          hoverRotate,
          hoverGlow,
          hoverBorder,
          hoverLift,
        }),
        className,
      )}
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
