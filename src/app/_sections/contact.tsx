import { Mail, MapPin } from "lucide-react";

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
import type { GetHomePageResult } from "../../../sanity.types";

type Props = {
  profile: GetHomePageResult["profile"];

  section: GetHomePageResult["sections"][number] & {
    type: "contact";
    content: Array<{
      _type: "contact";
    }>;
  };
};

const ContactSection = ({ section, profile }: Props) => {
  const contact = section.content[0];
  return (
    <section className="bg-primary/5 relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-dots" />
        <div className="pattern-circuit absolute inset-0" />
        <div className="pattern-fade-out absolute inset-0" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <ExtendedBadge
            variant="gradient"
            className="mx-auto flex items-center gap-2"
          >
            <Mail />
            {section.subtitle as unknown as string}
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">
              {section.title as unknown as string}
            </Typography>
            <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
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
                    {profile.email}
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
                    {profile.location}
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
                    {/* {contactInfo.availability} */}
                  </CardDescription>
                </div>
              </CardHeader>
            </ExtendedCard>

            <div className="flex items-center gap-4">
              <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
              <Typography variant="h3">Social Links</Typography>
              <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
            </div>
            {/* Social Links Card */}
            <ExtendedCard variant="solid">
              <CardHeader>
                <CardTitle className="text-sm">Connect with me</CardTitle>
              </CardHeader>
              {/* <CardContent className="flex flex-wrap gap-2">
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
              </CardContent> */}
            </ExtendedCard>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <ExtendedCard variant="default" className="h-full">
              <CardHeader>
                <CardTitle>{contact.title as unknown as string}</CardTitle>
                <CardDescription>
                  {contact.description as unknown as string}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Typography variant="small">
                      {contact.form.nameField.label as unknown as string}
                    </Typography>
                    <Input
                      placeholder={
                        contact.form.nameField.placeholder as unknown as string
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Typography variant="small">
                      {contact.form.emailField.label as unknown as string}
                    </Typography>
                    <Input
                      type="email"
                      placeholder={
                        contact.form.emailField.placeholder as unknown as string
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Typography variant="small">
                    {contact.form.subjectField.label as unknown as string}
                  </Typography>
                  <Input
                    placeholder={
                      contact.form.subjectField.placeholder as unknown as string
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">
                    {contact.form.messageField.label as unknown as string}
                  </Typography>
                  <Textarea
                    placeholder={
                      contact.form.messageField.placeholder as unknown as string
                    }
                    className="min-h-[100px] resize-none"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <ExtendedButton variant="default" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  {contact.form.submitButton as unknown as string}
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
