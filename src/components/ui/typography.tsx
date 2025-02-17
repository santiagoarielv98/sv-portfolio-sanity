import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("max-w-prose", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl md:text-5xl",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      // p: "leading-7 [&:not(:first-child)]:mt-6",
      body1: "leading-7",
      body2: "leading-6",
      small: "text-sm",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "default",
  },
});

export const Typography = ({
  className,
  variant,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof typographyVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp
      className={cn(typographyVariants({ variant, color, className }))}
      {...props}
    />
  );
};

Typography.displayName = "Typography";
