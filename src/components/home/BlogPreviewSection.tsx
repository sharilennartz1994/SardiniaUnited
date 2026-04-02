import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PenLine, ArrowRight } from "lucide-react";

export function BlogPreviewSection() {
  const t = useTranslations("Home.Blog");

  return (
    <section className="bg-white px-6 py-20 md:px-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 block font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-blue sm:text-sm">
            {t("tag")}
          </span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-brand-navy md:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center md:p-12">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <PenLine className="size-8 text-brand-blue" aria-hidden />
          </div>

          <p className="font-body text-base leading-relaxed text-gray-600 md:text-lg">
            {t("comingSoonBody")}
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-brand-blue transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
          >
            {t("viewAll")} <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
