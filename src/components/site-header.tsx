"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ExtendedButton } from "./extended-button";
import LocaleSwitcher from "./locale-switcher";
import SiteHeaderDesktop from "./site-header-desktop";
import SiteHeaderMobile from "./site-header-mobile";
import { ThemeSwitcher } from "./theme-switcher";

import type { ProfileQueryResult } from "../../sanity.types";
import { useTranslations } from "next-intl";

type Props = {
  profile: ProfileQueryResult["profile"];
  title: string;
};

export function SiteHeader({ profile, title }: Props) {
  const common = useTranslations("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-primary/10 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center">
          <div className="flex w-full items-center justify-between gap-6 md:gap-10">
            {/* Logo */}
            <ExtendedButton variant="ghost" className="font-bold" asChild>
              <a href="#" className="flex items-center gap-2">
                <span className="font-display">{title}</span>
              </a>
            </ExtendedButton>

            {/* Desktop Navigation */}
            <SiteHeaderDesktop status={profile?.availability} />

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Language Selector Mobile */}
              <LocaleSwitcher />

              {/* Theme Toggle Mobile */}
              <ThemeSwitcher />
              {/* Menu Toggle */}
              <ExtendedButton
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
                <span className="sr-only">
                  {isMenuOpen ? common("closeMenu") : common("openMenu")}
                </span>
              </ExtendedButton>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <SiteHeaderMobile
            status={profile?.availability}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
