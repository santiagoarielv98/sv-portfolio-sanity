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
import {
  ChevronDown,
  Code,
  FolderKanban,
  Grid2X2,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ExtendedButton } from "./extended-button";
import { ExtendedSeparator } from "./extended-separator";
import ModeLang from "./mode-lang";
import { ModeToggle } from "./mode-toggle";

interface NavigationItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: {
    title: string;
    href: string;
    icon: React.ReactNode;
    description?: string;
  }[];
}

const navigation: NavigationItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  {
    name: "Projects",
    href: "#projects",
    hasSubmenu: true,
    submenu: [
      {
        title: "Projects Section",
        href: "#projects",
        icon: <FolderKanban className="h-4 w-4" />,
        description: "View featured projects section",
      },
      {
        title: "All Projects",
        href: "/projects",
        icon: <Grid2X2 className="h-4 w-4" />,
        description: "Browse complete projects catalog",
      },
    ],
  },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
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
              {navigation.map((item) =>
                item.hasSubmenu ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <ExtendedButton
                        variant="ghost"
                        size="sm"
                        className="group"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </ExtendedButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[200px]">
                      {item.submenu?.map((submenuItem) => (
                        <DropdownMenuItem key={submenuItem.href} asChild>
                          <Link
                            href={submenuItem.href}
                            className="flex items-center gap-2"
                          >
                            {submenuItem.icon}
                            <div className="flex flex-col">
                              <span>{submenuItem.title}</span>
                              {submenuItem.description && (
                                <span className="text-xs text-muted-foreground">
                                  {submenuItem.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <ExtendedButton
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <a href={item.href}>{item.name}</a>
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
              <ExtendedButton>Let&apos;s Talk</ExtendedButton>
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
          <div className="md:hidden border-t border-primary/10">
            <div className="py-4 space-y-4">
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
                          <div>{item.name}</div>
                        </ExtendedButton>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0 pt-2">
                        {item.submenu?.map((submenuItem) => (
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
                              {submenuItem.icon}
                              {submenuItem.title}
                            </Link>
                          </ExtendedButton>
                        ))}
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
                    <a href={item.href}>{item.name}</a>
                  </ExtendedButton>
                ),
              )}
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
