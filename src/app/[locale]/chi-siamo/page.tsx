import Image from "next/image";
import { getTranslations } from "next-intl/server";

const TEAM_MEMBERS = [
  { nameKey: "team1Name", roleKey: "team1Role", bioKey: "team1Bio" },
  { nameKey: "team2Name", roleKey: "team2Role", bioKey: "team2Bio" },
  { nameKey: "team3Name", roleKey: "team3Role", bioKey: "team3Bio" },
  { nameKey: "team4Name", roleKey: "team4Role", bioKey: "team4Bio" },
  { nameKey: "team5Name", roleKey: "team5Role", bioKey: "team5Bio" },
  { nameKey: "team6Name", roleKey: "team6Role", bioKey: "team6Bio" },
  { nameKey: "team7Name", roleKey: "team7Role", bioKey: "team7Bio" },
  { nameKey: "team8Name", roleKey: "team8Role", bioKey: "team8Bio" },
  { nameKey: "team9Name", roleKey: "team9Role", bioKey: "team9Bio" },
  { nameKey: "team10Name", roleKey: "team10Role", bioKey: "team10Bio" },
  { nameKey: "team11Name", roleKey: "team11Role", bioKey: "team11Bio" },
  { nameKey: "team12Name", roleKey: "team12Role", bioKey: "team12Bio" },
  { nameKey: "team13Name", roleKey: "team13Role", bioKey: "team13Bio" },
] as const;

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("chiSiamoTitle"),
    description: t("chiSiamoDescription"),
  };
}

export default async function ChiSiamoPage() {
  const t = await getTranslations("ChiSiamo");

  const teamMembers = TEAM_MEMBERS.map((member) => {
    const name = t(member.nameKey);
    return {
      ...member,
      name,
      initials: getInitials(name),
      role: t(member.roleKey),
      bio: t(member.bioKey),
    };
  });

  const departments = [
    { key: "govTech", label: t("govTech") },
    { key: "govSocial", label: t("govSocial") },
    { key: "govAdmin", label: t("govAdmin") },
    { key: "govDev", label: t("govDev") },
  ] as const;

  return (
    <div className="font-body text-brand-navy">
      {/* Hero */}
      <section
        className="relative diagonal-cut overflow-hidden bg-brand-navy pb-24 pt-28 md:pb-32 md:pt-36"
        aria-labelledby="chi-siamo-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1400"
            alt={t("heroImageAlt")}
            fill
            className="object-cover opacity-40 grayscale"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-brand-navy/70"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1
            id="chi-siamo-hero-heading"
            className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Story */}
      <section
        className="bg-white py-16 md:py-24"
        aria-labelledby="chi-siamo-story-quote"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <blockquote
                id="chi-siamo-story-quote"
                className="border-l-4 border-brand-blue pl-6 font-display text-2xl font-semibold uppercase leading-snug tracking-wide text-brand-navy md:text-3xl"
              >
                {t("storyQuote")}
              </blockquote>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="text-base leading-relaxed text-brand-navy/90 md:text-lg">
                {t("storyP1")}
              </p>
              <p className="text-base leading-relaxed text-brand-navy/90 md:text-lg">
                {t("storyP2")}
              </p>
              <p className="text-base leading-relaxed text-brand-navy/90 md:text-lg">
                {t("storyP3")}
              </p>
              <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
                  alt={t("storyImageAlt")}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="bg-[#0e193f] py-16 md:py-24"
        aria-labelledby="chi-siamo-team-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center font-body text-sm uppercase tracking-widest text-brand-blue">
            {t("teamTag")}
          </p>
          <h2
            id="chi-siamo-team-heading"
            className="mt-3 text-center font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl"
          >
            {t("teamTitle")}
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <li key={member.nameKey}>
                <article className="flex h-full flex-col items-center rounded-xl bg-brand-navy/80 px-6 py-8 text-center shadow-lg ring-1 ring-white/5">
                  <div
                    className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 ring-4 ring-brand-blue/30"
                    aria-hidden
                  >
                    <span className="font-display text-3xl font-bold text-brand-blue">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold uppercase text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {member.bio}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Governance */}
      <section
        className="bg-white py-16 md:py-24"
        aria-labelledby="chi-siamo-gov-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2
            id="chi-siamo-gov-heading"
            className="text-center font-display text-3xl font-bold uppercase tracking-tight text-brand-navy md:text-4xl"
          >
            {t("govTitle")}
          </h2>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white px-6 py-4 text-center shadow-lg shadow-brand-navy/10">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-navy">
                {t("govPresident")}
              </p>
            </div>
            <div
              className="h-10 w-px bg-brand-blue"
              aria-hidden
            />
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              {departments.map((dept) => (
                <div
                  key={dept.key}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-4 text-center shadow-sm shadow-brand-navy/5"
                >
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-navy">
                    {dept.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <figure className="mx-auto mt-14 max-w-2xl rounded-xl border border-gray-200 bg-slate-50 px-6 py-6 text-center shadow-sm shadow-brand-navy/5">
            <blockquote className="font-display text-lg italic leading-relaxed text-brand-navy/80 md:text-xl">
              {t("govQuote")}
            </blockquote>
          </figure>
        </div>
      </section>
    </div>
  );
}
