import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Sardinia United - Contatti" : "Sardinia United - Contact",
    description:
      locale === "it"
        ? "Contattaci per iscrizioni, donazioni e collaborazioni."
        : "Get in touch for enrollment, donations, and partnerships."
  };
}

export default async function ContactPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isIt = locale === "it";

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-[#002444] px-8 py-16 text-white">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1mts9l5ODIjXx4fezMbuG5U9D6Tp4RTXsxPC0hy8_JmV9KLwW4WlI6NP70OHRvxS7rBI5AKFSY7m22l-vT-D2MIP51qjmkD1fDSyH3M0yCt0u5Av5rugKbNtV_keK1Z_7SxneW2uxEoPR7_xzax6q9SZ5gtfblpbfidxR2isBsYqqKssgcSF9cSkmzAVb1E2ZVyhKICVe3qZ1atotM8c7a2oerdCTZG3qJuYQAbpf0jsE0Cd0HNMrq1bGDLIc4SMqDIvWPaW84m0"
          alt="Sardinian coast"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block rounded-full bg-[#f2e0c3] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#231a08]">
            {isIt ? "Contattaci" : "Get in touch"}
          </span>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            {isIt ? "Contatti" : "Contact us"}
          </h1>
          <p className="mt-4 text-white/80">
            {isIt
              ? "Hai domande o vuoi unirti alla nostra famiglia sportiva? Siamo qui per ascoltarti."
              : "Have questions or want to join our sports family? We are here to listen."}
          </p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-12">
        <aside className="space-y-6 lg:col-span-4">
          <article className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl font-black text-[#002444]">{isIt ? "Informazioni" : "Information"}</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-700">
              <li>
                <span className="font-bold text-[#002444]">Email:</span> info@sardiniaunited.org
              </li>
              <li>
                <span className="font-bold text-[#002444]">{isIt ? "Telefono" : "Phone"}:</span> +39 070 123 4567
              </li>
              <li>
                <span className="font-bold text-[#002444]">{isIt ? "Indirizzo" : "Address"}:</span> Via Roma 123,
                09124 Cagliari
              </li>
            </ul>
          </article>
          <article className="overflow-hidden rounded-[2rem] bg-[#dfeaf5] p-7">
            <p className="text-sm font-semibold text-[#002444]">{isIt ? "Mappa" : "Map"}</p>
            <p className="mt-1 text-sm text-slate-600">Cagliari, Sardinia</p>
            <div className="mt-4 h-36 rounded-xl bg-white/70" />
          </article>
        </aside>

        <div className="lg:col-span-8">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 md:p-10">
            <h2 className="text-2xl font-black text-[#002444]">
              {isIt ? "Inviaci un messaggio" : "Send us a message"}
            </h2>
            <p className="mt-1 text-sm italic text-slate-500">{isIt ? "Rispondiamo entro 24-48h" : "We reply in 24-48h"}</p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
