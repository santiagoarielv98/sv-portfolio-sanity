import { ExtendedButton } from "@/components/extended-button";
import { sanityFetch } from "@/sanity/lib/live";
import { projectDetailQuery } from "@/sanity/lib/queries";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { ProjectDetailQueryResult } from "../../../../../../sanity.types";
import GallerySection from "./_sections/gallery-section";
import HeaderSection from "./_sections/header-section";
import ProjectContent from "./_sections/project-content";

type Props = {
  params: Promise<{
    lang: Locale;
    slug: string;
  }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  const { data } = (await sanityFetch({
    query: projectDetailQuery,
    params,
  })) as { data: ProjectDetailQueryResult };
  return {
    title: data.project?.title as unknown as string,
    description: data.project?.description as unknown as string,
  } satisfies Metadata;
}

export default async function ProjectDetailPage(props: Props) {
  const params = await props.params;
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
          <HeaderSection project={project} />
        </div>
      </section>

      {/* Project Content */}
      {hasProjectDetail && <ProjectContent project={project} />}

      {/* Gallery Section */}
      {hasGallery && <GallerySection gallery={project.gallery} />}
    </main>
  );
}
