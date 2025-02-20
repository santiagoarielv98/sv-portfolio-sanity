import type { Locale } from "@/lib/i18n/config";
import { translations } from "@/lib/i18n/transalation";
import { Code, Mail } from "lucide-react";
import type { ProfileQueryResult } from "../../sanity.types";
import { ExtendedButton } from "./extended-button";
import { ExtendedCard } from "./extended-card";
import { ExtendedSeparator } from "./extended-separator";
import { getIcon } from "./icons";
import { Typography } from "./ui/typography";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

type SiteFooterProps = {
  footer: string;
  lang: Locale;
  profile: ProfileQueryResult["profile"];
  contact: ProfileQueryResult["contact"];
};

export function SiteFooter({
  footer,
  lang,
  profile,
  contact,
}: SiteFooterProps) {
  return (
    <footer className="bg-primary/5 border-primary/10 border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <ExtendedButton variant="ghost" className="font-bold" asChild>
              <a href="#" className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="font-display">
                  {/* Portfolio */}
                  {profile?.name}
                </span>
              </a>
            </ExtendedButton>
            <Typography
              variant="body2"
              className="text-muted-foreground max-w-md"
            >
              {footer}
            </Typography>
          </div>

          <div className="space-y-4">
            <Typography variant="h4">
              {translations[lang].footer.quickLinks}
            </Typography>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <ExtendedButton
                  key={link.name}
                  variant="ghost"
                  className="justify-start"
                  size="sm"
                  asChild
                >
                  <a href={link.href}>{link.name}</a>
                </ExtendedButton>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="space-y-4">
            <Typography variant="h4">
              {translations[lang].footer.letsConnect}
            </Typography>
            <ExtendedCard variant="solid" className="backdrop-blur-none">
              <div className="space-y-4 p-6">
                <Typography variant="body2" className="text-muted-foreground">
                  {translations[lang].footer.availableFor}
                </Typography>
                <ExtendedButton className="w-full" asChild>
                  <a href={`mailto:${contact?.email as string}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {translations[lang].footer.getInTouch}
                  </a>
                </ExtendedButton>
              </div>
            </ExtendedCard>
          </div>
        </div>

        <ExtendedSeparator className="my-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* © 2025 Santiago. All rights reserved. */}
          <Typography variant="small" className="text-muted-foreground">
            © {new Date().getFullYear()} {profile?.name}.{" "}
            {translations[lang].footer.allRightsReserved}
          </Typography>
          <div className="flex gap-2">
            {profile?.socialLinks?.map((social) => {
              const Icon = getIcon(social.icon as string);
              return (
                <ExtendedButton
                  key={social.platform as string}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform as string}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </ExtendedButton>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
