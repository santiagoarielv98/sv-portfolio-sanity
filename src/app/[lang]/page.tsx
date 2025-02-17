import { Calendar, ChevronDown, Code } from "lucide-react";
import Image from "next/image";
import { ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

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

export interface Skill {
  title: string;
  description: string;
  category: "frontend" | "backend" | "cloud";
  technologies: Array<{
    name: string;
    level: "basic" | "intermediate" | "advanced" | "expert";
  }>;
}

interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  socials: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
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

const contactInfo: ContactInfo = {
  email: "contact@example.com",
  location: "Buenos Aires, Argentina",
  availability: "Open to work - Full-time opportunities",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "Portfolio",
      url: "https://yourportfolio.com",
      icon: <ExternalLink className="w-4 h-4" />,
    },
  ],
};

const Home = () => {
  return (
    <main className="relative">
      {/* Global noise overlay */}
      <div className="fixed inset-0 -z-50 pattern-noise pointer-events-none" />
      {/* Global gradient mesh */}
      <div className="fixed inset-0 -z-40 gradient-mesh pointer-events-none" />

      {/* Hero section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20 pattern-topography opacity-80" />
        <div className="mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
          <Typography variant="h1">Welcome to my Portfolio</Typography>

          <Typography variant="h2" className="max-w-2xl font-light">
            Full Stack Developer Specialized in creating high-performance web
            applications with innovative technologies. 🚀
          </Typography>

          <ExtendedSeparator />

          <ExtendedButton size="lg" variant="default" className="font-display">
            <Code className="w-6 h-6 mr-2" />
            Get Started
          </ExtendedButton>
        </div>

        <div className="absolute bottom-4 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* About section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-20 pattern-dots opacity-100" />
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <ExtendedBadge
              variant="gradient"
              className="mx-auto flex items-center gap-2"
            >
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

      {/* Experience section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-20 pattern-grid opacity-100" />
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4">
            <ExtendedBadge
              variant="gradient"
              className="mx-auto flex items-center gap-2"
            >
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
                      <ExtendedCard variant="solid">
                        <CardHeader className="flex-row gap-4">
                          <ExtendedButton
                            size="icon"
                            variant="gradient"
                            float="none"
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
                            <ExtendedBadge variant="default">
                              <Calendar className="mr-1" />
                              {experience.period}
                            </ExtendedBadge>
                            <ExtendedBadge variant="default">
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

      {/* Projects section */}
      <section className="relative py-20 overflow-hidden gradient-shine">
        <div className="absolute inset-0 -z-20 pattern-circuit opacity-70" />
        <div className="container mx-auto px-4">
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
              <Typography variant="h2">Projects</Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <ExtendedCard
                key={index}
                variant="default"
                className="group overflow-hidden flex flex-col"
              >
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
                <ExtendedSeparator className="mb-6 mt-auto" />
                <CardFooter className="gap-4">
                  {project.demoUrl && (
                    <ExtendedButton
                      variant="default"
                      size="sm"
                      className="flex-1"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      Live Demo
                    </ExtendedButton>
                  )}
                  {project.repoUrl && (
                    <ExtendedButton
                      variant="solid"
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
                <Code className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </Link>
            </ExtendedButton>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-20 pattern-dots opacity-100" />
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
                        <ExtendedBadge variant="ghost">
                          {tech.name}
                        </ExtendedBadge>
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

      {/* Contact section - keep its existing bg-primary/5 but add pattern */}
      <section className="relative py-20 overflow-hidden bg-primary/5">
        <div className="absolute inset-0 -z-20 pattern-grid opacity-80" />
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <ExtendedBadge
              variant="gradient"
              className="mx-auto flex items-center gap-2"
            >
              <Mail />
              Contact
            </ExtendedBadge>
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
              <Typography variant="h2">Get in Touch</Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Contact Info Cards Column */}
            <div className="space-y-6">
              {/* Email Card */}
              <ExtendedCard variant="solid" className="overflow-hidden">
                <CardHeader className="flex-row items-center gap-4">
                  <ExtendedButton size="icon" variant="gradient" float="none">
                    <Mail />
                  </ExtendedButton>
                  <div>
                    <CardTitle className="text-sm">Email</CardTitle>
                    <CardDescription className="text-primary">
                      {contactInfo.email}
                    </CardDescription>
                  </div>
                </CardHeader>
              </ExtendedCard>

              {/* Location Card */}
              <ExtendedCard variant="solid" className="overflow-hidden">
                <CardHeader className="flex-row items-center gap-4">
                  <ExtendedButton size="icon" variant="gradient" float="none">
                    <MapPin />
                  </ExtendedButton>
                  <div>
                    <CardTitle className="text-sm">Location</CardTitle>
                    <CardDescription className="text-primary">
                      {contactInfo.location}
                    </CardDescription>
                  </div>
                </CardHeader>
              </ExtendedCard>

              {/* Availability Card */}
              <ExtendedCard variant="solid" className="overflow-hidden">
                <CardHeader className="flex-row items-center gap-4">
                  <ExtendedButton
                    size="icon"
                    variant="gradient"
                    float="none"
                    className="relative grid place-items-center"
                  >
                    <span className="absolute inline-flex size-4 animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
                  </ExtendedButton>
                  <div>
                    <CardTitle className="text-sm">Availability</CardTitle>
                    <CardDescription className="text-green-500">
                      {contactInfo.availability}
                    </CardDescription>
                  </div>
                </CardHeader>
              </ExtendedCard>

              <div className="flex items-center gap-4">
                <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
                <Typography variant="h3">Social Links</Typography>
                <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
              </div>
              {/* Social Links Card */}
              <ExtendedCard variant="solid">
                <CardHeader>
                  <CardTitle className="text-sm">Connect with me</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {contactInfo.socials.map((social, index) => (
                    <ExtendedButton
                      key={index}
                      variant="solid"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {social.icon}
                        {social.name}
                      </a>
                    </ExtendedButton>
                  ))}
                </CardContent>
              </ExtendedCard>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <ExtendedCard variant="default" className="h-full">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Typography variant="small">Name</Typography>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Typography variant="small">Email</Typography>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Typography variant="small">Subject</Typography>
                    <Input placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <Typography variant="small">Message</Typography>
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[100px] resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <ExtendedButton variant="default" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </ExtendedButton>
                </CardFooter>
              </ExtendedCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
