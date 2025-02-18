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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import {
  Code,
  ExternalLink,
  Github,
  Search,
  SortAsc,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Puedes mover estos tipos e interfaces a un archivo separado
type ProjectCategory = "all" | "frontend" | "backend" | "fullstack";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: "frontend" | "backend" | "fullstack";
}

const projects: Project[] = [
  // ...tus proyectos existentes...
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
  // Añade más proyectos aquí
];

const categories: {
  label: string;
  value: ProjectCategory;
  icon: React.ReactNode;
}[] = [
  { label: "All Projects", value: "all", icon: <Code className="h-4 w-4" /> },
  {
    label: "Frontend",
    value: "frontend",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  { label: "Backend", value: "backend", icon: <Github className="h-4 w-4" /> },
  {
    label: "Full Stack",
    value: "fullstack",
    icon: <Code className="h-4 w-4" />,
  },
];

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A-Z", value: "az" },
  { label: "Z-A", value: "za" },
];

export default function ProjectsPage() {
  return (
    <main className="relative">
      {/* Global noise overlay */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      {/* Global gradient mesh */}
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Projects Section */}
      <section className="relative pt-4 pb-20">
        {/* Pattern with connectors */}
        <div className="absolute inset-0 -z-20">
          <div className="pattern-topography pattern-fade-in absolute inset-0 opacity-80" />
          <div className="pattern-connector pattern-connector-bottom pattern-dots opacity-80" />
        </div>

        <div className="container mx-auto px-4">
          {/* Back to Home Button */}
          <div className="mb-8">
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href="/" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </ExtendedButton>
          </div>

          {/* Header Section */}
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
              <Typography variant="h2">All Projects</Typography>
              <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
            </div>
            <Typography
              variant="body1"
              className="text-muted-foreground mx-auto max-w-2xl"
            >
              Explore my latest projects and experiments. From frontend
              applications to full-stack solutions, each project represents a
              unique challenge and learning experience.
            </Typography>
          </div>

          {/* Search and Filters Bar */}
          <div className="mb-12 flex flex-col gap-6">
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <ExtendedButton
                  key={category.value}
                  variant="gradient"
                  size="sm"
                  className="min-w-32"
                >
                  {category.icon}
                  <span>{category.label}</span>
                </ExtendedButton>
              ))}
            </div>

            {/* Search and Sort Controls */}
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
              {/* Search Bar */}
              <div className="relative w-full flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  placeholder="Search projects..."
                  className="bg-background/50 w-full pl-10"
                />
              </div>

              {/* Sort Dropdown */}
              <Select>
                <SelectTrigger className="bg-background/50 w-[180px]">
                  <SortAsc className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Display */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <ExtendedBadge variant="default" className="bg-background/50">
                Frontend
                <button className="hover:text-primary ml-1">×</button>
              </ExtendedBadge>
              <ExtendedBadge variant="default" className="bg-background/50">
                React
                <button className="hover:text-primary ml-1">×</button>
              </ExtendedBadge>
              {/* Clear Filters Button */}
              <ExtendedButton variant="ghost" size="sm">
                Clear all filters
              </ExtendedButton>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ExtendedCard
                key={index}
                variant="default"
                className="group flex flex-col overflow-hidden"
              >
                {/* Project Image */}
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

                {/* Project Info */}
                <CardHeader className="relative">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                {/* Technologies */}
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

                {/* Actions */}
                <CardFooter className="gap-4">
                  {project.demoUrl && (
                    <ExtendedButton
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live Demo
                      </a>
                    </ExtendedButton>
                  )}
                  {project.repoUrl && (
                    <ExtendedButton
                      variant="solid"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Source Code
                      </a>
                    </ExtendedButton>
                  )}
                </CardFooter>
              </ExtendedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
