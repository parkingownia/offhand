import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { companyName } from "@/app/content/studio";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    <html lang="pl">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>{children}</body>
    </html>
  );
}
