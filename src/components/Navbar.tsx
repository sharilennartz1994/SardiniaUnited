"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { Locale, getContent } from "@/i18n/content";

type NavbarProps = { locale: Locale };

export function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const t = getContent(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <BrandLogo variant="negative" href={`/${locale}`} />
        <ul className="hidden items-center gap-5 md:flex">
          {t.nav.map((link) => {
            const localizedHref = `/${locale}${link.href}`;
            const isActive = pathname === localizedHref;
            return (
              <li key={localizedHref}>
                <Link
                  href={localizedHref}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                    isActive
                      ? "bg-sky-100 text-sky-900"
                      : "text-sky-700 hover:bg-sky-50 hover:text-sky-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={`/it`}
              className={`text-xs font-bold ${locale === "it" ? "text-sky-900" : "text-sky-500"}`}
            >
              IT
            </Link>
            <span className="text-sky-300">|</span>
            <Link
              href={`/en`}
              className={`text-xs font-bold ${locale === "en" ? "text-sky-900" : "text-sky-500"}`}
            >
              EN
            </Link>
          </div>
          <Link
            href={`/${locale}#support`}
            className="rounded-full bg-gradient-to-r from-sky-700 to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-sky-800 hover:to-sky-700"
          >
            {t.ctaDonate}
          </Link>
        </div>
      </nav>
    </header>
  );
}
