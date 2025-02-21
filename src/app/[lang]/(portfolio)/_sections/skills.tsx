import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { getIcon } from "@/components/icons";
import { SectionHeader } from "@/components/section";
import { SECTIONS } from "@/lib/config/navigation";
import { Brain } from "lucide-react";
import { useTranslations } from "next-intl";
import type { HomeQueryResult } from "../../../../../sanity.types";

type Props = {
  skillCategories: HomeQueryResult["skillCategories"];
};

const SkillsSection = ({ skillCategories }: Props) => {
  const t = useTranslations("skills");
  return (
    <section
      id={SECTIONS.SKILLS.slice(1)}
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-grid" />
        <div className="pattern-dots absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-circuit" />
      </div>
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} badge={t("subtitle")} icon={Brain} />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories?.map((category, index) => {
            const Icon = getIcon(category.icon!);
            return (
              <ExtendedCard
                key={index}
                className="flex flex-col"
                variant="default"
              >
                <CardHeader className="flex-row gap-4">
                  <ExtendedButton size="icon" variant="gradient" float="none">
                    <Icon />
                  </ExtendedButton>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <CardTitle>{category.title as unknown as string}</CardTitle>
                    <CardDescription>
                      {category.description as unknown as string}
                    </CardDescription>
                  </div>
                </CardHeader>
                {Array.isArray(category.skills) &&
                  category.skills.length > 0 && (
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {category.skills?.map((skill) => {
                          const Icon = getIcon(skill.icon!);
                          return (
                            <ExtendedBadge
                              key={skill.title as unknown as string}
                              variant="ghost"
                            >
                              <Icon />
                              {skill.title as unknown as string}
                            </ExtendedBadge>
                          );
                        })}
                      </div>
                    </CardContent>
                  )}
              </ExtendedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
