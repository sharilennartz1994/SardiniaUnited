import type { MetadataRoute } from "next";

const BASE_URL = "https://sardiniaunited.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["it", "en"];
  const routes = [
    "",
    "/donazioni",
    "/sponsor",
    "/chi-siamo",
    "/blog",
    "/calendario",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
