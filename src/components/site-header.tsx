"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigation } from "@/lib/config/navigation";
import type { Locale } from "@/lib/i18n/config";
import { useTranslations } from "@/lib/i18n/useTranslations";
import { ChevronDown, Code, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ExtendedButton } from "./extended-button";
import { ExtendedSeparator } from "./extended-separator";
import ModeLang from "./mode-lang";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader({ lang }: { lang: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslations(lang);

  return (
    <header className="border-primary/10 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center">
          <div className="flex w-full items-center justify-between gap-6 md:gap-10">
            {/* Logo */}
            <ExtendedButton variant="ghost" className="font-bold" asChild>
              <a href="#" className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="font-display">Portfolio</span>
              </a>
            </ExtendedButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {navigation.map((item) =>
                item.hasSubmenu ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <ExtendedButton
                        variant="ghost"
                        size="sm"
                        className="group"
                      >
                        {t(item.name)}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </ExtendedButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                      {item.submenu?.map((submenuItem) => {
                        const Icon = submenuItem.icon;
                        return (
                          <DropdownMenuItem key={submenuItem.href} asChild>
                            <Link
                              href={submenuItem.href}
                              className="flex items-center gap-2"
                            >
                              <Icon className="h-4 w-4" />
                              <div className="flex flex-col">
                                <span>{t(submenuItem.titleKey)}</span>
                                {submenuItem.descriptionKey && (
                                  <span className="text-muted-foreground text-xs">
                                    {t(submenuItem.descriptionKey)}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <ExtendedButton
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <a href={item.href}>{t(item.name)}</a>
                  </ExtendedButton>
                ),
              )}
              <ExtendedSeparator orientation="vertical" className="mx-2 h-6" />

              {/* Language Selector */}
              <ModeLang />
              <ModeToggle />
              {/* Theme Toggle Dropdown */}

              <ExtendedSeparator orientation="vertical" className="mx-2 h-6" />

              {/* <ExtendedBadge className="animate-pulse">
                Available for hire
              </ExtendedBadge> */}
              <ExtendedButton>{t("nav.contact")}</ExtendedButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Language Selector Mobile */}
              <ModeLang />

              {/* Theme Toggle Mobile */}
              <ModeToggle />
              {/* Menu Toggle */}
              <ExtendedButton
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </ExtendedButton>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-primary/10 border-t md:hidden">
            <div className="space-y-4 py-4">
              {navigation.map((item) =>
                item.hasSubmenu ? (
                  <Accordion
                    key={item.name}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value={item.name}>
                      <AccordionTrigger className="py-0">
                        <ExtendedButton
                          asChild
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <div>{t(item.name)}</div>
                        </ExtendedButton>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-0">
                        {item.submenu?.map((submenuItem) => {
                          const Icon = submenuItem.icon;
                          return (
                            <ExtendedButton
                              key={submenuItem.href}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start pl-6"
                              asChild
                            >
                              <Link
                                href={submenuItem.href}
                                className="flex items-center gap-2"
                              >
                                <Icon className="h-4 w-4" />
                                {t(submenuItem.titleKey)}
                              </Link>
                            </ExtendedButton>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <ExtendedButton
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <a href={item.href}>{t(item.name)}</a>
                  </ExtendedButton>
                ),
              )}
              <ExtendedSeparator className="my-4" />
              {/* <ExtendedBadge className="animate-pulse w-full">
                Available for hire
              </ExtendedBadge> */}
              <ExtendedButton className="mt-4 w-full">
                {t("nav.contact")}
              </ExtendedButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
