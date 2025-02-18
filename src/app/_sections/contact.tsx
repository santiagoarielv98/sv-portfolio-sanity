import React from "react";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";

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

const ContactSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-primary/5">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-dots" />
        <div className="absolute inset-0 pattern-circuit" />
        <div className="absolute inset-0 pattern-fade-out" />
      </div>
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
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
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
  );
};

export default ContactSection;
