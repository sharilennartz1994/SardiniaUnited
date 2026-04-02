import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsSection() {
  const t = useTranslations("Home.Stats");

  const stats = [
    { target: 80, label: t("label1") },
    { target: 60, label: t("label2") },
    { target: 4, label: t("label3") },
    { target: 5, label: t("label4") },
  ];

  return (
    <section className="bg-brand-navy py-20 md:py-24 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center group">
            <AnimatedCounter
              target={stat.target}
              className="font-mono text-6xl md:text-8xl font-bold text-brand-blue block mb-2 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="font-display text-[10px] sm:text-sm uppercase tracking-widest text-white/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
