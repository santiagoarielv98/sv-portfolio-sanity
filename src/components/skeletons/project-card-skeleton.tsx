import {
  CardContent,
  CardFooter,
  CardHeader,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <ExtendedCard
      variant="default"
      className="group flex w-full flex-col overflow-hidden"
    >
      {/* Image skeleton */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Header skeleton */}
      <CardHeader className="relative">
        <Skeleton className="mb-2 h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-1 h-4 w-3/4" />
      </CardHeader>

      {/* Skills skeleton */}
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-20" />
          ))}
        </div>
      </CardContent>

      <ExtendedSeparator className="mt-auto mb-6" />

      {/* Footer buttons skeleton */}
      <CardFooter className="gap-4">
        <Skeleton className="h-9 flex-1" />
        <Skeleton className="h-9 flex-1" />
      </CardFooter>
    </ExtendedCard>
  );
};

export default ProjectCardSkeleton;
