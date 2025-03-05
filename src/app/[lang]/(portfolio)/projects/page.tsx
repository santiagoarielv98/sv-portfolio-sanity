import ProjectCard from "@/components/card/project-card";
import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { sanityFetch } from "@/sanity/lib/live";
import { getProjectQuery } from "@/sanity/lib/queries";
import { ArrowLeft, Code } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { GetProjectQueryResult } from "@/sanity/types";
import * as motion from "motion/react-client";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export async function generateMetadata() {
  const t = await getTranslations("projects");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    // keywords: data?.keywords,
  } satisfies Metadata;
}

export default async function ProjectsPage(props: Props) {
  const params = await props.params;
  const t = await getTranslations("projects");
  const common = await getTranslations("common");

  const { data } = (await sanityFetch({
    query: getProjectQuery,
    params,
  })) as { data: GetProjectQueryResult };

  const projects = data.projects;

  return (
    <main className="relative">
      {/* Global noise overlay */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      {/* Global gradient mesh */}
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Projects Section */}
      <section className="relative pt-4 pb-20">
        {/* Pattern with connectors */}
        <div className="absolute inset-0 -z-20">
          <div className="pattern-topography pattern-fade-in absolute inset-0 opacity-80" />
          <div className="pattern-connector pattern-connector-bottom pattern-dots opacity-80" />
        </div>

        <div className="container mx-auto px-4">
          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href="/" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {common("backToHome")}
              </Link>
            </ExtendedButton>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 space-y-4 text-center"
          >
            <ExtendedBadge
              variant="gradient"
              className="mx-auto flex items-center gap-2"
            >
              <Code />
              {t("subtitle")}
            </ExtendedBadge>
            <div className="mx-auto flex max-w-2xl items-center gap-4">
              <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
              <Typography variant="h2">{t("title")}</Typography>
              <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
            </div>
            <Typography
              variant="body1"
              className="text-muted-foreground mx-auto max-w-2xl"
            >
              {t("description")}
            </Typography>
          </motion.div>

          {/* <div className="mb-12 flex flex-col gap-6">
            <CategoryFilter categories={categories} />
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="relative w-full flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  placeholder="Search projects..."
                  className="bg-background/50 w-full pl-10"
                />
              </div>

              <Select>
                <SelectTrigger className="bg-background/50 w-[180px]">
                  <SortAsc className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <ExtendedBadge variant="default" className="bg-background/50">
                Frontend
                <button className="hover:text-primary ml-1">×</button>
              </ExtendedBadge>
              <ExtendedBadge variant="default" className="bg-background/50">
                React
                <button className="hover:text-primary ml-1">×</button>
              </ExtendedBadge>
              <ExtendedButton variant="ghost" size="sm">
                {common("clearFilters")}
              </ExtendedButton>
            </div>
          </div> */}

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                }}
                className="flex"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
