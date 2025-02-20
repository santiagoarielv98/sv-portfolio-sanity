import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import type { Hero } from "@/types/sanity";
import { ChevronDown, Code } from "lucide-react";

type Props = {
  section: Hero;
};

const HeroSection = ({ section }: Props) => {
  const [hero] = section.content;
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-topography pattern-fade-in absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-dots" />
      </div>
      <div className="mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
        <Typography variant="h1">{hero.title as unknown as string}</Typography>

        <Typography variant="h2" className="max-w-2xl font-light">
          {hero.subtitle as unknown as string}
        </Typography>

        <ExtendedSeparator />

        <ExtendedButton size="lg" variant="default" className="font-display">
          <Code />
          {hero?.cta as unknown as string}
        </ExtendedButton>
      </div>

      <div className="absolute bottom-4 animate-bounce">
        <ChevronDown className="text-muted-foreground h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
