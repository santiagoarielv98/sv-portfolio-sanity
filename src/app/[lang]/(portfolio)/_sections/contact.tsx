import * as motion from "motion/react-client";
import { Mail, MapPin } from "lucide-react";

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
import { SectionHeader } from "@/components/section";
import { Typography } from "@/components/ui/typography";
import { SECTIONS } from "@/lib/config/navigation";
import { useTranslations } from "next-intl";

import type { HomeQueryResult } from "../../../../../sanity.types";
import { Icon } from "@/components/icon";

type Props = {
  profile: HomeQueryResult["profile"];
  contact: HomeQueryResult["contact"];
};

const ContactSection = ({ contact, profile }: Props) => {
  const t = useTranslations("contact");
  const available = useTranslations("availability");
  const common = useTranslations("common");

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
        <SectionHeader title={t("title")} badge={t("subtitle")} icon={Mail} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
                    <CardTitle className="text-sm">{common("email")}</CardTitle>
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
                      {common("location")}
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
                      {common("availability")}
                    </CardTitle>
                    <CardDescription
                      className="text-red-500 data-[status=available]:text-green-500 data-[status=busy]:text-yellow-500"
                      data-status={profile?.availability || "unavailable"}
                    >
                      {available(`${profile?.availability || "unavailable"}`)}
                    </CardDescription>
                  </div>
                </CardHeader>
              </ExtendedCard>

              <div className="flex items-center gap-4">
                <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
                <Typography variant="h3">{common("socialLinks")}</Typography>
                <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
              </div>
              {/* Social Links Card */}
              <ExtendedCard variant="solid">
                <CardHeader>
                  <CardTitle className="text-sm">{common("connect")}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {profile?.socialLinks?.map((social, index) => (
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
                        <Icon icon={social.icon!} className="h-4 w-4" />
                        {social.platform}
                      </a>
                    </ExtendedButton>
                  ))}
                </CardContent>
              </ExtendedCard>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
