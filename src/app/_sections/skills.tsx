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

const SkillsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-grid" />
        <div className="absolute inset-0 pattern-dots" />
        <div className="pattern-connector pattern-connector-bottom pattern-circuit" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <ExtendedBadge
            variant="gradient"
            className="mx-auto flex items-center gap-2"
          >
            <Code />
            Skills
          </ExtendedBadge>
          <div className="flex items-center gap-4 max-w-2xl mx-auto">
            <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
            <Typography variant="h2">Skills</Typography>
            <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <ExtendedCard
              key={index}
              className="flex flex-col"
              variant="default"
            >
              <CardHeader className="flex-row gap-4">
                <ExtendedButton size="icon" variant="gradient" float="none">
                  <Code />
                </ExtendedButton>
                <div className="flex gap-1.5 flex-col flex-1">
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 flex-1">
                {skill.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <ExtendedBadge variant="ghost">{tech.name}</ExtendedBadge>
                      <Typography
                        variant="small"
                        className="text-muted-foreground"
                      >
                        {tech.level}
                      </Typography>
                    </div>
                    <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary/40 to-primary/60 transition-all duration-300"
                        style={{
                          width:
                            tech.level === "expert"
                              ? "100%"
                              : tech.level === "advanced"
                                ? "80%"
                                : tech.level === "intermediate"
                                  ? "60%"
                                  : "40%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </ExtendedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
