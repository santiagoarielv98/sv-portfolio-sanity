"use client";

import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import { ExtendedCard } from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { Code, Download, Users } from "lucide-react";
import Image from "next/image";
import type { GetHomePageResult } from "../../../sanity.types";
import { translations } from "@/lib/i18n/transalations";
import { useParams } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

// const achievements: Achievement[] = [
//   {
//     icon: <Users />,
//     title: "Trabajo en Equipo",
//     description: "Colaboración efectiva en diversos equipos de desarrollo",
//   },
//   {
//     icon: <Medal />,
//     title: "Aprendizaje Rápido",
//     description: "Rápida adaptación a nuevas tecnologías y frameworks",
//   },
//   {
//     icon: <Target />,
//     title: "Entrega de Proyectos",
//     description: "Completé exitosamente múltiples proyectos web",
//   },
// ];

type Props = {
  profile: GetHomePageResult["profile"];
  section: GetHomePageResult["sections"][number] & {
    type: "about";
    content: Array<{
      _type: "about";
    }>;
  };
};

const AboutSection = ({ profile, section }: Props) => {
  const { lang } = useParams() as { lang: Locale };
  const about = section.content[0];

  return (
    <section className="relative overflow-hidden py-20">
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
            <Code />
            {section.subtitle as unknown as string}
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">
              {section.title as unknown as string}
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
                src={profile?.image as string}
                alt={`Foto de ${profile?.name}`}
                fill
                className="object-cover"
              />
              <div className="from-background/80 absolute inset-0 bg-gradient-to-t" />
            </div>
            <ExtendedCard variant="solid" className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Typography variant="small" className="text-muted-foreground">
                    {translations[lang].globals.location}
                  </Typography>
                  <Typography variant="h4">
                    {profile?.location as unknown as string}
                  </Typography>
                </div>
                {/* <div>
                  <Typography variant="small" className="text-muted-foreground">
                    Experiencia
                  </Typography>
                  <Typography variant="h4">1 Año</Typography>
                </div> */}
                {/* <div>
                  <Typography variant="small" className="text-muted-foreground">
                    Proyectos Completados
                  </Typography>
                  <Typography variant="h4">10+</Typography>
                </div> */}
                <div>
                  <Typography variant="small" className="text-muted-foreground">
                    {translations[lang].globals.languages}
                  </Typography>
                  <Typography variant="h4">
                    {profile?.languages?.join(", ")}
                  </Typography>
                </div>
              </div>
            </ExtendedCard>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-4">
                {translations[lang].about.iam}
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
                {translations[lang].about.objective}
              </Typography>
              {profile?.objectives?.map((objective, index) => (
                <Typography key={index} variant="body1">
                  {objective as unknown as string}
                </Typography>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid gap-4 sm:grid-cols-3">
              {about.achievements?.map((achievement, index) => (
                <ExtendedCard key={index} variant="solid" className="p-4">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <ExtendedButton size="icon" variant="gradient">
                      {/* {achievement.icon} */}
                      <Users />
                    </ExtendedButton>
                    <Typography variant="h4">
                      {achievement.title as unknown as string}
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      {achievement.description as unknown as string}
                    </Typography>
                  </div>
                </ExtendedCard>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <ExtendedButton variant="gradient" size="lg" className="w-full">
                <Download className="mr-2" />
                Descargar CV
              </ExtendedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
