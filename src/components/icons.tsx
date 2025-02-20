import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code,
  GraduationCap,
  Heart,
  Medal,
  Target,
  Users,
} from "lucide-react";
import React from "react";

export const icons: Record<string, LucideIcon> = {
  Medal,
  Target,
  Users,
  job: Briefcase,
  education: GraduationCap,
  volunteer: Heart,
};

export const getIcon = (name: string) => {
  const Icon = icons[name] || Code;
  return <Icon />;
};
