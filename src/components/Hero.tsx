import Image from "next/image";
import Link from "next/link";
import { Locale, getContent } from "@/i18n/content";

type HeroProps = { locale: Locale };

export function Hero({ locale }: HeroProps) {
  const t = getContent(locale);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 px-6 py-14 text-white shadow-xl md:px-12 md:py-20">
      <div className="absolute right-0 top-0 h-full w-full opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80"
          alt="Children playing futsal"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="animate-pulse-soft absolute -left-10 top-8 h-32 w-32 rounded-full bg-sky-300/40 blur-2xl" />
      <div className="animate-float-soft absolute bottom-10 right-10 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="relative z-10 max-w-2xl">
        <p className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          {t.hero.badge}
        </p>
        <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-5 text-sm text-sky-100 md:text-base">
          {t.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/support-us`}
            className="rounded-full bg-[#e9c46a] px-6 py-3 text-sm font-bold text-sky-950 shadow-lg shadow-[#e9c46a]/30 transition hover:-translate-y-0.5 hover:bg-[#f2d58e]"
          >
            {t.ctaDonate}
          </Link>
          <Link
            href={`/${locale}/enrollment`}
            className="rounded-full border border-white/70 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            {t.hero.join}
          </Link>
        </div>
      </div>
    </section>
  );
}
