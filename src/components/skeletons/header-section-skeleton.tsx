import { ExtendedSeparator } from "@/components/extended-separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/components/ui/typography";

const HeaderSectionSkeleton = () => {
  return (
    <div className="mb-12 grid gap-8 lg:grid-cols-2">
      {/* Left Column - Image Skeleton */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Right Column - Info Skeleton */}
      <div className="space-y-6">
        <div>
          <Skeleton className="mb-2 h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-5/6" />
        </div>

        <ExtendedSeparator />

        {/* Quick Info Skeleton */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Typography variant="small" className="text-muted-foreground">
              Date
            </Typography>
            <Skeleton className="h-8 w-full" />
          </div>
          <div className="space-y-2">
            <Typography variant="small" className="text-muted-foreground">
              Status
            </Typography>
            <Skeleton className="h-8 w-full" />
          </div>
        </div>

        <ExtendedSeparator />

        {/* Technologies Skeleton */}
        <div className="space-y-2">
          <Typography variant="small" className="text-muted-foreground">
            Technologies
          </Typography>
          <div className="flex flex-wrap gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
          </div>
        </div>

        {/* Actions Skeleton */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSectionSkeleton;
