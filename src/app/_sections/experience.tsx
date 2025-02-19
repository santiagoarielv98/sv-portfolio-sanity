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
import { Calendar, Code, MapPin } from "lucide-react";
import type { GetAllSectionsResult } from "../../../sanity.types";

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
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

type Props = {
  section: GetAllSectionsResult[number] & {
    type: "hero";
    content: Array<{
      _type: "experience";
    }>;
  };
};

export function getFormattedDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

const ExperienceSection = ({ section }: Props) => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-dots" />
        <div className="pattern-circuit absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-grid" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4">
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

          {/* Timeline container */}
          <div className="relative mt-12">
            {/* Línea vertical central */}
            <div className="from-primary/5 via-primary/20 absolute h-full w-0.5 bg-gradient-to-b to-transparent md:left-1/2" />

            <div className="space-y-8 md:-space-y-8">
              {section.content.map((experience, index) => (
                <div
                  key={index}
                  data-direction={index % 2 === 0 ? "left" : "right"}
                  className="flex items-center gap-8 data-[direction=left]:flex-row data-[direction=right]:flex-row-reverse"
                >
                  {/* Punto en la línea de tiempo */}
                  <div className="bg-primary/20 border-primary/30 absolute h-4 w-4 -translate-x-1/2 rounded-full border-2 md:left-1/2" />

                  {/* Card de experiencia */}
                  <div
                    data-direction={index % 2 === 0 ? "left" : "right"}
                    className="ml-4 md:ml-0 md:w-1/2 data-[direction=left]:md:pr-8 data-[direction=right]:md:pl-8"
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
                        <div className="flex flex-1 flex-col gap-1.5">
                          <CardTitle>
                            {experience.title as unknown as string}
                          </CardTitle>
                          <CardDescription>
                            {experience.organization as unknown as string}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          <ExtendedBadge variant="default">
                            <Calendar className="mr-1" />
                            {getFormattedDate(experience.date.start)} -{" "}
                            {experience.date.end
                              ? getFormattedDate(experience.date.end)
                              : "Present"}
                          </ExtendedBadge>
                          <ExtendedBadge variant="default">
                            <MapPin className="mr-1" />
                            {experience.location}
                          </ExtendedBadge>
                        </div>

                        {experience.description?.length === 1 ? (
                          <Typography variant="body1">
                            {experience.description[0] as unknown as string}
                          </Typography>
                        ) : (
                          <ul>
                            {experience.description?.map((desc, descIndex) => (
                              <Typography variant="body1" key={descIndex}>
                                {desc as unknown as string}
                              </Typography>
                            ))}
                          </ul>
                        )}

                        <ExtendedSeparator />
                        {/* <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <ExtendedBadge key={techIndex} variant="ghost">
                              {tech}
                            </ExtendedBadge>
                          ))}
                        </div> */}
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
  );
};

export default ExperienceSection;
