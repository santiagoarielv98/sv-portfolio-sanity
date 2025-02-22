import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Icon } from "@/components/icon";
import { Typography } from "@/components/ui/typography";
import { getFormattedDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { projectDetailQuery } from "@/sanity/lib/queries";
import { ArrowLeft, Calendar, GithubIcon, Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import type { ProjectDetailQueryResult } from "../../../../../../sanity.types";
import ProjectContent from "./_sections/project-content";
import GallerySection from "./_sections/gallery-section";

type Props = {
  params: Promise<{
    lang: Locale;
    slug: string;
  }>;
};

export default async function ProjectDetailPage(props: Props) {
  const params = await props.params;
  const t = await getTranslations("projects");

  const common = await getTranslations("common");

  const { data } = (await sanityFetch({
    query: projectDetailQuery,
    params,
  })) as { data: ProjectDetailQueryResult };

  const project = data.project!;
  console.log(project);

  const hasContent = Array.isArray(project.content) && project.content.length;
  const hasKeyFeatures =
    Array.isArray(project.keyFeatures) && project.keyFeatures.length;

  const hasProjectDetail = hasContent || hasKeyFeatures;
  const hasGallery = Array.isArray(project.gallery) && project.gallery.length;

  return (
    <main className="relative">
      {/* Global noise overlay */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      {/* Global gradient mesh */}
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Header Section */}
      <section className="relative pt-4 pb-10">
        <div className="absolute inset-0 -z-20">
          <div className="pattern-circuit pattern-fade-in absolute inset-0" />
          <div className="pattern-connector pattern-connector-bottom pattern-dots" />
        </div>
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href={`/${params.lang}/projects`} className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {common("backToProjects")}
              </Link>
            </ExtendedButton>
          </div>

          {/* Project Header */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={project!.thumbnail!}
                alt={project.title as unknown as string}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div>
                {/* <ExtendedBadge variant="gradient" className="mb-4">
                  {projectDetail.category}
                </ExtendedBadge> */}
                <Typography variant="h1" className="mb-2">
                  {project.title as unknown as string}
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  {project.description as unknown as string}
                </Typography>
              </div>

              <ExtendedSeparator />

              {/* Quick Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Typography variant="small" className="text-muted-foreground">
                    {common("started")}
                  </Typography>
                  <ExtendedBadge
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {project.date?.start &&
                      getFormattedDate(project.date.start)}{" "}
                    -{" "}
                    {project.date?.end
                      ? getFormattedDate(project.date.end)
                      : "Present"}
                  </ExtendedBadge>
                </div>
                <div className="space-y-2">
                  <Typography variant="small" className="text-muted-foreground">
                    {common("status")}
                  </Typography>
                  <ExtendedBadge
                    variant={
                      project.status === "finished" ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                  >
                    {/* {project.status} */}
                    {t(`status.${project.status}`)}
                  </ExtendedBadge>
                </div>
              </div>

              <ExtendedSeparator />

              {/* Technologies */}
              <div className="space-y-2">
                <Typography variant="small" className="text-muted-foreground">
                  {common("technologies")}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {project.skills?.map((skill) => (
                    <ExtendedBadge key={skill.title} variant="ghost">
                      <Icon icon={skill.icon!} />
                      {skill.title}
                    </ExtendedBadge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project?.links?.demo && (
                  <ExtendedButton variant="default" size="lg" asChild>
                    <a
                      href={project?.links?.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      {common("demo")}
                    </a>
                  </ExtendedButton>
                )}
                {project?.links?.repo && (
                  <ExtendedButton variant="outline" size="lg" asChild>
                    <a
                      href={project?.links?.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="mr-2 h-5 w-5" />
                      {common("source")}
                    </a>
                  </ExtendedButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      {hasProjectDetail && <ProjectContent project={project} />}

      {/* Gallery Section */}
      {hasGallery && <GallerySection gallery={project.gallery} />}
    </main>
  );
}
