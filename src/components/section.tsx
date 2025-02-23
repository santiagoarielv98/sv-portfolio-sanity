import { ExtendedBadge } from "./extended-badge";
import { ExtendedSeparator } from "./extended-separator";
import { Typography } from "./ui/typography";
import * as motion from "motion/react-client";

import type { LucideIcon } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};
