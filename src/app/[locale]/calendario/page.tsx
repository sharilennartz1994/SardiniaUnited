"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  CalendarHeart,
  MapPin,
  Users,
  Trophy,
  Sparkles,
  ArrowRight,
  Bell,
} from "lucide-react";

const UPCOMING_HIGHLIGHTS = [
  { icon: Trophy, key: "highlight1" },
  { icon: Users, key: "highlight2" },
  { icon: CalendarHeart, key: "highlight3" },
] as const;

export default function CalendarioPage() {
  const t = useTranslations("Calendario");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy px-6 pb-32 pt-32 text-center md:px-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-brown blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-5 py-2 backdrop-blur-sm">
            <Sparkles className="size-4 text-brand-blue" aria-hidden />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-blue">
              {t("comingSoonBadge")}
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-white/80 md:text-xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Announcement card */}
      <div className="relative z-10 mx-auto -mt-16 max-w-3xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl shadow-brand-navy/10 md:p-12">
          <div className="mb-8 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/10">
              <CalendarHeart className="size-10 text-brand-blue" />
            </div>
          </div>

          <h2 className="text-center font-display text-2xl font-bold uppercase tracking-tight text-brand-navy md:text-3xl">
            {t("announcementTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-center font-body text-base leading-relaxed text-gray-600 md:text-lg">
            {t("announcementBody")}
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-2 rounded-xl border border-brand-blue/20 bg-brand-navy/5 px-6 py-4">
            <MapPin className="size-5 shrink-0 text-brand-blue" aria-hidden />
            <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-navy">
              {t("location")}
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {UPCOMING_HIGHLIGHTS.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="flex flex-col items-center gap-3 rounded-xl bg-gray-50 p-5 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Icon className="size-6 text-brand-blue" aria-hidden />
                </div>
                <p className="font-body text-sm font-medium text-brand-navy">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <div className="mb-6 inline-flex items-center gap-2 text-brand-blue">
          <Bell className="size-5" aria-hidden />
          <span className="font-display text-sm font-bold uppercase tracking-widest">
            {t("stayUpdated")}
          </span>
        </div>

        <p className="mx-auto max-w-lg font-body text-base text-gray-600 md:text-lg">
          {t("ctaBody")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/donazioni"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-brown px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-white transition hover:bg-brand-brown-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue active:scale-[0.98]"
          >
            {t("ctaDonate")}
            <ArrowRight size={18} aria-hidden />
          </Link>
          <a
            href="https://www.instagram.com/sardiniaunited?igsh=cHpiM3ZvNGViNGl6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-navy/20 bg-white px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/40 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            {t("ctaFollow")}
          </a>
        </div>
      </div>
    </div>
  );
}
