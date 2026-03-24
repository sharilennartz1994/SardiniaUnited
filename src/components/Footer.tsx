import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Locale, getContent } from "@/i18n/content";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const t = getContent(locale);

  return (
    <footer className="mt-20 border-t border-sky-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-sky-900 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <BrandLogo variant="negative" showText={false} href={`/${locale}`} />
          <p>
            © {new Date().getFullYear()} Sardinia United. {t.footerText}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={`/${locale}/contact`} className="hover:text-sky-700">
            {locale === "it" ? "Contatti" : "Contact"}
          </Link>
          <Link href={`/${locale}/support-us`} className="hover:text-sky-700">
            {locale === "it" ? "Sostienici" : "Support Us"}
          </Link>
          <Link href={`/${locale}/news`} className="hover:text-sky-700">
            News
          </Link>
        </div>
      </div>
    </footer>
  );
}
