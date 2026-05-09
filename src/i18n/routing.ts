import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  pathnames: {
    "/": "/",
    "/donazioni": { it: "/donazioni", en: "/donate" },
    "/chi-siamo": { it: "/chi-siamo", en: "/about" },
    "/blog": { it: "/blog", en: "/blog" },
    "/blog/[slug]": { it: "/blog/[slug]", en: "/blog/[slug]" },
    "/calendario": { it: "/calendario", en: "/calendar" },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
