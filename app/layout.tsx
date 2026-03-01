import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import { companyName } from "@/app/content/studio";
import ThemeProvider from "@/src/theme/ThemeProvider";
import { getThemeInitScript } from "@/src/theme/themes";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const classicHeadFont = Cormorant_Garamond({
  variable: "--font-classic-head",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geoHeadFont = Space_Grotesk({
  variable: "--font-geo-head",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteTitle = `Light Through Glass - Digital Craft by ${companyName}`;
const siteDescription =
  "High-end studio projektujące precyzyjne doświadczenia webowe inspirowane światłem, szkłem i architektoniczną klarownością.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.offhand.pl/offhand"),
  title: {
    default: siteTitle,
    template: `%s | ${companyName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "pl_PL",
    siteName: companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="classic" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />
      </head>
      <body
        className={`${bodyFont.variable} ${classicHeadFont.variable} ${geoHeadFont.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
