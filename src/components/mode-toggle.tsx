"use client";

import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/lib/i18n/config";
import type { ColorScheme } from "@/lib/theme/config";
import { colorScheme } from "@/lib/theme/config";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { ExtendedButton } from "./extended-button";

export function ModeToggle() {
  const { lang } = useParams<{ lang: Locale }>();
  const { setTheme, theme: currentTheme, themes } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ExtendedButton variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </ExtendedButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {colorScheme[theme as ColorScheme][lang]}
            <Check
              className={cn(
                "ml-auto",
                currentTheme === theme ? "opacity-100" : "opacity-0",
              )}
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
