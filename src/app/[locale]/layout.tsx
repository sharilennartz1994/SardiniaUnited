import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Barlow_Condensed, DM_Sans, Space_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "../globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "it" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "ASD Sardinia United",
              alternateName: "Sport per Tutti",
              url: "https://sardiniaunited.it",
              description:
                "Associazione sportiva dilettantistica che garantisce a bambini e ragazzi (5-12 anni) di famiglie economicamente svantaggiate la possibilità di praticare calcio a 5 gratuitamente, con il supporto di una psicologa dello sport.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Giuseppe Dessì 1",
                addressLocality: "Elmas",
                postalCode: "09067",
                addressRegion: "CA",
                addressCountry: "IT",
              },
              email: "info@asdsardiniaunited.com",
              taxID: "92288140921",
              sport: "Futsal",
              foundingDate: "2026",
              nonprofitStatus: "NonprofitASD",
            }),
          }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${dmSans.variable} ${spaceMono.variable} font-body antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-to-content">
            {tNav("skipToContent")}
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
