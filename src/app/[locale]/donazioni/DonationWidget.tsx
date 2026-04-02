"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Lock, ExternalLink } from "lucide-react";

const PRESET_AMOUNTS = [10, 15, 30, 50, 120] as const;
type PresetAmount = (typeof PRESET_AMOUNTS)[number];

const YAPLA_FALLBACK =
  "https://asd-sardinia-united.s2.yapla.com/it/campaign-15376";

const IMPACT_KEY_MAP: Record<PresetAmount, string> = {
  10: "impact10",
  15: "impact15",
  30: "impact30",
  50: "impact50",
  120: "impact120",
};

function buildYaplaUrl(base: string, amount: number): string {
  const url = new URL(base);
  url.searchParams.set("amount", String(amount));
  return url.toString();
}

export function DonationWidget() {
  const t = useTranslations("Donazioni");

  const [amount, setAmount] = useState<PresetAmount>(30);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(false);

  const yaplaBase =
    process.env.NEXT_PUBLIC_YAPLA_DONATE_URL ?? YAPLA_FALLBACK;

  const embedMode = process.env.NEXT_PUBLIC_YAPLA_EMBED === "true";

  const yaplaUrl = useMemo(
    () => buildYaplaUrl(yaplaBase, amount),
    [yaplaBase, amount]
  );

  const impactText = t(IMPACT_KEY_MAP[amount]);

  const amountBtnClass = (active: boolean) =>
    twMerge(
      clsx(
        "rounded-xl px-4 py-3 font-mono text-lg font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
        active
          ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25"
          : "bg-gray-100 text-brand-navy hover:bg-gray-200"
      )
    );

  const handleProceed = () => {
    if (embedMode) {
      setShowIframe(true);
      setIframeLoading(true);
    } else {
      window.open(yaplaUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative z-20 mx-auto max-w-2xl -mt-24 rounded-2xl bg-white p-6 shadow-2xl shadow-brand-navy/15 sm:p-8 md:p-10">
      {/* Amount display */}
      <p className="mb-2 text-center font-display text-sm font-bold uppercase tracking-widest text-gray-400">
        {t("chooseAmount")}
      </p>
      <p className="mb-6 text-center font-mono text-4xl font-bold text-brand-navy sm:text-5xl">
        €{amount}
      </p>

      {/* Amount grid */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {PRESET_AMOUNTS.map((value) => (
          <button
            key={value}
            type="button"
            className={amountBtnClass(amount === value)}
            onClick={() => {
              setAmount(value);
              setShowIframe(false);
            }}
            aria-label={`€${value}`}
            aria-pressed={amount === value}
          >
            €{value}
          </button>
        ))}
      </div>

      {/* Impact message */}
      <div className="mb-8 flex items-start gap-3 rounded-xl border-l-4 border-brand-blue bg-brand-navy/5 px-5 py-4">
        <span className="mt-0.5 shrink-0" aria-hidden>
          💡
        </span>
        <p className="font-body text-sm leading-relaxed text-brand-navy">
          <span className="font-bold">{t("withYourDonation")}</span>{" "}
          {impactText}
        </p>
      </div>

      {/* Yapla CTA or embedded iframe */}
      {!showIframe ? (
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleProceed}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-brown px-6 py-4 font-display text-lg font-bold uppercase tracking-wide text-white transition hover:bg-brand-brown-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer sm:w-auto sm:min-w-[320px]"
          >
            {t("proceedYapla")}
            <ExternalLink size={18} aria-hidden />
          </button>
          <p className="flex items-center gap-1.5 font-body text-xs text-gray-500">
            <Lock size={12} aria-hidden />
            {t("yaplaNote")}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-xl border border-gray-200">
            {iframeLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-blue border-t-transparent" />
                  <span className="font-body text-sm text-gray-500">
                    Caricamento pagamento sicuro...
                  </span>
                </div>
              </div>
            )}
            <iframe
              src={yaplaUrl}
              title="Yapla donation form"
              className="h-[600px] w-full"
              onLoad={() => setIframeLoading(false)}
              allow="payment"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowIframe(false)}
              className="font-body text-sm text-gray-500 underline underline-offset-2 hover:text-brand-navy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              ← {t("changeAmount")}
            </button>
            <a
              href={yaplaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-sm text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              {t("openFullPage")} <ExternalLink size={14} aria-hidden />
            </a>
          </div>
        </div>
      )}

      {/* Payment method chips */}
      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-gray-100 pt-8"
        aria-hidden
      >
        {["Visa", "MC", "PayPal", "SEPA"].map((label) => (
          <div
            key={label}
            className="flex h-10 min-w-[4.5rem] items-center justify-center rounded-lg bg-gray-100 px-3 font-mono text-xs font-bold text-gray-400"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
