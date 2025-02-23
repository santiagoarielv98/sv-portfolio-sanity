"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigation } from "@/lib/config/navigation";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ExtendedBadge } from "./extended-badge";
import { ExtendedButton } from "./extended-button";
import { ExtendedSeparator } from "./extended-separator";
import LocaleSwitcher from "./locale-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { Icon } from "./icon";

type Props = {
  status?: string | null;
};

const SiteHeaderDesktop = ({ status }: Props) => {
  const lang = useLocale();
  const available = useTranslations("availability");

  const nav = useTranslations("nav");

  return (
    <div className="hidden md:flex md:items-center md:gap-6">
      {navigation.map((item) =>
        item.hasSubmenu ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger asChild>
              <ExtendedButton variant="ghost" size="sm" className="group">
                {nav(item.name)}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </ExtendedButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              {item.submenu?.map((submenuItem) => (
                <DropdownMenuItem key={submenuItem.href} asChild>
                  <Link
                    href={`/${lang}${submenuItem.href}`}
                    className="flex items-center gap-2"
                  >
                    <Icon icon={submenuItem.icon} className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span>{nav(submenuItem.titleKey)}</span>
                      {submenuItem.descriptionKey && (
                        <span className="text-muted-foreground text-xs">
                          {nav(submenuItem.descriptionKey)}
                        </span>
                      )}
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <ExtendedButton key={item.name} variant="ghost" size="sm" asChild>
            <a href={`/${lang}/${item.href}`}>{nav(item.name)}</a>
          </ExtendedButton>
        ),
      )}
      <ExtendedSeparator orientation="vertical" className="mx-2 h-6" />

      {/* Language Selector */}
      <LocaleSwitcher />
      <ThemeSwitcher />
      {/* Theme Toggle Dropdown */}

      <ExtendedSeparator orientation="vertical" className="mx-2 h-6" />

      <ExtendedBadge>
        <span
          data-status={status || "unavailable"}
          className="relative inline-flex size-2.5 rounded-full bg-red-500 data-[status=available]:bg-green-500 data-[status=busy]:bg-yellow-500"
        />
        {available(`${status || "unavailable"}`)}
      </ExtendedBadge>
    </div>
  );
};

export default SiteHeaderDesktop;
