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
  { label: "All Projects", value: "all", icon: <Code className="w-4 h-4" /> },
  {
    label: "Frontend",
    value: "frontend",
    icon: <ExternalLink className="w-4 h-4" />,
  },
  { label: "Backend", value: "backend", icon: <Github className="w-4 h-4" /> },
  {
    label: "Full Stack",
    value: "fullstack",
    icon: <Code className="w-4 h-4" />,
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
      <div className="fixed inset-0 -z-50 pattern-noise pointer-events-none" />
      {/* Global gradient mesh */}
      <div className="fixed inset-0 -z-40 gradient-mesh pointer-events-none" />

      {/* Projects Section */}
      <section className="relative py-20">
        {/* Pattern with connectors */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 pattern-topography opacity-80 pattern-fade-in" />
          <div className="pattern-connector pattern-connector-bottom pattern-dots opacity-80" />
        </div>

        <div className="container mx-auto px-4">
          {/* Back to Home Button */}
          <div className="mb-8">
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href="/" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
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
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
              <Typography variant="h2">All Projects</Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>
            <Typography
              variant="body1"
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              Explore my latest projects and experiments. From frontend
              applications to full-stack solutions, each project represents a
              unique challenge and learning experience.
            </Typography>
          </div>

          {/* Search and Filters Bar */}
          <div className="flex flex-col gap-6 mb-12">
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
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-4xl mx-auto w-full">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 w-full bg-background/50"
                />
              </div>

              {/* Sort Dropdown */}
              <Select>
                <SelectTrigger className="w-[180px] bg-background/50">
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
                <button className="ml-1 hover:text-primary">×</button>
              </ExtendedBadge>
              <ExtendedBadge variant="default" className="bg-background/50">
                React
                <button className="ml-1 hover:text-primary">×</button>
              </ExtendedBadge>
              {/* Clear Filters Button */}
              <ExtendedButton variant="ghost" size="sm">
                Clear all filters
              </ExtendedButton>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ExtendedCard
                key={index}
                variant="default"
                className="group overflow-hidden flex flex-col"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 z-10 group-hover:opacity-50 transition-opacity" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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

                <ExtendedSeparator className="mb-6 mt-auto" />

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
                        <ExternalLink className="w-4 h-4 mr-1" />
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
                        <Github className="w-4 h-4 mr-1" />
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
