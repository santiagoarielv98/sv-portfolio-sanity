import { Calendar, ChevronDown, Code, MapPin } from "lucide-react";
import Image from "next/image";

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

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: "frontend" | "backend" | "fullstack";
}

export const experiences: Experience[] = [
  {
    title: "Senior Developer",
    company: "TechnoSoft",
    period: "2019 - Present",
    location: "New York, USA",
    description:
      "Led development of multiple web applications using React and Node.js",
    technologies: ["React", "Node.js"],
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Inc",
    period: "2017 - 2019",
    location: "San Francisco, USA",
    description:
      "Developed and maintained enterprise web applications using Angular and Java",
    technologies: ["Angular", "Java", "Spring Boot"],
  },
  {
    title: "Web Development Internship",
    company: "StartupTech",
    period: "2016 - 2017",
    location: "Remote",
    description:
      "Assisted in frontend development and learned modern web technologies",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and Sanity CMS",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    demoUrl: "https://portfolio.dev",
    repoUrl: "https://github.com/user/portfolio",
    category: "frontend",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://ecommerce.dev",
    repoUrl: "https://github.com/user/ecommerce",
    category: "fullstack",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication and real-time updates",
    image: "/projects/taskapi.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
    repoUrl: "https://github.com/user/taskapi",
    category: "backend",
  },
];

const Home = () => {
  return (
    <main>
      <section className="flex min-h-[90vh] items-center justify-center relative">
        <div className="mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
          <Typography variant="h1">Welcome to my Portfolio</Typography>

          <Typography variant="h2" className="max-w-2xl font-light">
            Full Stack Developer Specialized in creating high-performance web
            applications with innovative technologies. 🚀
          </Typography>

          <ExtendedSeparator />

          <ExtendedButton size="lg" className="font-display">
            <Code className="w-6 h-6 mr-2" />
            Get Started
          </ExtendedButton>
        </div>

        <div className="absolute bottom-4 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>
      {/* about me*/}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <ExtendedBadge className="mx-auto flex items-center gap-2">
              <Code />
              About Me
            </ExtendedBadge>
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
              <Typography variant="h2">About Me</Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <div>
              <Typography variant="h3">Who am I?</Typography>
              <Typography variant="body1" className="mt-4">
                I am a Full Stack Developer with a passion for creating
                high-performance web applications with innovative technologies.
                I have experience in building scalable and responsive web
                applications using modern front-end and back-end technologies.
              </Typography>
            </div>
            <div>
              <Typography variant="h3">What do I do?</Typography>
              <Typography variant="body1" className="mt-4">
                I specialize in creating high-performance web applications with
                innovative technologies. I have experience in building scalable
                and responsive web applications using modern front-end and
                back-end technologies.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4">
            <ExtendedBadge className="mx-auto flex items-center gap-2">
              <Code />
              Experience
            </ExtendedBadge>
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
              <Typography variant="h2">Experience</Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>

            {/* Timeline container */}
            <div className="relative mt-12">
              {/* Línea vertical central */}
              <div className="absolute md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/5 via-primary/20 to-transparent" />

              <div className="md:-space-y-8 space-y-8">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    data-direction={index % 2 === 0 ? "left" : "right"}
                    className="flex items-center gap-8 data-[direction=left]:flex-row data-[direction=right]:flex-row-reverse"
                  >
                    {/* Punto en la línea de tiempo */}
                    <div className="absolute md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary/30" />

                    {/* Card de experiencia */}
                    <div
                      data-direction={index % 2 === 0 ? "left" : "right"}
                      className="md:w-1/2 data-[direction=left]:md:pr-8 data-[direction=right]:md:pl-8 md:ml-0 ml-4"
                    >
                      <ExtendedCard scale="none" variant="soft">
                        <CardHeader className="flex-row gap-4">
                          <ExtendedButton
                            size="icon"
                            variant="soft"
                            shine="none"
                            float="none"
                            scale="none"
                            gradient="none"
                          >
                            <Code />
                          </ExtendedButton>
                          <div className="flex gap-1.5 flex-col flex-1">
                            <CardTitle>{experience.title}</CardTitle>
                            <CardDescription>
                              {experience.company}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="flex gap-2 flex-wrap">
                            <ExtendedBadge>
                              <Calendar className="mr-1" />
                              {experience.period}
                            </ExtendedBadge>
                            <ExtendedBadge>
                              <MapPin className="mr-1" />
                              {experience.location}
                            </ExtendedBadge>
                          </div>

                          <Typography variant="body1">
                            {experience.description}
                          </Typography>

                          <ExtendedSeparator />

                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <ExtendedBadge key={techIndex} variant="ghost">
                                {tech}
                              </ExtendedBadge>
                            ))}
                          </div>
                        </CardContent>
                      </ExtendedCard>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <ExtendedBadge className="mx-auto flex items-center gap-2">
              <Code />
              Projects
            </ExtendedBadge>
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
              <Typography variant="h2">Projects</Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <ExtendedCard
                key={index}
                className="group overflow-hidden flex flex-col"
                scale="none"
              >
                <div className="relative w-full aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 z-10 group-hover:opacity-50 transition-opacity" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <ExtendedBadge
                        key={techIndex}
                        variant="ghost"
                        scale="none"
                      >
                        {tech}
                      </ExtendedBadge>
                    ))}
                  </div>
                </CardContent>
                <ExtendedSeparator className="mb-6 mt-auto" />
                <CardFooter className="gap-4">
                  {project.demoUrl && (
                    <ExtendedButton
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      Live Demo
                    </ExtendedButton>
                  )}
                  {project.repoUrl && (
                    <ExtendedButton
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      Source Code
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
};

export default Home;
