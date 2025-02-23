import { ExtendedButton } from "@/components/extended-button";
import { ROUTES, SECTIONS } from "@/lib/config/navigation";
import { FolderGit, Grid2X2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as motion from "motion/react-client";

import ProjectCard from "@/components/card/project-card";
import { SectionHeader } from "@/components/section";
import type { GetHomeQueryResult } from "../../../../../sanity.types";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  projects: GetHomeQueryResult["featuredProjects"];
  lang: Locale;
};

const ProjectsSection = ({ projects, lang }: Props) => {
  const t = useTranslations("project");
  return (
    <section
      id={SECTIONS.PROJECTS.slice(1)}
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-circuit" />
        <div className="pattern-grid absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-dots" />
      </div>
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("title")}
          badge={t("subtitle")}
          icon={FolderGit}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <ExtendedButton
            variant="gradient"
            size="lg"
            className="font-display group"
            asChild
          >
            <Link href={`/${lang}${ROUTES.PROJECTS}`}>
              <span>{t("more")}</span>
              <Grid2X2 className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </Link>
          </ExtendedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
