"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Landmark, Copy, Check, Info } from "lucide-react";

const IBAN_DISPLAY = "IT96 P032 6822 3000 5238 2373 360";
const IBAN_COPY = "IT96P032682230005238237360";
const BIC = "SELBIT2BXXX";
const BENEFICIARY =
  'ASSOCIAZIONE SPORTIVA DILETTANTISTICA "SARDINIA UNITED"';

export function DonationWidget() {
  const t = useTranslations("Donazioni");
  const [ibanCopied, setIbanCopied] = useState(false);

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN_COPY);
      setIbanCopied(true);
      window.setTimeout(() => setIbanCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative z-20 mx-auto max-w-2xl -mt-24 rounded-2xl bg-white p-6 shadow-2xl shadow-brand-navy/15 sm:p-8 md:p-10">
      <div className="mb-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-4 text-brand-navy">
        <Info className="mt-0.5 size-5 shrink-0 text-amber-700" aria-hidden />
        <div className="space-y-2 font-body text-sm leading-relaxed text-brand-navy/90">
          <p className="font-display font-bold uppercase tracking-wide text-amber-900">
            {t("placeholderBadge")}
          </p>
          <p>{t("placeholderIntro")}</p>
          <p>{t("placeholderSoon")}</p>
        </div>
      </div>

      <a
        href={`mailto:${t("emailAddress")}?subject=${encodeURIComponent(t("emailSubject"))}`}
        className="mb-10 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-brown px-6 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition hover:bg-brand-brown-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
      >
        <Mail size={20} aria-hidden />
        {t("emailCta")}
      </a>

      <div className="border-t border-gray-100 pt-8">
        <div className="mb-4 flex items-center gap-2">
          <Landmark className="size-5 text-brand-blue" aria-hidden />
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-brand-navy">
            {t("bankTitle")}
          </h2>
        </div>
        <p className="mb-6 font-body text-sm leading-relaxed text-gray-600">
          {t("bankIntro")}
        </p>

        <dl className="space-y-4 font-body text-sm">
          <div>
            <dt className="font-display text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {t("bankBeneficiary")}
            </dt>
            <dd className="mt-1 font-medium text-brand-navy">{BENEFICIARY}</dd>
            <dd className="mt-1 text-gray-600">{t("bankAddress")}</dd>
          </div>
          <div>
            <dt className="font-display text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {t("bankIban")}
            </dt>
            <dd className="mt-1 flex flex-wrap items-center gap-2">
              <span className="font-mono text-base font-semibold tracking-wide text-brand-navy">
                {IBAN_DISPLAY}
              </span>
              <button
                type="button"
                onClick={copyIban}
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wide text-brand-navy transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {ibanCopied ? (
                  <>
                    <Check size={14} className="text-green-600" aria-hidden />
                    {t("copied")}
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden />
                    {t("copyIban")}
                  </>
                )}
              </button>
            </dd>
          </div>
          <div>
            <dt className="font-display text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {t("bankBic")}
            </dt>
            <dd className="mt-1 font-mono font-semibold text-brand-navy">{BIC}</dd>
          </div>
          <div>
            <dt className="font-display text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {t("bankReference")}
            </dt>
            <dd className="mt-1 text-gray-700">{t("bankReferenceHint")}</dd>
          </div>
        </dl>
        <p className="mt-6 font-body text-xs text-gray-500">{t("bankSwiftHint")}</p>
      </div>
    </div>
  );
}
