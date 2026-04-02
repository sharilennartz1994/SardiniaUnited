"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { clsx } from "clsx";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams<{ slug?: string }>();

  const toggle = () => {
    const next = locale === "it" ? "en" : "it";
    if (params.slug && typeof params.slug === "string") {
      router.replace(
        { pathname: "/blog/[slug]", params: { slug: params.slug } },
        { locale: next },
      );
      return;
    }
    router.replace(
      pathname as Exclude<typeof pathname, "/blog/[slug]">,
      { locale: next },
    );
  };

  return (
    <button
      onClick={toggle}
      className={clsx(
        "flex items-center gap-1 text-sm font-bold tracking-wide transition-colors cursor-pointer",
        className
      )}
      aria-label={`Switch to ${locale === "it" ? "English" : "Italiano"}`}
    >
      <span className={locale === "it" ? "text-white" : "text-white/50"}>
        IT
      </span>
      <span className="text-white/30">|</span>
      <span className={locale === "en" ? "text-white" : "text-white/50"}>
        EN
      </span>
    </button>
  );
}
