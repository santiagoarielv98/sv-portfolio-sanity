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
import { Code } from "lucide-react";
import type { GetAllSectionsResult } from "../../../sanity.types";

export interface Skill {
  title: string;
  description: string;
  category: "frontend" | "backend" | "cloud";
  technologies: Array<{
    name: string;
    level: "basic" | "intermediate" | "advanced" | "expert";
  }>;
}

export const skills: Skill[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern web technologies",
    category: "frontend",
    technologies: [
      { name: "React/Next.js", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Redux/Zustand", level: "advanced" },
      { name: "HTML/CSS", level: "expert" },
      { name: "JavaScript", level: "expert" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable server-side applications and RESTful APIs",
    category: "backend",
    technologies: [
      { name: "Node.js", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MongoDB", level: "advanced" },
      { name: "GraphQL", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and maintaining applications in cloud environments",
    category: "cloud",
    technologies: [
      { name: "AWS", level: "intermediate" },
      { name: "Vercel", level: "advanced" },
      { name: "CI/CD", level: "intermediate" },
      { name: "Git", level: "advanced" },
      { name: "Linux", level: "intermediate" },
      { name: "Nginx", level: "basic" },
    ],
  },
];

type Props = {
  section: GetAllSectionsResult[number] & {
    type: "skillCategory";
    content: Array<{
      _type: "skillCategory";
    }>;
  };
};

const SkillsSection = ({ section }: Props) => {
  console.log(section);
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
          {section.content?.map((category, index) => (
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
                    <ExtendedBadge key={skill.title} variant="ghost">
                      {skill.title}
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
