import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("Home.Hero");

  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden diagonal-cut">
      <div className="absolute inset-0 bg-brand-navy/70 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1400"
        alt="Bambini che giocano a calcio a 5 in un campo sportivo"
        fill
        className="object-cover"
        priority
      />

      {/* Main content - pushed down by navbar, centered vertically in remaining space */}
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-24 md:pt-28 px-6 md:px-24 w-full max-w-[1400px] mx-auto">
        <div className="mb-6">
          <span className="bg-brand-blue text-white px-4 py-1.5 rounded-full font-display text-[10px] sm:text-xs uppercase tracking-widest font-bold">
            {t("pill")}
          </span>
        </div>

        <h1 className="font-display text-[56px] md:text-[96px] font-bold text-white uppercase leading-[0.9] tracking-tighter mb-8 max-w-4xl italic">
          {t("titleLine1")}{" "}
          <br />
          <span className="text-brand-blue">{t("titleLine2")}</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-xl font-body mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/donazioni"
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded font-bold hover:bg-brand-blue-dark transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            {t("ctaPrimary")} <ArrowRight size={18} />
          </Link>
          <a
            href="#mission"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>

      {/* Stat bar - pinned to bottom, above the diagonal clip */}
      <div className="relative z-20 px-6 md:px-24 pb-20 md:pb-24 w-full max-w-[1400px] mx-auto">
        <div className="bg-brand-navy/85 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/10 max-w-4xl grid grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-4xl font-bold text-brand-blue">
              {t("stat1Value")}
            </span>
            <span className="font-display text-[8px] md:text-xs uppercase tracking-widest text-white/60">
              {t("stat1Label")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-2xl md:text-4xl font-bold text-brand-blue">
              {t("stat2Value")}
            </span>
            <span className="font-display text-[8px] md:text-xs uppercase tracking-widest text-white/60">
              {t("stat2Label")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xl md:text-3xl font-bold text-brand-blue leading-none">
              {t("stat3Value")}
            </span>
            <span className="font-display text-[8px] md:text-xs uppercase tracking-widest text-white/60">
              {t("stat3Label")}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
