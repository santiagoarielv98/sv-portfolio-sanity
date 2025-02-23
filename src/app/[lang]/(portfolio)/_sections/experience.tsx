import { SECTIONS } from "@/lib/config/navigation";
import { Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import { ExperienceCard } from "@/components/card/experience-card";
import { SectionHeader } from "@/components/section";
import type { HomeQueryResult } from "../../../../../sanity.types";

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
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="from-primary/5 via-primary/20 absolute h-full w-0.5 bg-gradient-to-b to-transparent md:left-1/2"
          />

          <div className="space-y-8 md:-space-y-8">
            {experiences.map((experience, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  data-direction={index % 2 === 0 ? "left" : "right"}
                  className="flex items-center gap-8 data-[direction=left]:md:flex-row data-[direction=right]:md:flex-row-reverse"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.2 + 0.2,
                    }}
                    className="bg-primary/20 border-primary/30 absolute h-4 w-4 -translate-x-1/2 rounded-full border-2 md:left-1/2"
                  />

                  <div
                    data-direction={index % 2 === 0 ? "left" : "right"}
                    className="ml-4 md:ml-0 md:w-1/2 data-[direction=left]:md:pr-8 data-[direction=right]:md:pl-8"
                  >
                    <ExperienceCard experience={experience} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// tarjeta reutilizable de experiencia

export default ExperienceSection;
