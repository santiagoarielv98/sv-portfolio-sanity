import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: "frontend" | "backend" | "fullstack";
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and Sanity CMS",
    image: "https://picsum.photos/seed/portfolio/800/600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    demoUrl: "https://portfolio.dev",
    repoUrl: "https://github.com/user/portfolio",
    category: "frontend",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    image: "https://picsum.photos/seed/portfolio/800/600",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://ecommerce.dev",
    repoUrl: "https://github.com/user/ecommerce",
    category: "fullstack",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication and real-time updates",
    image: "https://picsum.photos/seed/portfolio/800/600",
    technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
    repoUrl: "https://github.com/user/taskapi",
    category: "backend",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-circuit" />
        <div className="pattern-grid absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-dots" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <ExtendedBadge
            variant="gradient"
            className="mx-auto flex items-center gap-2"
          >
            <Code />
            Projects
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">Projects</Typography>
            <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ExtendedCard
              key={index}
              variant="default"
              className="group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="from-background/80 to-background/20 absolute inset-0 z-10 bg-gradient-to-t transition-opacity group-hover:opacity-50" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardHeader className="relative">
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <ExtendedBadge key={techIndex} variant="ghost">
                      {tech}
                    </ExtendedBadge>
                  ))}
                </div>
              </CardContent>
              <ExtendedSeparator className="mt-auto mb-6" />
              <CardFooter className="gap-4">
                {project.demoUrl && (
                  <ExtendedButton
                    variant="default"
                    size="sm"
                    className="flex-1"
                  >
                    <Code className="mr-1 h-4 w-4" />
                    Live Demo
                  </ExtendedButton>
                )}
                {project.repoUrl && (
                  <ExtendedButton variant="solid" size="sm" className="flex-1">
                    <Code className="mr-1 h-4 w-4" />
                    Source Code
                  </ExtendedButton>
                )}
              </CardFooter>
            </ExtendedCard>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12 text-center">
          <ExtendedButton
            variant="gradient"
            size="lg"
            className="font-display group"
            asChild
          >
            <Link href="/projects">
              <span>Ver más proyectos</span>
              <Code className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </Link>
          </ExtendedButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
