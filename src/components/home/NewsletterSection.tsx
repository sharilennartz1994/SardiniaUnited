"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export function NewsletterSection() {
  const t = useTranslations("Home.Newsletter");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white px-6 md:px-24 pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-brand-navy p-8 md:p-16 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-md">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              {t("title")}
            </h3>
            <p className="text-white/60 text-sm md:text-base">{t("body")}</p>
          </div>

          {submitted ? (
            <p className="text-brand-blue font-bold text-lg">{t("success")}</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                required
                placeholder={t("placeholder")}
                className="bg-white/10 border border-white/10 rounded px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue min-w-0 sm:min-w-[320px] focus-visible:ring-2 focus-visible:ring-brand-blue"
              />
              <button
                type="submit"
                className="bg-brand-blue text-white px-8 py-4 rounded font-bold hover:bg-brand-blue-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                {t("submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
