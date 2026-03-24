import { Locale, getContent } from "@/i18n/content";

type NewsletterFormProps = { locale: Locale };

export function NewsletterForm({ locale }: NewsletterFormProps) {
  const t = getContent(locale);

  return (
    <form action="#" className="rounded-2xl bg-white p-6 shadow-sm" aria-label="Newsletter form">
      <label htmlFor="newsletterEmail" className="mb-2 block text-sm font-semibold text-[#002444]">
        {t.newsletter.emailLabel}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletterEmail"
          type="email"
          name="newsletterEmail"
          required
          className="w-full rounded-xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
          placeholder="name@email.com"
        />
        <button
          type="submit"
          className="rounded-xl bg-[#002444] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-95"
        >
          {t.newsletter.button}
        </button>
      </div>
      <p className="mt-3 text-xs text-[#464651]">{t.newsletter.privacy}</p>
    </form>
  );
}
