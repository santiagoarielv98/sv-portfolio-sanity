import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { getIcon } from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { getFormattedDate } from "@/lib/utils";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import type { HomeQueryResult } from "../../../../../sanity.types";
import { SectionHeader } from "@/components/section";

type Props = {
  experiences: HomeQueryResult["experiences"];
};

const ExperienceSection = ({ experiences }: Props) => {
  const t = useTranslations("experience");

  return (
    <section
      id={SECTIONS.EXPERIENCE.slice(1)}
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-dots" />
        <div className="pattern-circuit absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-grid" />
      </div>
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("title")}
          badge={t("subtitle")}
          icon={Briefcase}
        />

        {/* Timeline container */}
        <div className="relative mt-12">
          {/* Línea vertical central */}
          <div className="from-primary/5 via-primary/20 absolute h-full w-0.5 bg-gradient-to-b to-transparent md:left-1/2" />

          <div className="space-y-8 md:-space-y-8">
            {experiences.map((experience, index) => {
              const Icon = getIcon(experience.type!);
              return (
                <div
                  key={index}
                  data-direction={index % 2 === 0 ? "left" : "right"}
                  className="flex items-center gap-8 data-[direction=left]:flex-row data-[direction=right]:flex-row-reverse"
                >
                  {/* Punto en la línea de tiempo */}
                  <div className="bg-primary/20 border-primary/30 absolute h-4 w-4 -translate-x-1/2 rounded-full border-2 md:left-1/2" />

                  {/* Card de experiencia */}
                  <div
                    data-direction={index % 2 === 0 ? "left" : "right"}
                    className="ml-4 md:ml-0 md:w-1/2 data-[direction=left]:md:pr-8 data-[direction=right]:md:pl-8"
                  >
                    <ExtendedCard variant="solid">
                      <CardHeader className="flex-row gap-4">
                        <ExtendedButton
                          size="icon"
                          variant="gradient"
                          float="none"
                        >
                          <Icon />
                        </ExtendedButton>
                        <div className="flex flex-1 flex-col gap-1.5">
                          <CardTitle>
                            {experience.title as unknown as string}
                          </CardTitle>
                          <CardDescription>
                            {experience.organization as unknown as string}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          <ExtendedBadge variant="default">
                            <Calendar className="mr-1" />
                            {experience.date?.start &&
                              getFormattedDate(experience.date.start)}{" "}
                            -{" "}
                            {experience.date?.end
                              ? getFormattedDate(experience.date.end)
                              : "Present"}
                          </ExtendedBadge>
                          <ExtendedBadge variant="default">
                            <MapPin className="mr-1" />
                            {experience.location as unknown as string}
                          </ExtendedBadge>
                        </div>

                        {experience.description?.length === 1 ? (
                          <Typography variant="body1">
                            {experience.description[0] as unknown as string}
                          </Typography>
                        ) : (
                          <ul>
                            {experience.description?.map((desc, descIndex) => (
                              <Typography variant="body1" key={descIndex}>
                                {desc as unknown as string}
                              </Typography>
                            ))}
                          </ul>
                        )}
                        {Array.isArray(experience.skills) &&
                          experience.skills.length > 0 && (
                            <>
                              <ExtendedSeparator />
                              <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill) => {
                                  const Icon = getIcon(skill.icon!);
                                  return (
                                    <ExtendedBadge
                                      key={skill.title as unknown as string}
                                      variant="ghost"
                                    >
                                      <Icon />
                                      {skill.title as unknown as string}
                                    </ExtendedBadge>
                                  );
                                })}
                              </div>
                            </>
                          )}
                      </CardContent>
                    </ExtendedCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
