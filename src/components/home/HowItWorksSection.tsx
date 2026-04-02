import { useTranslations } from "next-intl";
import { Trophy, Brain, Users } from "lucide-react";

export function HowItWorksSection() {
  const t = useTranslations("Home.HowItWorks");

  const cards = [
    {
      icon: <Trophy size={32} />,
      title: t("card1Title"),
      body: t("card1Body"),
      borderColor: "border-brand-blue",
      iconBg: "bg-brand-blue/10 text-brand-blue",
    },
    {
      icon: <Brain size={32} />,
      title: t("card2Title"),
      body: t("card2Body"),
      borderColor: "border-brand-brown",
      iconBg: "bg-brand-brown/10 text-brand-brown",
    },
    {
      icon: <Users size={32} />,
      title: t("card3Title"),
      body: t("card3Body"),
      borderColor: "border-green-600",
      iconBg: "bg-green-100 text-green-700",
    },
  ];

  const timeline = [
    { year: "2026", label: t("timeline2026"), active: true },
    { year: "2027", label: t("timeline2027"), active: true },
    { year: "2028", label: t("timeline2028"), active: true },
    { year: "2029", label: t("timeline2029"), active: false },
    { year: "2030", label: t("timeline2030"), active: false },
  ];

  return (
    <section className="bg-slate-100 py-20 md:py-32 px-6 md:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-brand-navy">
            {t("title")}
          </h2>
          <div className="h-1 w-24 bg-brand-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-white p-8 md:p-10 shadow-xl border-b-4 ${card.borderColor} flex flex-col items-start hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`${card.iconBg} p-3 md:p-4 rounded mb-6`}>
                {card.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight text-brand-navy">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative pt-8 md:pt-12 overflow-x-auto">
          <div className="h-1 bg-slate-300 w-full absolute top-8 md:top-12 left-0" />
          <div className="h-1 bg-brand-blue w-3/5 absolute top-8 md:top-12 left-0" />
          <div className="grid grid-cols-5 relative z-10 min-w-[500px]">
            {timeline.map((step) => (
              <div
                key={step.year}
                className={`flex flex-col items-center ${
                  !step.active ? "opacity-40" : ""
                }`}
              >
                <div
                  className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${
                    step.active ? "bg-brand-blue" : "bg-slate-300"
                  } border-4 border-white mb-3 md:mb-4`}
                />
                <span className="font-display text-xs md:text-sm font-bold">
                  {step.year}
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 uppercase mt-1">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
