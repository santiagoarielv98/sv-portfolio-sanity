import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { translations } from "@/lib/i18n/transalation";
import { ChevronDown, Mail } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";

type Props = {
  lang: Locale;
};

const HeroSection = ({ lang }: Props) => {
  return (
    <section
      id={SECTIONS.HOME.slice(1)}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <div className="pattern-topography pattern-fade-in absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-dots" />
      </div>
      <div className="mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
        <Typography variant="h1">{translations[lang].hero.title}</Typography>

        <Typography variant="h2" className="max-w-2xl font-light">
          {translations[lang].hero.subtitle}
        </Typography>

        <ExtendedSeparator />

        <ExtendedButton size="lg" variant="default" className="font-display">
          <Mail />
          {translations[lang].hero.cta}
        </ExtendedButton>
      </div>

      <div className="absolute bottom-4 animate-bounce">
        <ChevronDown className="text-muted-foreground h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
