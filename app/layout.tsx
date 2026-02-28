import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import ParallaxBackground from "./components/ParallaxBackground";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Offhand Portal",
  description: "Creative portal for brand strategy and digital offers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${cormorant.variable} antialiased`}>
        <ParallaxBackground />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
