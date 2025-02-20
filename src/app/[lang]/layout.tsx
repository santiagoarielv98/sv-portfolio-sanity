import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Space_Grotesk, Urbanist } from "next/font/google";
import { ThemeProvider } from "./provider";
import { profileQuery, settingQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: Locale;
  }>;
}) {
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

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{
      lang: Locale;
    }>;
  }>,
) {
  const params = await props.params;
  // const { data } = await sanityFetch({
  //   query: settingQuery,
  //   params,
  // });
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
    <div
      className={`${spaceGrotesk.variable} ${urbanist.variable} font-urbanist min-h-screen`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SiteHeader />
        {props.children}
        <SiteFooter
          footer={settings.data?.footer as unknown as string}
          lang={params.lang}
          profile={profile.data?.profile}
          contact={profile.data?.contact}
        />
      </ThemeProvider>
    </div>
  );
}
