import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import MotionEffects from "./components/MotionEffects";
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

export const metadata: Metadata = {
  title: "Offhand - Portal marki",
  description: "Prosty portal po polsku: oferta, konsultacje i materiały.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <MotionEffects />
        <div className="site-backdrop" aria-hidden="true" />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
