import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { isLocale, Locale } from "@/i18n/content";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        {typedLocale === "it" ? "Vai al contenuto principale" : "Skip to main content"}
      </a>
      <Navbar locale={typedLocale} />
      <main id="main-content" className="mx-auto max-w-7xl px-4 pb-8 pt-24 md:px-6 md:pt-28">
        {children}
      </main>
      <Footer locale={typedLocale} />
    </>
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const canonical = `/${locale}`;
  return {
    alternates: {
      canonical,
      languages: {
        it: "/it",
        en: "/en"
      }
    }
  };
}
