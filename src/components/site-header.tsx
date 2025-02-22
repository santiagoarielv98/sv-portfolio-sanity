"use client";

import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import type { ProfileQueryResult } from "../../sanity.types";
import { ExtendedButton } from "./extended-button";
import LocaleSwitcher from "./locale-switcher";
import SiteHeaderDesktop from "./site-header-desktop";
import SiteHeaderMobile from "./site-header-mobile";
import { ThemeSwitcher } from "./theme-switcher";

type Props = {
  profile: ProfileQueryResult["profile"];
};

export function SiteHeader({ profile }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
