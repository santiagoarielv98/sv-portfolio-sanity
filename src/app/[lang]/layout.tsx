import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { i18n } from "@/lib/i18n/config";
import { sanityFetch } from "@/sanity/lib/live";
import { profileQuery, settingQuery } from "@/sanity/lib/queries";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Space_Grotesk, Urbanist } from "next/font/google";
import { ThemeProvider } from "./provider";

import "../globals.css";

import type { Locale } from "@/lib/i18n/config";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { data } = await sanityFetch({
    query: settingQuery,
    params,
  });
  return {
    title: {
      default: data!.title!,
      template: "%s | " + data!.title!,
      absolute: "",
    },
    description: data?.description as unknown as string,
    keywords: data?.keywords,
    authors: [{ name: data!.author! }],
  } satisfies Metadata;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }> &
    Props,
) {
  const [params, messages] = await Promise.all([props.params, getMessages()]);

  const [settings, profile] = await Promise.all([
    sanityFetch({
      query: settingQuery,
      params,
    }),
    sanityFetch({
      query: profileQuery,
      params,
    }),
  ]);

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
            <SiteHeader
              profile={profile.data?.profile}
              title={settings.data?.title as unknown as string}
            />
            {props.children}
            <SiteFooter
              {...params}
              settings={settings.data}
              profile={profile.data}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
