import Link from "next/link";
import { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeader } from "@/components/SectionHeader";
import { getContent, isLocale } from "@/i18n/content";
import { notFound } from "next/navigation";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Home" : "Home",
    description:
      locale === "it"
        ? "Sardinia United offre attivita gratuite di futsal per bambini in Sardegna."
        : "Sardinia United offers free futsal activities for children in Sardinia."
  };
}

export default async function LocalizedHomePage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <div className="space-y-16">
      <Hero locale={locale} />

      <section>
        <SectionHeader
          eyebrow={t.home.impactEyebrow}
          title={t.home.impactTitle}
          description={t.home.impactDescription}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.impactNumbers.map((item) => (
            <Card key={item.label} title={item.value} description={item.label} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
        <div className="absolute -right-16 -top-12 h-48 w-48 rounded-full bg-sky-200/60 blur-3xl" />
        <SectionHeader
          eyebrow={t.home.missionEyebrow}
          title={t.home.missionTitle}
          description={t.home.missionDescription}
        />
        <div className="relative z-10 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/support-us`}
            className="rounded-full bg-gradient-to-r from-sky-700 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-sky-800 hover:to-sky-700"
          >
            {t.home.supportProject}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="rounded-full border border-sky-300 bg-sky-50/80 px-5 py-2.5 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5 hover:bg-sky-100"
          >
            {t.home.learnMore}
          </Link>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow={t.home.psychologyEyebrow}
          title={t.home.psychologyTitle}
          description={t.home.psychologyDescription}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.psychologyPoints.map((point) => (
            <Card key={point} title="Sport Psychology" description={point} />
          ))}
        </div>
      </section>

      <section id="support" className="scroll-mt-28">
        <SectionHeader
          eyebrow={t.home.supportEyebrow}
          title={t.support.title}
          description={t.support.description}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {t.sponsorshipTiers.map((tier) => (
            <Card key={tier.name} title={`${tier.name} - ${tier.amount}`} description={tier.perks} />
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-sky-900 p-8 text-white shadow-lg">
          
          <h3 className="mt-4 text-2xl font-bold">{t.support.donationTitle}</h3>
          <p className="mt-3 max-w-2xl text-sky-100">{t.support.donationDescription}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-6 inline-block rounded-full bg-[#e9c46a] px-6 py-3 text-sm font-bold text-sky-950 transition hover:-translate-y-0.5 hover:bg-[#f2d58e]"
          >
            {t.support.donationCta}
          </Link>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow={t.home.testimonialsEyebrow}
          title={t.home.testimonialsTitle}
          description={t.home.testimonialsDescription}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.testimonials.map((item) => (
            <Card key={item.name} title={item.name} description={item.quote} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <SectionHeader
          eyebrow={t.newsletter.eyebrow}
          title={t.newsletter.title}
          description={t.newsletter.description}
        />
        <NewsletterForm locale={locale} />
      </section>
    </div>
  );
}
