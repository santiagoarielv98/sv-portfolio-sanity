import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import Blocks from "@/components/portable-text";
import { SectionHeader } from "@/components/section";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { GetProjectDetailQueryResult } from "@/sanity/types";
import {
  Code,
  ExternalLink,
  FileText,
  Github,
  GithubIcon,
  Layout,
  Link2,
} from "lucide-react";
import type { PortableTextBlock } from "next-sanity";
import { getTranslations } from "next-intl/server";

type Props = {
  project: GetProjectDetailQueryResult["project"];
};
const ProjectContent = async ({ project }: Props) => {
  const hasRepo = !!project?.links?.repo;
  const hasLinks = !!project?.otherLinks?.length;
  const hasContent = Array.isArray(project?.content) && project.content.length;

  const activeSidebar = hasLinks || (hasContent && hasRepo);

  const t = await getTranslations("projects");
  const common = await getTranslations("common");

  return (
    <section className="bg-primary/5 relative py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-circuit opacity-70" />
        <div className="pattern-dots absolute inset-0 opacity-80" />
        <div className="pattern-connector pattern-connector-bottom pattern-grid opacity-70" />
      </div>
      <div className="container mx-auto px-2 md:px-4">
        {/* Add SectionHeader with FileText icon */}
        <div className="mb-12">
          <SectionHeader
            title={t("content.title")}
            badge={t("content.subtitle")}
            icon={FileText}
          />
        </div>

        <div
          className={cn(
            "grid gap-8",
            activeSidebar ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            {Array.isArray(project?.content) && project.content.length && (
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    {t("aboutProject")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Blocks value={project.content as PortableTextBlock[]} />
                </CardContent>
              </ExtendedCard>
            )}

            {/* Features */}
            {Array.isArray(project?.keyFeatures) &&
              project.keyFeatures.length && (
                <ExtendedCard>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      {t("keyFeatures")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {project.keyFeatures?.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="bg-primary/50 mt-2.5 size-1.5 rounded-full" />
                          <Typography variant="body1">
                            {feature as unknown as string}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </ExtendedCard>
              )}
          </div>

          {/* Sidebar */}
          <div
            className={cn("space-y-6", activeSidebar ? "lg:block" : "hidden")}
          >
            {/* Links Card */}
            {project?.otherLinks && (
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="h-5 w-5" />
                    {t("projectLinks")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project?.otherLinks.map((link, index) => (
                    <ExtendedButton
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <a
                        href={link.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.title as unknown as string}
                      </a>
                    </ExtendedButton>
                  ))}
                </CardContent>
              </ExtendedCard>
            )}

            {/* Repository Info */}
            {project?.links?.repo && (
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    {common("repository")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ExtendedButton variant="outline" className="w-full" asChild>
                    <a
                      href={project.links?.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon className="h-4 w-4" />
                      {common("source")}
                    </a>
                  </ExtendedButton>
                </CardContent>
              </ExtendedCard>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
