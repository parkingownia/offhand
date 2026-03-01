import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.offhand.pl/offhand";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/filozofia", "/mozliwosci", "/projekty", "/inspiracje", "/kontakt"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
