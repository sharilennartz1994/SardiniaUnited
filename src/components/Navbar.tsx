"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { Locale, getContent } from "@/i18n/content";

type NavbarProps = { locale: Locale };

export function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const t = getContent(locale);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <BrandLogo variant="negative" href={`/${locale}`} />
        <ul className="hidden items-center gap-7 md:flex">
          {t.nav.map((link) => {
            const localizedHref = `/${locale}${link.href}`;
            const isActive = pathname === localizedHref;
            return (
              <li key={localizedHref}>
                <Link
                  href={localizedHref}
                  className={`border-b-2 px-1 pb-1 text-sm font-semibold transition ${
                    isActive
                      ? "border-[#000066] text-[#000066]"
                      : "border-transparent text-slate-600 hover:border-[#000066]/40 hover:text-[#000066]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#000066] md:hidden"
          >
            {menuOpen ? "X" : "≡"}
          </button>
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href={`/it`}
              className={`text-xs font-bold ${locale === "it" ? "text-[#000066]" : "text-slate-500"}`}
            >
              IT
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href={`/en`}
              className={`text-xs font-bold ${locale === "en" ? "text-[#000066]" : "text-slate-500"}`}
            >
              EN
            </Link>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="hidden rounded-xl bg-[#000066] px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105 md:inline-block"
          >
            {locale === "it" ? "Contatti" : "Contact"}
          </Link>
        </div>
      </nav>
      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
          <ul className="space-y-1">
            {t.nav.map((link) => {
              const localizedHref = `/${locale}${link.href}`;
              const isActive = pathname === localizedHref;
              return (
                <li key={localizedHref}>
                  <Link
                    href={localizedHref}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
                      isActive ? "bg-[#000066]/10 text-[#000066]" : "text-slate-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Link href="/it" onClick={() => setMenuOpen(false)} className={locale === "it" ? "text-[#000066]" : "text-slate-500"}>
                IT
              </Link>
              <span className="text-slate-300">|</span>
              <Link href="/en" onClick={() => setMenuOpen(false)} className={locale === "en" ? "text-[#000066]" : "text-slate-500"}>
                EN
              </Link>
            </div>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-[#000066] px-4 py-2 text-sm font-bold text-white"
            >
              {locale === "it" ? "Contatti" : "Contact"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
