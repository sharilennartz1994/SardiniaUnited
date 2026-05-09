import { getTranslations } from "next-intl/server";

function DefaultCard({
  amount,
  title,
  description,
}: {
  amount: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm shadow-brand-navy/5 transition hover:border-gray-300 hover:shadow-md md:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-navy md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 font-body text-base leading-relaxed text-slate-600 md:text-lg">
            {description}
          </p>
        </div>
        <p className="shrink-0 font-mono text-2xl font-bold tabular-nums tracking-tight text-brand-navy sm:text-right md:text-3xl">
          {amount}
        </p>
      </div>
    </article>
  );
}

export async function DonationTransparencySection({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations({
    locale,
    namespace: "Donazioni",
  });

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="transparency-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(24,116,187,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24 lg:py-28">
        <header className="max-w-3xl">
          <h2
            id="transparency-heading"
            className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-brand-navy sm:text-4xl md:text-5xl"
          >
            {t("transparencyTitle")}
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-slate-600 md:text-xl">
            {t("transparencyIntro")}
          </p>
        </header>

        <div className="mt-14 flex flex-col gap-5 md:gap-6">
          <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
            <DefaultCard
              amount={t("transparencyAmount120")}
              title={t("transparencyBlockKitTitle")}
              description={t("transparencyBlockKitDesc")}
            />
            <DefaultCard
              amount={t("transparencyAmount50")}
              title={t("transparencyBlockMonthTitle")}
              description={t("transparencyBlockMonthDesc")}
            />
          </div>

          <article
            className="relative overflow-hidden rounded-3xl border border-brand-blue/25 bg-gradient-to-br from-sky-50/90 via-white to-amber-50/40 p-8 shadow-lg shadow-brand-navy/8 md:p-10"
            aria-label={t("transparencyCombinedRowAria")}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand-blue/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-12 size-48 rounded-full bg-amber-200/30 blur-3xl"
              aria-hidden
            />

            <p className="relative mb-8 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              {t("transparencyCombinedRowBadge")}
            </p>

            <div className="relative grid gap-10 md:grid-cols-2 md:gap-12 md:divide-x md:divide-gray-200">
              <div className="md:pr-8 lg:pr-12">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                  {t("transparencyPsychBadge")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-brand-navy md:text-2xl">
                  {t("transparencyBlockPsychTitle")}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-slate-600 md:text-lg">
                  {t("transparencyBlockPsychDesc")}
                </p>
                <p className="mt-6 font-mono text-3xl font-bold tabular-nums text-brand-blue md:text-4xl">
                  {t("transparencyAmount500")}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-10 md:border-t-0 md:pt-0 md:pl-8 lg:pl-12">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-amber-800/90">
                  {t("transparencyCareBadge")}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-brand-navy md:text-2xl">
                  {t("transparencyBlockCareTitle")}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-slate-600 md:text-lg">
                  {t("transparencyBlockCareDesc")}
                </p>
                <p className="mt-6 font-mono text-3xl font-bold tabular-nums text-amber-900 md:text-4xl">
                  {t("transparencyAmountCareMonthly")}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm shadow-brand-navy/5 transition hover:border-gray-300 hover:shadow-md md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-navy md:text-2xl">
                  {t("transparencyBlockYearTitle")}
                </h3>
                <p className="mt-3 max-w-3xl font-body text-base leading-relaxed text-slate-600 md:text-lg">
                  {t("transparencyBlockYearDesc")}
                </p>
              </div>
              <p className="shrink-0 font-mono text-2xl font-bold tabular-nums tracking-tight text-brand-navy sm:text-right md:text-3xl">
                {t("transparencyAmount600")}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
