import { useTranslations } from "next-intl";

export function MissionSection() {
  const t = useTranslations("Home.Mission");

  return (
    <section
      id="mission"
      className="bg-white py-24 md:py-32 px-6 diagonal-cut-reverse -mt-12 relative z-30"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-6 block">
          {t("tag")}
        </span>

        <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-brand-navy">
          &ldquo;Lo sport come diritto educativo e di{" "}
          <span className="text-brand-blue">{t("highlightWord")}</span> —
          senza barriere economiche.&rdquo;
        </blockquote>

        <p className="mt-8 text-lg md:text-xl text-slate-600 font-body max-w-2xl mx-auto">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
