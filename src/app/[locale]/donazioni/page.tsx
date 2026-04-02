import { getTranslations } from "next-intl/server";
import { ShieldCheck, Heart, Landmark } from "lucide-react";
import { clsx } from "clsx";
import { DonationWidget } from "./DonationWidget";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("donazioniTitle"),
    description: t("donazioniDescription"),
    keywords: [
      "donazioni",
      "sardinia united",
      "yapla",
      "sport per tutti",
      "associazione sportiva",
    ],
  };
}

function ProgressRow({
  label,
  pct,
  barClass,
}: {
  label: string;
  pct: number;
  barClass: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="font-body text-sm font-medium text-brand-navy">
          {label}
        </span>
        <span className="font-mono text-sm font-bold tabular-nums text-brand-navy">
          {pct}%
        </span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={clsx("h-full rounded-full transition-[width] duration-500", barClass)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default async function DonazioniPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Donazioni" });

  const trustItems = [
    { icon: ShieldCheck, label: t("trustPill1") },
    { icon: Heart, label: t("trustPill2") },
    { icon: Landmark, label: t("trustPill3") },
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <section
        className="flex min-h-[60vh] flex-col justify-center bg-brand-navy px-6 pt-28 pb-32 text-center md:px-12"
        aria-labelledby="donazioni-hero-title"
      >
        <div className="mx-auto max-w-3xl">
          <h1
            id="donazioni-hero-title"
            className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {t("title")}
          </h1>
          <p className="mt-6 font-body text-lg text-white/85 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-sm"
              >
                <Icon className="size-5 shrink-0 text-brand-blue" aria-hidden />
                <span className="font-display text-[10px] font-bold uppercase tracking-widest sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <DonationWidget />

        <section
          className="mt-16 md:mt-24"
          aria-labelledby="where-money-heading"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="where-money-heading"
                className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy md:text-3xl"
              >
                {t("whereMoneyGoes")}
              </h2>
              <div className="mt-8 flex flex-col gap-8">
                <ProgressRow
                  label={t("tournamentsTransport")}
                  pct={45}
                  barClass="bg-brand-blue"
                />
                <ProgressRow
                  label={t("staff")}
                  pct={30}
                  barClass="bg-brand-navy"
                />
                <ProgressRow
                  label={t("equipmentGear")}
                  pct={15}
                  barClass="bg-brand-brown"
                />
                <ProgressRow
                  label={t("admin")}
                  pct={10}
                  barClass="bg-gray-400"
                />
              </div>
            </div>

            <aside className="flex">
              <blockquote className="flex flex-1 flex-col justify-center rounded-2xl border border-gray-200 bg-white p-8 pl-10 shadow-lg shadow-brand-navy/5 border-l-4 border-l-brand-blue">
                <p className="font-body text-lg leading-relaxed text-brand-navy md:text-xl">
                  {t("testimonialQuote")}
                </p>
                <footer className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-brand-brown">
                  {t("testimonialAuthor")}
                </footer>
              </blockquote>
            </aside>
          </div>
        </section>

        <section
          className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md md:p-10"
          aria-labelledby="bank-note-heading"
        >
          <h2
            id="bank-note-heading"
            className="font-display text-lg font-bold uppercase tracking-wide text-brand-navy"
          >
            {t("preferBank")}
          </h2>
          <p className="mt-4 font-body text-gray-600">
            <a
              href="mailto:asdsardiniaunited@gmail.com"
              className="text-brand-blue underline-offset-2 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {t("contactUs")}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
