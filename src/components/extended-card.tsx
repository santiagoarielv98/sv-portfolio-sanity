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

const extendedCardNeonVariants = cva(
  "relative transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-sm group",
  {
    variants: {
      variant: {
        default: [
          "border-2 border-primary/20",
          "shadow-[0_0_25px_rgba(var(--primary),0.1)]",
          "[&>*]:relative [&>*]:z-[2]",
        ].join(" "),
        solid: [
          "dark:bg-primary/10",
          "border-2 border-primary/30",
          "[&>*]:relative [&>*]:z-[2]",
        ].join(" "),
        ghost: [
          "bg-background/60",
          "border border-border",
          "[&>*]:relative [&>*]:z-[2]",
        ].join(" "),
        outline: [
          "bg-transparent",
          "border-2 border-primary",
          "[&>*]:relative [&>*]:z-[2]",
        ].join(" "),
        gradient: [
          "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20",
          "border-2 border-primary/30",
          "shadow-[0_0_30px_rgba(var(--primary),0.2)]",
          "[&>*]:relative [&>*]:z-[2]",
        ].join(" "),
      },
      rotate: {
        none: "",
        left: "hover:rotate-[-0.5deg]",
        right: "hover:rotate-[0.5deg]",
      },
      // glow: {
      //   none: "",
      //   xs: "hover:shadow-[0_0_15px_rgba(var(--primary),0.1)]",
      //   sm: "hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]",
      //   md: "hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]",
      //   lg: "hover:shadow-[0_0_40px_rgba(var(--primary),0.25)]",
      // },
      border: {
        none: "",
        light: "hover:border-primary/30",
        medium: "hover:border-primary/50",
        strong: "hover:border-primary/70",
      },
      float: {
        none: "",
        true: "hover:translate-y-[-2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      // glow: "md",
      border: "medium",
      float: true,
    },
  },
);

interface ExtendedCardProps
  extends React.ComponentProps<typeof Card>,
    VariantProps<typeof extendedCardNeonVariants> {}

function ExtendedCard({
  className,
  variant,
  rotate,
  // glow,
  border,
  float,
  ...props
}: ExtendedCardProps) {
  return (
    <Card
      className={cn(
        extendedCardNeonVariants({
          variant,
          rotate,
          // glow,
          border,
          float,
        }),
        className,
      )}
      {...props}
    />
  );
}

export {
  ExtendedCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
