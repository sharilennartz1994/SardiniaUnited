import { useTranslations } from "next-intl";
import { Baby, Users, Handshake } from "lucide-react";
import Image from "next/image";

export function TargetsSection() {
  const t = useTranslations("Home.Targets");

  const targets = [
    { icon: <Baby size={28} />, title: t("target1Title"), body: t("target1Body") },
    { icon: <Users size={28} />, title: t("target2Title"), body: t("target2Body") },
    { icon: <Handshake size={28} />, title: t("target3Title"), body: t("target3Body") },
  ];

  const ages = [
    { name: t("age1Name"), range: t("age1Range") },
    { name: t("age2Name"), range: t("age2Range") },
    { name: t("age3Name"), range: t("age3Range") },
    { name: t("age4Name"), range: t("age4Range") },
  ];

  return (
    <section className="bg-brand-navy py-20 md:py-32 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="w-full lg:w-1/2">
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-brand-blue mb-6 block">
            {t("tag")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-12 text-white leading-tight">
            {t("title")}
          </h2>

          <div className="space-y-8 md:space-y-10">
            {targets.map((item) => (
              <div key={item.title} className="flex gap-4 md:gap-6 items-start">
                <span className="text-brand-blue shrink-0 mt-1">{item.icon}</span>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 font-display uppercase">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm md:text-base">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-brand-brown p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-2xl lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 uppercase">
              {t("ageTitle")}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {ages.map((age) => (
                <div
                  key={age.range}
                  className="flex justify-between items-center bg-white/10 p-4 rounded-lg backdrop-blur-md"
                >
                  <span className="font-bold text-white text-sm md:text-lg">
                    {age.name}
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full font-display font-bold text-[10px] md:text-xs">
                    {age.range}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 md:mt-12">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
                alt="Young athletes in a team huddle"
                width={800}
                height={400}
                className="w-full h-32 md:h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
