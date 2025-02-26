import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExtendedButton } from "./extended-button";
import { Check, Globe } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { languages } from "@/lib/i18n/config";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LocaleSwitcher = () => {
  const common = useTranslations("common");
  const { lang } = useParams();
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ExtendedButton size="icon" variant="ghost">
          <Globe className="h-4 w-4" />
          <span className="sr-only">{common("toggleMenu")}</span>
        </ExtendedButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link
              href={redirectedPathname(language.code as Locale)}
              scroll={false}
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={15}
                height={15}
                className="h-3.5 w-3.5 rounded-full object-cover"
              />
              {language.name}
              <Check
                className={cn(
                  "ml-auto",
                  language.code === lang ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
