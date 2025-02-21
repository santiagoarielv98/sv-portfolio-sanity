import type { Locale } from "@/lib/i18n/config";
import { i18n } from "@/lib/i18n/config";
import { Space_Grotesk, Urbanist } from "next/font/google";

import "../globals.css";
import { sanityFetch } from "@/sanity/lib/live";
import { profileQuery, settingQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
}> &
  Props) {
  const { lang } = await params;

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
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${urbanist.variable} font-urbanist min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader lang={lang} />
          {children}
          <SiteFooter
            footer={settings.data?.footer as unknown as string}
            lang={lang}
            profile={profile.data?.profile}
            contact={profile.data?.contact}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
