"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Code, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { ExtendedButton } from "./extended-button";
import { ExtendedSeparator } from "./extended-separator";
import { ModeToggle } from "./mode-toggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center">
          <div className="flex gap-6 md:gap-10 w-full justify-between items-center">
            {/* Logo */}
            <ExtendedButton variant="ghost" className="font-bold" asChild>
              <a href="#" className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="font-display">Portfolio</span>
              </a>
            </ExtendedButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {navigation.map((item) => (
                <ExtendedButton
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <a href={item.href}>{item.name}</a>
                </ExtendedButton>
              ))}
              <ExtendedSeparator orientation="vertical" className="mx-2 h-6" />

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ExtendedButton size="icon" variant="ghost">
                    <Globe className="h-4 w-4" />
                  </ExtendedButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code}>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <ModeToggle />
              {/* Theme Toggle Dropdown */}

              <ExtendedSeparator orientation="vertical" className="mx-2 h-6" />

              {/* <ExtendedBadge className="animate-pulse">
                Available for hire
              </ExtendedBadge> */}
              <ExtendedButton>Let&apos;s Talk</ExtendedButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Language Selector Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ExtendedButton variant="ghost" size="icon">
                    <Globe className="h-4 w-4" />
                  </ExtendedButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code}>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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
          <div className="md:hidden border-t border-primary/10">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <ExtendedButton
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href={item.href}>{item.name}</a>
                </ExtendedButton>
              ))}
              <ExtendedSeparator className="my-4" />
              {/* <ExtendedBadge className="animate-pulse w-full">
                Available for hire
              </ExtendedBadge> */}
              <ExtendedButton className="w-full mt-4">
                Let&apos;s Talk
              </ExtendedButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
