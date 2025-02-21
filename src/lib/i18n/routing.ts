import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { i18n, languages } from "./config";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map((lang) => lang.code),

  // Used when no locale matches
  defaultLocale: i18n.defaultLocale,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
