import { ExtendedButton } from "@/components/extended-button";
import { SECTIONS } from "@/lib/config/navigation";
import { FolderGit, Grid2X2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import ProjectCard from "@/components/card/project-card";
import { SectionHeader } from "@/components/section";
import type { HomeQueryResult } from "../../../../../sanity.types";

type Props = {
  projects: HomeQueryResult["featuredProjects"];
};

const ProjectsSection = ({ projects }: Props) => {
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12 text-center">
          <ExtendedButton
            variant="gradient"
            size="lg"
            className="font-display group"
            asChild
          >
            <Link href="/projects">
              <span>{t("more")}</span>
              <Grid2X2 className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </Link>
          </ExtendedButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
