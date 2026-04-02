import Link from "next/link";
import { Metadata } from "next";
import { isLocale } from "@/i18n/content";
import { notFound } from "next/navigation";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Sardinia United - Home" : "Sardinia United - Home",
    description:
      locale === "it"
        ? "Il futuro scende in campo: sport, inclusione e crescita per i giovani in Sardegna."
        : "The future takes the field: sport, inclusion, and growth for young people in Sardinia."
  };
}

export default async function LocalizedHomePage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isIt = locale === "it";

  const copy = {
    missionTitle: isIt ? "Oltre il gioco, per la comunita." : "Beyond the game, for the community.",
    missionText: isIt
      ? "Crediamo che il campo da calcio sia la prima aula di vita. Sardinia United nasce per abbattere barriere economiche e sociali."
      : "We believe the football pitch is a first classroom. Sardinia United breaks down social and economic barriers.",
    testimonialsTitle: isIt ? "Voci dal Campo" : "Voices from the Field",
    newsletterTitle: isIt ? "Diventa parte della squadra" : "Become part of the team",
    newsletterText: isIt
      ? "Ricevi aggiornamenti sulle nostre attivita e scopri come supportare il talento locale."
      : "Get updates on our activities and discover how to support local talent."
  };

  return (
    <div className="space-y-0">
      <section className="relative -mx-4 mt-[-2rem] overflow-hidden md:-mx-6">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGifryGxJEYrQd7EGJz8xMsXbTF1ETnRlNCzeH3wDrYYsj1mAIdQuN2chPqSoamv9M1dgyVTRzzkzwsqEnZJ6GsaQs9o1AuuKZapa1Xkfg3HplivkNkirBvHBeZifKoSsulNQQ_k_9L-Kh376nk6bO2wHeFvSCMe0xsky8Ite0ttZ6LiLBy-DrHCGFHnBiJOCt7mF8FI6ATJRG4jadDY03YjFkcuQWj_3-z10tkpNkqy8qSG_7qzQHcWxdvRztNn1OroDGaUYaAIY"
            alt="Children playing football in Sardinia"
            className="h-full min-h-[860px] w-full object-cover brightness-[0.85] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030568]/85 via-[#030568]/35 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-white md:px-8 md:py-40">
          <span className="inline-block rounded-full bg-[#f2e0c3] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#231a08]">
            Sardinia United Foundation
          </span>
          <h1 className="mt-6 max-w-3xl text-6xl font-black leading-[0.88] tracking-tight md:text-8xl">
            {isIt ? (
              <>
                Il futuro <br /> scende <br /> <span className="text-[#f2e0c3]">in campo</span>
              </>
            ) : (
              <>
                The future <br /> takes <br /> <span className="text-[#f2e0c3]">the field</span>
              </>
            )}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/90 md:text-2xl">
            {isIt
              ? "Sosteniamo il talento, promuoviamo l'inclusione. Lo sport come motore di crescita per ogni bambino in Sardegna."
              : "We support talent and inclusion. Sport as an engine of growth for every child in Sardinia."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/support-us`}
              className="rounded-xl bg-[#000000] px-8 py-4 text-lg font-extrabold text-white transition hover:scale-105"
            >
              {isIt ? "Dona" : "Donate"}
            </Link>
            <Link
              href={`/${locale}/enrollment`}
              className="rounded-xl bg-[#f2e0c3] px-8 py-4 text-lg font-extrabold text-[#231a08] transition hover:scale-105"
            >
              {isIt ? "Unisciti al Programma" : "Join the Program"}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f6] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4 md:px-8">
          {[
            { value: "80+", label: isIt ? "Bambini Coinvolti" : "Children Involved" },
            { value: "100%", label: isIt ? "Accesso Gratuito" : "Free Access" },
            { value: "24/7", label: isIt ? "Supporto Psicologico" : "Psychological Support" },
            { value: "12", label: isIt ? "Comuni Sardi" : "Sardinian Municipalities" }
          ].map((item) => (
            <article key={item.label} className="rounded-xl bg-white p-10 shadow-sm">
              <p className="text-5xl font-black tracking-tight text-[#141d21]">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#464651]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 md:px-8">
          <div className="col-span-12 space-y-6 md:col-span-5">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#908269]">
              {isIt ? "Nostra Missione" : "Our Mission"}
            </span>
            <h2 className="text-5xl font-black leading-tight text-[#1a1c1e] md:text-6xl">{copy.missionTitle}</h2>
            <p className="text-lg text-[#464651]">{copy.missionText}</p>
            <Link href={`/${locale}/about`} className="inline-flex items-center gap-3 text-lg font-bold">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#030568] text-white">→</span>
              {isIt ? "Scopri la nostra storia" : "Discover our story"}
            </Link>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-5 md:col-span-7">
            <article className="aspect-square rounded-xl bg-[#f2e0c3] p-6">
              <h3 className="text-xl font-bold text-[#231a08]">{isIt ? "Inclusione Sociale" : "Social Inclusion"}</h3>
              <p className="mt-2 text-sm text-[#504530]">
                {isIt
                  ? "Integriamo ragazzi di ogni background attraverso il gioco di squadra."
                  : "We integrate young people from every background through team sports."}
              </p>
            </article>
            <article className="mt-8 rounded-xl bg-[#030568] p-6 text-white">
              <h3 className="text-xl font-bold">{isIt ? "Benessere Mentale" : "Mental Well-being"}</h3>
              <p className="mt-2 text-sm text-white/70">
                {isIt
                  ? "Supporto psicologico costante per le sfide della crescita."
                  : "Continuous psychological support for growth challenges."}
              </p>
            </article>
            <article className="col-span-2 rounded-xl bg-[#e8e8ea] p-6">
              <h3 className="text-xl font-bold text-[#1a1c1e]">{isIt ? "Accesso Uguale" : "Equal Access"}</h3>
              <p className="mt-2 text-sm text-[#464651]">
                {isIt
                  ? "Iscrizione e attrezzatura coperte per chi ne ha bisogno."
                  : "Enrollment and equipment covered for families in need."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#030568] py-28">
        <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center text-5xl font-black text-white">{copy.testimonialsTitle}</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            isIt
              ? '"Mio figlio ha trovato una seconda famiglia. La fiducia che ha acquisito è incredibile."'
              : '"My son found a second family. The confidence he gained is incredible."',
            isIt
              ? '"Qui importa come aiuti i compagni."'
              : '"Here what matters is how you help your teammates."',
            isIt
              ? "\"L'integrazione si vede in ogni passaggio.\""
              : '"Integration is visible in every pass."'
          ].map((quote, idx) => (
            <article key={quote} className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
              <p className="text-lg italic text-white/90">{quote}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-white/70">
                {idx === 0 ? "Elena R." : idx === 1 ? "Luca" : "Marco S."}
              </p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#f2e0c3] p-10 md:flex md:items-center md:justify-between md:gap-8 md:p-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tight text-[#231a08] md:text-5xl">{copy.newsletterTitle}.</h2>
              <p className="mt-4 text-lg text-[#504530]">{copy.newsletterText}</p>
            </div>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row md:mt-0 md:w-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border-none bg-white px-6 py-4 text-sm outline-none ring-2 ring-transparent focus:ring-[#030568]/25 sm:w-80"
              />
              <button className="whitespace-nowrap rounded-xl bg-[#030568] px-8 py-4 text-sm font-bold text-white transition hover:scale-105">
                {isIt ? "Iscriviti" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
