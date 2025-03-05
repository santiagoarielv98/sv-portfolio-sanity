import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { i18n } from "@/lib/i18n/config";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Space_Grotesk, Urbanist } from "next/font/google";
import { ThemeProvider } from "./provider";

import "../globals.css";

import type { Locale } from "@/lib/i18n/config";
import { sanityFetch } from "@/sanity/lib/client";
import { getProfileQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { cache } from "react";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export async function generateMetadata() {
  const messages = await getTranslations("meta");

  return {
    title: {
      default: "SV Portfolio",
      template: "%s | " + "SV Portfolio",
      absolute: "",
    },
    description: messages("description"),
    keywords:
      "portafolio, proyectos, experiencia, habilidades, desarrollo web, frontend, React, Next.js, TypeScript, Sanity",
    authors: [{ name: "Santiago Villanueva" }],
  } as Metadata;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const getUserData = cache(async (params: { lang: Locale }) =>
  sanityFetch({
    query: getProfileQuery,
    params,
  }),
);

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }> &
    Props,
) {
  const [params, messages] = await Promise.all([props.params, getMessages()]);

  const user = await getUserData(params);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${urbanist.variable} font-urbanist min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader profile={user.profile} />
            {props.children}
            <SiteFooter {...params} user={user} />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
