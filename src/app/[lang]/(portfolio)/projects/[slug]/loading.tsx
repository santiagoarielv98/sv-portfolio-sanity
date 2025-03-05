import { ExtendedButton } from "@/components/extended-button";
import HeaderSectionSkeleton from "@/components/skeletons/header-section-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ProjectDetailLoading() {
  const common = await getTranslations("common");

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
              <div className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {common("backToProjects")}
              </div>
            </ExtendedButton>
          </div>

          {/* Project Header Skeleton */}
          <HeaderSectionSkeleton />
        </div>
      </section>

      {/* Project Content Skeleton */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <div className="space-y-2">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-6 w-full" />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section Skeleton */}
      <section className="container mx-auto px-4 py-8">
        <Skeleton className="mb-6 h-8 w-1/4" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="aspect-video w-full" />
            ))}
        </div>
      </section>
    </main>
  );
}
