import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-brand-navy w-full border-t border-white/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-8 py-16">
        <div>
          <span className="text-xl font-display font-bold text-white uppercase tracking-tighter mb-4 block">
            SARDINIA UNITED
          </span>
          <p className="text-sm text-slate-400 font-body leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">
            {t("navigation")}
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/chi-siamo"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {t("chiSiamo")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {t("progetto")}
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {t("trasparenza")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">
            {t("legal")}
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {t("privacy")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {t("terms")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {t("cookies")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">
            {t("social")}
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.instagram.com/sardiniaunited?igsh=cHpiM3ZvNGViNGl6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-8 py-8 border-t border-white/5 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm text-center md:text-left space-y-1">
          <p>{t("copyright")}</p>
          <p>{t("address")} · {t("cf")}</p>
        </div>
        <div className="text-slate-500 text-sm text-center md:text-right space-y-1">
          <p>
            <a href={`mailto:${t("email")}`} className="hover:text-white transition-colors">
              {t("email")}
            </a>
          </p>
          <p>{t("pec")}</p>
        </div>
      </div>
    </footer>
  );
}
