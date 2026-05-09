import { useTranslations } from "next-intl";
import { Trophy, Brain, Users, Apple } from "lucide-react";

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
    {
      icon: <Apple size={32} />,
      title: t("card4Title"),
      body: t("card4Body"),
      borderColor: "border-amber-500",
      iconBg: "bg-amber-100 text-amber-800",
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}
