import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import { ExtendedSeparator } from "@/components/extended-separator";
import ProjectCardSkeleton from "@/components/skeletons/project-card-skeleton";
import { Typography } from "@/components/ui/typography";
import { ArrowLeft, Code } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function LoadingProjects() {
  const t = await getTranslations("projects");
  const common = await getTranslations("common");

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
          <div className="mb-8">
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href="/" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {common("backToHome")}
              </Link>
            </ExtendedButton>
          </div>

          {/* Header Section */}
          <div className="mb-12 space-y-4 text-center">
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
          </div>

          {/* Projects Grid with Skeletons */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex">
                <ProjectCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
