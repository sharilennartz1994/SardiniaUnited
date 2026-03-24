import Link from "next/link";
import { Locale, getContent } from "@/i18n/content";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const t = getContent(locale);

  return (
    <footer className="mt-20 bg-[#030568] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12">
        <div className="text-2xl font-black tracking-tight">SARDINIA UNITED</div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-300 md:text-sm">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white">
            Cookie Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Sitemap
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href={`/${locale}/contact`} className="rounded-full border border-white/20 p-2.5 hover:bg-white hover:text-[#030568]">
            ✉
          </Link>
          <Link href={`/${locale}/support-us`} className="rounded-full border border-white/20 p-2.5 hover:bg-white hover:text-[#030568]">
            ❤
          </Link>
          <Link href={`/${locale}/news`} className="rounded-full border border-white/20 p-2.5 hover:bg-white hover:text-[#030568]">
            ↗
          </Link>
        </div>
        <div className="w-full border-t border-white/10 pt-8 text-center text-xs uppercase tracking-widest text-slate-400">
          © {new Date().getFullYear()} Sardinia United. {t.footerText}
        </div>
      </div>
    </footer>
  );
}
