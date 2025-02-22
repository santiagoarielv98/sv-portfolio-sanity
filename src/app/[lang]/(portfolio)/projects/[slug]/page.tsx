import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Icon } from "@/components/icon";
import Blocks from "@/components/portable-text";
import { Typography } from "@/components/ui/typography";
import { sanityFetch } from "@/sanity/lib/live";
import { projectDetailQuery } from "@/sanity/lib/queries";
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
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import type { ProjectDetailQueryResult } from "../../../../../../sanity.types";
import type { PortableTextBlock } from "next-sanity";

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

type Props = {
  params: Promise<{
    lang: Locale;
    slug: string;
  }>;
};

export default async function ProjectDetailPage(props: Props) {
  const params = await props.params;
  const t = await getTranslations("projects");

  const common = await getTranslations("common");

  const { data } = (await sanityFetch({
    query: projectDetailQuery,
    params,
  })) as { data: ProjectDetailQueryResult };

  const project = data.project!;
  console.log(project);

  return (
    <main className="relative">
      {/* Global noise overlay */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      {/* Global gradient mesh */}
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Header Section */}
      <section className="relative pt-4 pb-10">
        <div className="absolute inset-0 -z-20">
          <div className="pattern-circuit pattern-fade-in absolute inset-0" />
          <div className="pattern-connector pattern-connector-bottom pattern-dots" />
        </div>
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <ExtendedButton variant="ghost" size="sm" asChild>
              <Link href="/projects" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {common("backToProjects")}
              </Link>
            </ExtendedButton>
          </div>

          {/* Project Header */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={project!.thumbnail!}
                alt={project.title as unknown as string}
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
                  {project.title as unknown as string}
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  {project.description as unknown as string}
                </Typography>
              </div>

              <ExtendedSeparator />

              {/* Quick Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Typography variant="small" className="text-muted-foreground">
                    {common("started")}
                  </Typography>
                  <ExtendedBadge
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {projectDetail.startDate}
                  </ExtendedBadge>
                </div>
                <div className="space-y-2">
                  <Typography variant="small" className="text-muted-foreground">
                    {common("status")}
                  </Typography>
                  <ExtendedBadge
                    variant={
                      project.status === "finished" ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                  >
                    {/* {project.status} */}
                    {t(`status.${project.status}`)}
                  </ExtendedBadge>
                </div>
              </div>

              <ExtendedSeparator />

              {/* Technologies */}
              <div className="space-y-2">
                <Typography variant="small" className="text-muted-foreground">
                  {common("technologies")}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {project.skills?.map((skill) => (
                    <ExtendedBadge key={skill.title} variant="ghost">
                      <Icon icon={skill.icon!} />
                      {skill.title}
                    </ExtendedBadge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project?.links?.demo && (
                  <ExtendedButton variant="default" size="lg" asChild>
                    <a
                      href={project?.links?.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      {common("demo")}
                    </a>
                  </ExtendedButton>
                )}
                {project?.links?.repo && (
                  <ExtendedButton variant="outline" size="lg" asChild>
                    <a
                      href={project?.links?.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="mr-2 h-5 w-5" />
                      {common("source")}
                    </a>
                  </ExtendedButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="bg-primary/5 relative py-20">
        <div className="absolute inset-0 -z-20">
          <div className="pattern-connector pattern-connector-top pattern-circuit opacity-70" />
          <div className="pattern-dots absolute inset-0 opacity-80" />
          <div className="pattern-connector pattern-connector-bottom pattern-grid opacity-70" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Description */}
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    {t("aboutProject")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Blocks value={project.content as PortableTextBlock[]} />
                </CardContent>
              </ExtendedCard>

              {/* Features */}
              <ExtendedCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {t("keyFeatures")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {project.keyFeatures?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="bg-primary/50 mt-2.5 size-1.5 rounded-full" />
                        <Typography variant="body1">
                          {feature as unknown as string}
                        </Typography>
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
                    <Link2 className="h-5 w-5" />
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
                        <ExternalLink className="h-4 w-4" />
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
                      <Github className="h-5 w-5" />
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
                        <GithubIcon className="h-4 w-4" />
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
          <div className="pattern-grid pattern-fade-out absolute inset-0 opacity-70" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {projectDetail.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-lg"
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
