import { navigation } from "@/lib/config/navigation";
import type { Locale } from "@/lib/i18n/config";
import { Code, Mail } from "lucide-react";
import type { ProfileQueryResult } from "../../sanity.types";
import { ExtendedButton } from "./extended-button";
import { ExtendedCard } from "./extended-card";
import { ExtendedSeparator } from "./extended-separator";
import { getIcon } from "./icons";
import { Typography } from "./ui/typography";
import Link from "next/link";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();

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
            <Typography variant="h4">{t("footer.quickLinks")}</Typography>
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <ExtendedButton
                  key={item.name}
                  variant="ghost"
                  className="justify-start"
                  size="sm"
                  asChild
                >
                  <Link href={`/${lang}/${item.href}`}>{t(item.name)}</Link>
                </ExtendedButton>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="space-y-4">
            <Typography variant="h4">{t("footer.letsConnect")}</Typography>
            <ExtendedCard variant="solid" className="backdrop-blur-none">
              <div className="space-y-4 p-6">
                <Typography variant="body2" className="text-muted-foreground">
                  {t("footer.availableFor")}
                </Typography>
                <ExtendedButton className="w-full" asChild>
                  <Link href={`mailto:${contact?.email as string}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {t("footer.getInTouch")}
                  </Link>
                </ExtendedButton>
              </div>
            </ExtendedCard>
          </div>
        </div>

        <ExtendedSeparator className="my-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Typography variant="small" className="text-muted-foreground">
            © {new Date().getFullYear()} {profile?.name}.{" "}
            {t("footer.allRightsReserved")}
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
                  <Link
                    href={social.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform as string}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </ExtendedButton>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
