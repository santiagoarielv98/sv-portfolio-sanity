import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { translations } from "@/lib/i18n/transalation";
import { Download, UserRound } from "lucide-react";
import Image from "next/image";

import type { Locale } from "@/lib/i18n/config";
import type { HomeQueryResult } from "../../../../../sanity.types";

type Props = {
  profile: HomeQueryResult["profile"];
  lang: Locale;
};

const AboutSection = ({ profile, lang }: Props) => {
  return (
    <section
      id={SECTIONS.ABOUT.slice(1)}
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-topography" />
        <div className="pattern-dots absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-circuit" />
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <ExtendedBadge
            variant="gradient"
            className="mx-auto flex items-center gap-2"
          >
            <UserRound />
            {translations[lang].about.subtitle}
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">
              {translations[lang].about.title}
            </Typography>
            <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left Column - Image and Quick Info */}
          <div className="space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={profile!.avatar!}
                alt={`Foto de ${profile!.name}`}
                fill
                className="object-cover"
              />
              <div className="from-background/80 absolute inset-0 bg-gradient-to-t" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-4">
                {translations[lang].about.whoami}
              </Typography>
              <div className="space-y-4">
                {profile?.bio?.map((bio, index) => (
                  <Typography key={index} variant="body1">
                    {bio as unknown as string}
                  </Typography>
                ))}
              </div>
            </div>

            <ExtendedSeparator />

            <div>
              <Typography variant="h3" className="mb-4">
                {translations[lang].about.goals}
              </Typography>
              {profile?.objectives?.map((objective, index) => (
                <Typography key={index} variant="body1">
                  {objective as unknown as string}
                </Typography>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <ExtendedButton variant="gradient" size="lg" className="w-full">
                <Download className="mr-2" />
                {translations[lang].common.cv.download}
              </ExtendedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
