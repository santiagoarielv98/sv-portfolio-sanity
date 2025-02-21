import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
import { Toaster } from "@/components/ui/sonner";

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
    title: data?.title,
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
  const params = await props.params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

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
            <SiteHeader {...params} />
            {props.children}
            <SiteFooter
              {...params}
              footer={settings.data?.footer as unknown as string}
              profile={profile.data?.profile}
              contact={profile.data?.contact}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
