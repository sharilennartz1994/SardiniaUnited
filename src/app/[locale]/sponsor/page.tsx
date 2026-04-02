import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  Star,
  Trophy,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("sponsorTitle"),
    description: t("sponsorDescription"),
  };
}

export default async function SponsorPage() {
  const t = await getTranslations("Sponsor");

  const packageHref = { pathname: "/sponsor" as const, hash: "packages" };
  const contactHref = { pathname: "/sponsor" as const, hash: "contact" };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative bg-brand-navy pb-24 pt-16 text-white [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] md:pb-32 md:pt-24"
        aria-labelledby="sponsor-hero-title"
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h1
            id="sponsor-hero-title"
            className="font-display text-4xl font-bold uppercase leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl"
          >
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 font-body md:text-xl">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={packageHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {t("heroCtaPackages")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {t("heroCtaContact")}
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:py-24"
        aria-labelledby="packages-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="packages-heading"
            className="font-display text-3xl font-bold uppercase tracking-tighter text-brand-navy md:text-4xl"
          >
            {t("packagesTitle")}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-slate-600 md:text-lg">
            {t("packagesSubtitle")}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Bronze */}
            <article className="group relative flex flex-col rounded-2xl border-b-8 border-[#b87333] bg-brand-navy p-6 text-white shadow-lg transition hover:-translate-y-2 md:p-8">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-white/70">
                {t("bronzeLabel")}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                {t("bronzeName")}
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-brand-blue">
                {t("bronzePrice")}
                <span className="text-lg font-normal text-white/80">
                  {" "}
                  {t("bronzePeriod")}
                </span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 font-body text-white/90">
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("bronzeBenefit1")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("bronzeBenefit2")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("bronzeBenefit3")}
                </li>
              </ul>
              <Link
                href={contactHref}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-blue py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {t("bronzeCta")}
              </Link>
            </article>

            {/* Silver */}
            <article className="group relative flex flex-col rounded-2xl border-b-8 border-[#9e9e9e] bg-brand-navy p-6 text-white shadow-lg transition hover:-translate-y-2 md:p-8">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-white/70">
                {t("silverLabel")}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                {t("silverName")}
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-brand-blue">
                {t("silverPrice")}
                <span className="text-lg font-normal text-white/80">
                  {" "}
                  {t("silverPeriod")}
                </span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 font-body text-white/90">
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("silverBenefit1")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("silverBenefit2")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("silverBenefit3")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("silverBenefit4")}
                </li>
              </ul>
              <Link
                href={contactHref}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-blue py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {t("silverCta")}
              </Link>
            </article>

            {/* Gold */}
            <article className="group relative flex flex-col rounded-2xl border-b-8 border-[#d4af37] bg-brand-navy p-6 text-white shadow-lg ring-2 ring-brand-blue transition hover:-translate-y-2 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-white/70">
                  {t("goldLabel")}
                </span>
                <span className="rounded-full bg-brand-blue px-3 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-white">
                  {t("goldBadge")}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                {t("goldName")}
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-brand-blue">
                {t("goldPrice")}
                <span className="text-lg font-normal text-white/80">
                  {" "}
                  {t("goldPeriod")}
                </span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 font-body text-white/90">
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("goldBenefit1")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("goldBenefit2")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("goldBenefit3")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("goldBenefit4")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden
                  />
                  {t("goldBenefit5")}
                </li>
              </ul>
              <Link
                href={contactHref}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-blue py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {t("goldCta")}
              </Link>
            </article>

            {/* Main Sponsor */}
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border-b-8 border-brand-brown bg-gradient-to-br from-brand-navy via-[#0a1438] to-brand-brown p-6 text-white shadow-xl transition hover:-translate-y-2 md:p-8">
              <div className="absolute right-4 top-4 opacity-20">
                <Star className="h-16 w-16 text-brand-brown-light" aria-hidden />
              </div>
              <div className="relative flex flex-wrap items-center gap-2">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-white/80">
                  {t("mainLabel")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-brown-light/40 px-3 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-brand-brown-light">
                  <Star className="h-3 w-3" aria-hidden />
                  {t("mainBadge")}
                </span>
              </div>
              <h3 className="relative mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                {t("mainName")}
              </h3>
              <p className="relative mt-4 font-mono text-3xl font-bold text-white">
                {t("mainPrice")}
                <span className="text-lg font-normal text-white/80">
                  {" "}
                  {t("mainPeriod")}
                </span>
              </p>
              <ul className="relative mt-6 flex flex-1 flex-col gap-3 font-body text-white/95">
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-brown-light"
                    aria-hidden
                  />
                  {t("mainBenefit1")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-brown-light"
                    aria-hidden
                  />
                  {t("mainBenefit2")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-brown-light"
                    aria-hidden
                  />
                  {t("mainBenefit3")}
                </li>
                <li className="flex gap-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-brown-light"
                    aria-hidden
                  />
                  {t("mainBenefit4")}
                </li>
              </ul>
              <Link
                href={contactHref}
                className="relative mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-brown-light py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {t("mainCta")}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* In-kind */}
      <section
        className="bg-[#010818] px-4 py-16 text-white sm:px-6 md:py-24"
        aria-labelledby="inkind-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="inkind-heading"
            className="font-display text-3xl font-bold uppercase tracking-tighter md:text-4xl"
          >
            {t("inKindTitle")}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-white/80 md:text-lg">
            {t("inKindSubtitle")}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <article className="rounded-2xl border border-white/10 bg-brand-navy/60 p-6 transition hover:-translate-y-2 md:p-8">
              <Trophy
                className="h-10 w-10 text-brand-blue"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                {t("inKind1Title")}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/85 md:text-base">
                {t("inKind1Body")}
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-brand-navy/60 p-6 transition hover:-translate-y-2 md:p-8">
              <Stethoscope
                className="h-10 w-10 text-brand-blue"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                {t("inKind2Title")}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/85 md:text-base">
                {t("inKind2Body")}
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-brand-navy/60 p-6 transition hover:-translate-y-2 md:p-8">
              <MapPin
                className="h-10 w-10 text-brand-blue"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                {t("inKind3Title")}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/85 md:text-base">
                {t("inKind3Body")}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-gray-50 px-4 py-16 sm:px-6 md:py-24"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-bold uppercase tracking-tighter text-brand-navy md:text-4xl"
            >
              {t("formTitle")}
            </h2>
            <p className="mt-4 font-body text-slate-600 md:text-lg">
              {t("formSubtitle")}
            </p>
            <div className="mt-10 space-y-6 font-body">
              <div className="flex gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t("emailLabel")}
                  </p>
                  <a
                    href={`mailto:${t("emailAddress")}`}
                    className="text-brand-blue-dark underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    {t("emailAddress")}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t("phoneLabel")}
                  </p>
                  <a
                    href={`tel:${t("phoneNumber").replace(/\s/g, "")}`}
                    className="text-brand-blue-dark underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    {t("phoneNumber")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              action="#"
              method="post"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="sponsor-name"
                    className="block text-sm font-bold text-brand-navy"
                  >
                    {t("formName")}
                  </label>
                  <input
                    id="sponsor-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-slate-900 outline-none transition focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sponsor-email"
                    className="block text-sm font-bold text-brand-navy"
                  >
                    {t("formEmail")}
                  </label>
                  <input
                    id="sponsor-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-slate-900 outline-none transition focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sponsor-package"
                    className="block text-sm font-bold text-brand-navy"
                  >
                    {t("formPackage")}
                  </label>
                  <select
                    id="sponsor-package"
                    name="package"
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-slate-900 outline-none transition focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <option value="" disabled>
                      {t("formPackageDefault")}
                    </option>
                    <option value="bronze">{t("bronzeName")}</option>
                    <option value="silver">{t("silverName")}</option>
                    <option value="gold">{t("goldName")}</option>
                    <option value="main">{t("mainName")}</option>
                    <option value="inkind">{t("inKindTitle")}</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="sponsor-message"
                    className="block text-sm font-bold text-brand-navy"
                  >
                    {t("formMessage")}
                  </label>
                  <textarea
                    id="sponsor-message"
                    name="message"
                    rows={4}
                    placeholder={t("formMessagePlaceholder")}
                    className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-brand-blue py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {t("formSubmit")}
              </button>
              <p className="mt-4 text-center text-xs text-slate-500 font-body">
                {t("formBackendNote")}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
