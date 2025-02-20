"use client";
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
import type { Locale } from "@/lib/i18n/config";
import { translations } from "@/lib/i18n/transalations";
import { useParams } from "next/navigation";
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
  const { lang } = useParams() as { lang: Locale };

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
                  <CardTitle className="text-sm">
                    {translations[lang].globals.email}
                  </CardTitle>
                  <CardDescription className="text-primary">
                    {profile?.email}
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
                  <CardTitle className="text-sm">
                    {translations[lang].globals.location}
                  </CardTitle>
                  <CardDescription className="text-primary">
                    {profile?.location as unknown as string}
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
                  className="relative grid place-items-center *:bg-red-500 data-[status=available]:*:bg-green-500 data-[status=busy]:*:bg-yellow-500"
                  data-status={profile?.availability || "unavailable"}
                >
                  <span className="absolute inline-flex size-4 animate-ping rounded-full opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full" />
                </ExtendedButton>
                <div>
                  <CardTitle className="text-sm">
                    {translations[lang].globals.availability}
                  </CardTitle>
                  <CardDescription
                    className="text-red-500 data-[status=available]:text-green-500 data-[status=busy]:text-yellow-500"
                    data-status={profile?.availability || "unavailable"}
                  >
                    {/* {contactInfo.availability} */}
                    {
                      translations[lang].availableStatus[
                        profile?.availability || "unavailable"
                      ]
                    }
                  </CardDescription>
                </div>
              </CardHeader>
            </ExtendedCard>

            <div className="flex items-center gap-4">
              <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
              <Typography variant="h3">
                {translations[lang].contact.social.social_links}
              </Typography>
              <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
            </div>
            {/* Social Links Card */}
            <ExtendedCard variant="solid">
              <CardHeader>
                <CardTitle className="text-sm">
                  {translations[lang].contact.social.connected}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {profile?.social?.map((social, index) => (
                  <ExtendedButton
                    key={index}
                    variant="solid"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={social.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {/* {social.icon} */}
                      {social.name}
                    </a>
                  </ExtendedButton>
                ))}
              </CardContent>
            </ExtendedCard>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <ExtendedCard variant="default" className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{contact.title as unknown as string}</CardTitle>
                <CardDescription>
                  {contact.description as unknown as string}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Typography variant="small">
                      {translations[lang].contact.form.nameField.label}
                    </Typography>
                    <Input
                      placeholder={
                        translations[lang].contact.form.nameField.label
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Typography variant="small">
                      {translations[lang].contact.form.emailField.label}
                    </Typography>
                    <Input
                      type="email"
                      placeholder={
                        translations[lang].contact.form.emailField.label
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Typography variant="small">
                    {translations[lang].contact.form.subjectField.label}
                  </Typography>
                  <Input
                    placeholder={
                      translations[lang].contact.form.subjectField.label
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">
                    {translations[lang].contact.form.messageField.label}
                  </Typography>
                  <Textarea
                    placeholder={
                      translations[lang].contact.form.messageField.label
                    }
                    className="h-full min-h-[100px] resize-none"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <ExtendedButton variant="default" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  {translations[lang].contact.form.submitButton}
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
