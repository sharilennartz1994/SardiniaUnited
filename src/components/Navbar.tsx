"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/chi-siamo" as const, label: t("chiSiamo") },
    { href: "/calendario" as const, label: t("activities") },
    { href: "/blog" as const, label: t("blog") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-brand-navy transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-brand-navy/50" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-[1400px] mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tighter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          {t("brand")}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-display font-bold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <LanguageSwitcher className="hidden md:flex" />
          <Link
            href="/donazioni"
            className="hidden md:inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-2 rounded font-bold hover:bg-brand-blue-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          >
            {t("donate")}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-0 bg-brand-navy z-40 flex flex-col transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-xl font-display font-bold text-white uppercase tracking-tighter">
            {t("brand")}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-white p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            aria-label={t("closeMenu")}
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 pt-12 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-display font-bold text-white uppercase tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8">
            <LanguageSwitcher />
          </div>

          <Link
            href="/donazioni"
            onClick={() => setOpen(false)}
            className="mt-auto mb-12 flex items-center justify-center gap-2 bg-brand-blue text-white py-4 rounded font-display font-bold text-xl uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            {t("donate")} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
