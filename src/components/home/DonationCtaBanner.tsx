import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ShieldCheck, Heart, Landmark } from "lucide-react";

export function DonationCtaBanner() {
  const t = useTranslations("Home.DonationCta");

  const trustItems = [
    { icon: <ShieldCheck size={20} />, label: t("trust1") },
    { icon: <Heart size={20} />, label: t("trust2") },
    { icon: <Landmark size={20} />, label: t("trust3") },
  ];

  return (
    <section className="bg-brand-brown py-20 md:py-24 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 uppercase">
            {t("title")}
          </h2>
          <p className="text-white/80 text-lg mb-8">{t("body")}</p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/80"
              >
                <span className="text-white/60">{item.icon}</span>
                <span className="font-display text-[10px] sm:text-xs uppercase tracking-wide font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/donazioni"
            className="inline-flex items-center justify-center gap-3 bg-white text-brand-brown px-8 md:px-12 py-4 md:py-6 rounded-xl font-display text-xl md:text-2xl font-bold hover:scale-105 transition-all shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t("cta")} <ArrowRight size={22} />
          </Link>
          <Link
            href="/sponsor"
            className="text-white/70 underline text-sm hover:text-white transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            {t("sponsorLink")}
          </Link>
        </div>
      </div>
    </section>
  );
}
