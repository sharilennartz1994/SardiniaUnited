import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Sardinia United - Progetto" : "Sardinia United - About",
    description:
      locale === "it"
        ? "Missione, valori e team di Sardinia United."
        : "Mission, values, and team of Sardinia United."
  };
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isIt = locale === "it";

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            {isIt ? "Il nostro progetto" : "Our project"}
          </span>
          <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-tight text-[#030568] md:text-7xl">
            {isIt ? "Oltre il campo." : "Beyond the pitch."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            {isIt
              ? "Sardinia United usa il futsal come catalizzatore di integrazione, educazione e resilienza comunitaria."
              : "Sardinia United uses futsal as a catalyst for integration, education, and community resilience."}
          </p>
        </div>
        <div className="md:col-span-5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMnkGt3qgDBWFltMHXpBoeBUUGG_LeXAL5oyc3W0tErS8xrNA34GenkXE8XypTfEZkZyZWvaMXqlDZq6Qoch-1F2W9rF8KhBeoXYtmGeDGU9yYblp85Wq8j-3xx3_7jxcTL_gNa0-YLU_YniMbZWRJaDWjJr4QRxBk7rnwShBb67B3QmDKQ01rIjAyF7cuxb7zFN1kV0vL6l99dkyCvsW9TgL0ip3TdOdpr3kIs96wSYGq-0bYy9ncXlfV0qf32x-m103J463SvrQ"
            alt="Team training session"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black text-[#030568] md:text-4xl">
          {isIt ? "Missione e visione" : "Mission and vision"}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl bg-[#f4f6ff] p-6">
            <h3 className="text-xl font-bold text-[#030568]">
              {isIt ? "Inclusione e opportunita" : "Inclusion and opportunity"}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {isIt
                ? "Creiamo un ambiente in cui ogni giovane atleta trova una seconda casa."
                : "We build an environment where every young athlete finds a second home."}
            </p>
          </article>
          <article className="rounded-xl bg-[#f4f6ff] p-6">
            <h3 className="text-xl font-bold text-[#030568]">{isIt ? "Radici sarde" : "Sardinian roots"}</h3>
            <p className="mt-2 text-sm text-slate-600">
              {isIt
                ? "Uniamo identita locale e prospettiva internazionale."
                : "We blend local identity with an international perspective."}
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-[#030568] md:text-4xl">
          {isIt ? "Il team dietro la visione" : "The team behind the vision"}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Marco Serra", role: isIt ? "Head Coach" : "Head Coach" },
            { name: "Elena Carta", role: isIt ? "Psicologa sportiva" : "Sports Psychologist" },
            { name: "Luca Melis", role: isIt ? "Fundraiser" : "Fundraiser" },
            { name: "Amadou Diallo", role: isIt ? "Coach e mediatore" : "Coach and mediator" }
          ].map((person) => (
            <article key={person.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-full bg-[#030568]/10" />
              <h3 className="mt-4 text-lg font-bold text-[#030568]">{person.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{person.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
