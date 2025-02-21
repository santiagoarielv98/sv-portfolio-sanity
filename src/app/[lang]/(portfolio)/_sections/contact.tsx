import { Mail, MapPin } from "lucide-react";

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
import ContactForm from "@/components/form/contact-form";
import { getIcon } from "@/components/icons";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { useTranslations } from "next-intl";
import type { HomeQueryResult } from "../../../../../sanity.types";

type Props = {
  profile: HomeQueryResult["profile"];
  contact: HomeQueryResult["contact"];
};

const ContactSection = ({ contact, profile }: Props) => {
  const t = useTranslations();
  return (
    <section
      id={SECTIONS.CONTACT.slice(1)}
      className="bg-primary/5 relative overflow-hidden py-20"
    >
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
            {t("contact.subtitle")}
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">{t("contact.title")}</Typography>
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
                  <CardTitle className="text-sm">{t("common.email")}</CardTitle>
                  <CardDescription className="text-primary">
                    {contact?.email}
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
                    {t("common.location")}
                  </CardTitle>
                  <CardDescription className="text-primary">
                    {contact?.address as unknown as string}
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
                    {t("common.availability")}
                  </CardTitle>
                  <CardDescription
                    className="text-red-500 data-[status=available]:text-green-500 data-[status=busy]:text-yellow-500"
                    data-status={profile?.availability || "unavailable"}
                  >
                    {/* {contactInfo.availability} */}

                    {t(
                      `availability.${profile?.availability || "unavailable"}`,
                    )}
                  </CardDescription>
                </div>
              </CardHeader>
            </ExtendedCard>

            <div className="flex items-center gap-4">
              <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
              <Typography variant="h3">{t("common.socialLinks")}</Typography>
              <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
            </div>
            {/* Social Links Card */}
            <ExtendedCard variant="solid">
              <CardHeader>
                <CardTitle className="text-sm">{t("common.connect")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {profile?.socialLinks?.map((social, index) => {
                  const Icon = getIcon(social.icon!);
                  return (
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
                        <Icon className="h-4 w-4" />
                        {social.platform}
                      </a>
                    </ExtendedButton>
                  );
                })}
              </CardContent>
            </ExtendedCard>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
