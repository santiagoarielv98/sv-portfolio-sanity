import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import type { SkillCategory } from "@/types/sanity";
import { Code } from "lucide-react";

type Props = {
  section: SkillCategory;
};

const SkillsSection = ({ section }: Props) => {
  const skillCategories = section.content.filter(
    (e) => e._type === "skillCategory",
  );
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-grid" />
        <div className="pattern-dots absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-circuit" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <ExtendedBadge
            variant="gradient"
            className="mx-auto flex items-center gap-2"
          >
            <Code />
            {section.subtitle as unknown as string}
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">
              {section.title as unknown as string}
            </Typography>
            <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories?.map((category, index) => (
            <ExtendedCard
              key={index}
              className="flex flex-col"
              variant="default"
            >
              <CardHeader className="flex-row gap-4">
                <ExtendedButton size="icon" variant="gradient" float="none">
                  <Code />
                </ExtendedButton>
                <div className="flex flex-1 flex-col gap-1.5">
                  <CardTitle>{category.title as unknown as string}</CardTitle>
                  <CardDescription>
                    {category.description as unknown as string}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <ExtendedBadge
                      key={skill.title as unknown as string}
                      variant="ghost"
                    >
                      {skill.title as unknown as string}
                    </ExtendedBadge>
                  ))}
                </div>
              </CardContent>
            </ExtendedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
