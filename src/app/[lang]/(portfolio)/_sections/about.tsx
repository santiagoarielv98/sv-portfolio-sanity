import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { SectionHeader } from "@/components/section";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { Download, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as motion from "motion/react-client";

import type { GetHomeQueryResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  profile: GetHomeQueryResult["profile"];
};

const AboutSection = ({ profile }: Props) => {
  const t = useTranslations("about");
  const common = useTranslations("common");

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
        <SectionHeader
          title={t("title")}
          badge={t("subtitle")}
          icon={UserRound}
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={
                urlFor(profile!.avatar!).width(800).height(800).url() as string
              }
              alt={`${common("photoBy")} ${profile!.name}`}
              fill
              className="object-cover"
            />
            <div className="from-background/60 absolute inset-0 bg-gradient-to-t" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <Typography variant="h3" className="mb-4">
                {t("whoami")}
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
                {t("goals")}
              </Typography>
              {profile?.objectives?.map((objective, index) => (
                <Typography key={index} variant="body1">
                  {objective as unknown as string}
                </Typography>
              ))}
            </div>

            <div>
              <ExtendedButton
                variant="gradient"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={profile!.resume!}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="mr-2" />
                  {common("cv.download")}
                </a>
              </ExtendedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
