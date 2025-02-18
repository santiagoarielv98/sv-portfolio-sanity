import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { Code } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-topography" />
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
            About Me
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">About Me</Typography>
            <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Typography variant="h3">Who am I?</Typography>
            <Typography variant="body1" className="mt-4">
              I am a Full Stack Developer with a passion for creating
              high-performance web applications with innovative technologies. I
              have experience in building scalable and responsive web
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
  );
};

export default AboutSection;
