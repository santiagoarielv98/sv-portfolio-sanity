import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  badge: string;
}

export const SectionHeader = ({
  icon: Icon,
  title,
  badge,
}: SectionHeaderProps) => {
  return (
    <div className="mb-12 space-y-4 text-center">
      <ExtendedBadge
        variant="gradient"
        className="mx-auto flex items-center gap-2"
      >
        <Icon />
        {badge}
      </ExtendedBadge>
      <div className="mx-auto flex max-w-2xl items-center gap-4">
        <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
        <Typography variant="h2">{title}</Typography>
        <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
      </div>
    </div>
  );
};

interface PatternBackgroundProps {
  children: ReactNode;
  topPattern?: "dots" | "grid" | "circuit" | "topography";
  middlePattern?: "dots" | "grid" | "circuit" | "topography";
  bottomPattern?: "dots" | "grid" | "circuit" | "topography";
}

export const PatternBackground = ({
  children,
  topPattern,
  middlePattern,
  bottomPattern,
}: PatternBackgroundProps) => {
  return (
    <div className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        {topPattern && (
          <div
            className={`pattern-connector pattern-connector-top pattern-${topPattern}`}
          />
        )}
        {middlePattern && (
          <div className={`absolute inset-0 pattern-${middlePattern}`} />
        )}
        {bottomPattern && (
          <div
            className={`pattern-connector pattern-connector-bottom pattern-${bottomPattern}`}
          />
        )}
      </div>
      {children}
    </div>
  );
};

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({
  children,
  className = "",
}: SectionContainerProps) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};
