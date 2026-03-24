import { Locale, getContent } from "@/i18n/content";

type NewsletterFormProps = { locale: Locale };

export function NewsletterForm({ locale }: NewsletterFormProps) {
  const t = getContent(locale);

  return (
    <form
      action="#"
      className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
      aria-label="Newsletter form"
    >
      <label htmlFor="newsletterEmail" className="mb-2 block text-sm font-medium text-sky-900">
        {t.newsletter.emailLabel}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletterEmail"
          type="email"
          name="newsletterEmail"
          required
          className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
          placeholder="name@email.com"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-sky-700 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-sky-800 hover:to-sky-700"
        >
          {t.newsletter.button}
        </button>
      </div>
      <p className="mt-3 text-xs text-sky-700">{t.newsletter.privacy}</p>
    </form>
  );
}
