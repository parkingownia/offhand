import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { companyName } from "@/app/content/studio";
import ThemeProvider from "@/src/theme/ThemeProvider";
import { getThemeInitScript } from "@/src/theme/themes";
import "./globals.css";

const geoBodyFont = Inter({
  variable: "--font-geo-body",
  subsets: ["latin"],
  display: "swap",
});

const classicBodyFont = Plus_Jakarta_Sans({
  variable: "--font-classic-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const classicHeadFont = Playfair_Display({
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
        className={`${geoBodyFont.variable} ${classicBodyFont.variable} ${classicHeadFont.variable} ${geoHeadFont.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
