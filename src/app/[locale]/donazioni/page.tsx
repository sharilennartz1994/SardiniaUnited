import { getTranslations } from "next-intl/server";
import { ShieldCheck, Heart, Landmark } from "lucide-react";
import { DonationWidget } from "./DonationWidget";
import { DonationTransparencySection } from "./DonationTransparencySection";

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
      "bonifico",
      "sardinia united",
      "sport per tutti",
      "associazione sportiva",
    ],
  };
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
    <div className="bg-gray-50">
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

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-8 md:px-12">
        <DonationWidget />
      </div>

      <DonationTransparencySection locale={locale} />
    </div>
  );
}
