import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Sardinia United - Attivita" : "Sardinia United - Activities",
    description:
      locale === "it"
        ? "Allenamenti, tornei, laboratori e supporto psicologico in un unico ecosistema."
        : "Training, tournaments, workshops, and psychological support in one ecosystem."
  };
}

export default async function ActivitiesPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isIt = locale === "it";

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="inline-block rounded-full bg-[#f2e0c3] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#231a08]">
            {isIt ? "Esplora il programma" : "Explore the program"}
          </span>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-[#030568] md:text-7xl">
            {isIt ? "Attivita e crescita." : "Activities and growth."}
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            {isIt
              ? "Dall'allenamento tecnico al benessere mentale: costruiamo talenti completi."
              : "From technical training to mental well-being: we build complete talents."}
          </p>
        </div>
        <div className="md:col-span-5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Y0dTS7a-Nal2xwuOV81KzxEMVz65DdGElsfNmyDIT6Fz4iTHNv_ANU0wQhJzaXNTtmU9Z-CsXFUvHygx-ebdr25CQR4xGEn6_MgqzBiSWf5HwZ2ElXdbrl91EAKZDHMbc2bSaVhrx0VjV5bqATGPYi1K8qrAVKa6FaMg9fZpIzgYsmvWdwsNzNovJ87BoQo_vgvR1d1HDBSc36AXk65-G2FDNavO1zbs5Dr4meQEXDAPW2DdrQ2DkvPAgSZB9JxDYsUDgVwzcQ4"
            alt="Football action"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-[#030568]">{isIt ? "Allenamenti settimanali" : "Weekly training"}</h2>
            <p className="text-sm text-slate-500">
              {isIt ? "Calendario sintetico delle sessioni principali" : "Quick schedule of core sessions"}
            </p>
          </div>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {[
            { day: "MON", session: isIt ? "Drills tecnici U-14" : "U-14 technical drills" },
            { day: "TUE", session: isIt ? "Strength & conditioning" : "Strength & conditioning" },
            { day: "WED", session: isIt ? "Goalkeeper clinic" : "Goalkeeper clinic" },
            { day: "SAT", session: isIt ? "Match day focus" : "Match day focus" }
          ].map((item, idx) => (
            <article
              key={item.day}
              className={`rounded-xl p-5 ${idx === 1 ? "bg-[#030568] text-white" : "bg-[#f4f6ff] text-[#030568]"}`}
            >
              <p className="text-2xl font-black">{item.day}</p>
              <p className={`mt-2 text-sm font-semibold ${idx === 1 ? "text-white/80" : "text-slate-600"}`}>{item.session}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: isIt ? "Workshop educativi" : "Educational workshops",
            desc: isIt
              ? "Nutrizione sportiva, public speaking e alfabetizzazione digitale."
              : "Sports nutrition, public speaking, and digital literacy."
          },
          {
            title: isIt ? "Supporto psicologico" : "Psychological support",
            desc: isIt
              ? "Sessioni individuali e di gruppo con specialisti."
              : "Individual and group sessions with specialists."
          }
        ].map((item, idx) => (
          <article key={item.title} className={`rounded-[2rem] p-8 ${idx === 0 ? "bg-[#f4f6ff]" : "bg-[#f2e0c3]"}`}>
            <h3 className="text-2xl font-black text-[#030568]">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
