import type { Locale } from "@/lib/i18n/config";
import { i18n } from "@/lib/i18n/config";
import type { Metadata } from "next";
import { Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";

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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`dark ${spaceGrotesk.variable} ${urbanist.variable} font-urbanist min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
