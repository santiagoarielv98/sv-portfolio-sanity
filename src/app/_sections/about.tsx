import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { Code } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-topography" />
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
