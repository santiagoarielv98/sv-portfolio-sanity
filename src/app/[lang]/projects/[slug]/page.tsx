import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  GithubIcon,
  Globe,
  Layout,
  Link2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetail {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: "frontend" | "backend" | "fullstack";
  startDate: string;
  status: "completed" | "in-progress" | "planned";
  links: Array<{ title: string; url: string }>;
}

const projectDetail: ProjectDetail = {
  title: "Portfolio Website",
  description:
    "Personal portfolio built with Next.js, Tailwind CSS, and Sanity CMS",
  longDescription: `
    A modern and responsive portfolio website built with the latest web technologies.
    This project showcases my skills and experience in web development, featuring
    a clean design, smooth animations, and excellent performance metrics.
  `,
  image: "https://picsum.photos/seed/portfolio/1920/1080",
  gallery: [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
  ],
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
  features: [
    "Responsive design with mobile-first approach",
    "Dark mode support with system preference detection",
    "SEO optimized with Next.js features",
    "Content management with Sanity CMS",
    "Performance optimized with lazy loading and image optimization",
    "Smooth animations and transitions",
  ],
  demoUrl: "https://portfolio.dev",
  repoUrl: "https://github.com/user/portfolio",
  category: "frontend",
  startDate: "2024-01",
  status: "completed",
  links: [
    { title: "Documentation", url: "https://docs.portfolio.dev" },
    { title: "Design System", url: "https://design.portfolio.dev" },
  ],
};

export default function ProjectDetailPage() {
  return (
    <main className="relative">
      {/* Global noise overlay */}
      <div className="fixed inset-0 -z-50 pattern-noise pointer-events-none" />
      {/* Global gradient mesh */}
      <div className="fixed inset-0 -z-40 gradient-mesh pointer-events-none" />

      {/* Header Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 pattern-circuit opacity-70 pattern-fade-in" />
          <div className="pattern-connector pattern-connector-bottom pattern-dots opacity-80" />
        </div>
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href="/projects" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </ExtendedButton>
          </div>

          {/* Project Header */}
          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            {/* Left Column - Image */}
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={projectDetail.image}
                alt={projectDetail.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div>
                <ExtendedBadge variant="gradient" className="mb-4">
                  {projectDetail.category}
                </ExtendedBadge>
                <Typography variant="h1" className="mb-2">
                  {projectDetail.title}
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  {projectDetail.description}
                </Typography>
              </div>

              <ExtendedSeparator />

              {/* Quick Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Typography variant="small" className="text-muted-foreground">
                    Started
                  </Typography>
                  <ExtendedBadge
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {projectDetail.startDate}
                  </ExtendedBadge>
                </div>
                <div className="space-y-2">
                  <Typography variant="small" className="text-muted-foreground">
                    Status
                  </Typography>
                  <ExtendedBadge
                    variant={
                      projectDetail.status === "completed" ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                  >
                    {projectDetail.status}
                  </ExtendedBadge>
                </div>
              </div>

              <ExtendedSeparator />

              {/* Technologies */}
              <div className="space-y-2">
                <Typography variant="small" className="text-muted-foreground">
                  Technologies
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {projectDetail.technologies.map((tech) => (
                    <ExtendedBadge key={tech} variant="ghost">
                      {tech}
                    </ExtendedBadge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                {projectDetail.demoUrl && (
                  <ExtendedButton variant="default" size="lg" asChild>
                    <a
                      href={projectDetail.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Visit Website
                    </a>
                  </ExtendedButton>
                )}
                {projectDetail.repoUrl && (
                  <ExtendedButton variant="outline" size="lg" asChild>
                    <a
                      href={projectDetail.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-5 h-5 mr-2" />
                      View Source
                    </a>
                  </ExtendedButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="relative py-20 bg-primary/5">
        <div className="absolute inset-0 -z-20">
          <div className="pattern-connector pattern-connector-top pattern-circuit opacity-70" />
          <div className="absolute inset-0 pattern-dots opacity-80" />
          <div className="pattern-connector pattern-connector-bottom pattern-grid opacity-70" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="w-5 h-5" />
                    About the Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Typography variant="body1" className="whitespace-pre-line">
                    {projectDetail.longDescription}
                  </Typography>
                </CardContent>
              </ExtendedCard>

              {/* Features */}
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {projectDetail.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1.5 size-1.5 rounded-full bg-primary/50" />
                        <Typography variant="body1">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </ExtendedCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Links Card */}
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="w-5 h-5" />
                    Project Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projectDetail.links.map((link, index) => (
                    <ExtendedButton
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {link.title}
                      </a>
                    </ExtendedButton>
                  ))}
                </CardContent>
              </ExtendedCard>

              {/* Repository Info */}
              {projectDetail.repoUrl && (
                <ExtendedCard>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      Repository
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ExtendedButton
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={projectDetail.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        View Source Code
                      </a>
                    </ExtendedButton>
                  </CardContent>
                </ExtendedCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-20">
          <div className="pattern-connector pattern-connector-top pattern-dots opacity-80" />
          <div className="absolute inset-0 pattern-grid opacity-70 pattern-fade-out" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {projectDetail.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
