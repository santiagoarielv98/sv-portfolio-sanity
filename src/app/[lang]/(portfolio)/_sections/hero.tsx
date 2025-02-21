import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { ChevronDown, Mail } from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("hero");
  return (
    <section
      id={SECTIONS.HOME.slice(1)}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-20">
        <div className="pattern-topography pattern-fade-in absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-dots" />
      </div>
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
        <Typography variant="h1">{t("title")}</Typography>

        <Typography variant="h2" className="max-w-2xl font-light">
          {t("subtitle")}
        </Typography>

        <ExtendedSeparator />

        <ExtendedButton
          size="lg"
          variant="default"
          className="font-display"
          asChild
        >
          <Link href={SECTIONS.CONTACT}>
            <Mail className="mr-2" />
            {t("cta")}
          </Link>
        </ExtendedButton>
      </div>

      <div className="absolute bottom-4 animate-bounce">
        <ChevronDown className="text-muted-foreground h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
