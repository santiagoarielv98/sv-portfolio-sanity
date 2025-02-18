import React from "react";

import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { ChevronDown, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 pattern-topography pattern-fade-in" />
        <div className="pattern-connector pattern-connector-bottom pattern-dots" />
      </div>
      <div className="mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
        <Typography variant="h1">Welcome to my Portfolio</Typography>

        <Typography variant="h2" className="max-w-2xl font-light">
          Full Stack Developer Specialized in creating high-performance web
          applications with innovative technologies. 🚀
        </Typography>

        <ExtendedSeparator />

        <ExtendedButton size="lg" variant="default" className="font-display">
          <Code />
          Get Started
        </ExtendedButton>
      </div>

      <div className="absolute bottom-4 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
