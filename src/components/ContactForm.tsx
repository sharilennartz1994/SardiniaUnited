import { Locale, getContent } from "@/i18n/content";

type ContactFormProps = { locale: Locale };

export function ContactForm({ locale = "en" }: Partial<ContactFormProps>) {
  const t = getContent(locale);

  return (
    <form className="space-y-4 rounded-2xl border border-sky-100 bg-white/95 p-6 shadow-sm" action="#">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-sky-900">
          {t.contactForm.fullName}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-sky-900">
          {t.contactForm.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-sky-900">
          {t.contactForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-sky-700 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-sky-800 hover:to-sky-700"
      >
        {t.contactForm.send}
      </button>
    </form>
  );
}
