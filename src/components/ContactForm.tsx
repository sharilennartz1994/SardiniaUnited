import { Locale, getContent } from "@/i18n/content";

type ContactFormProps = { locale: Locale };

export function ContactForm({ locale = "en" }: Partial<ContactFormProps>) {
  const t = getContent(locale);

  return (
    <form className="space-y-5" action="#">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-[#002444]">
          {t.contactForm.fullName}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#002444]">
          {t.contactForm.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-[#002444]">
          {t.contactForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
        />
      </div>
      <button
        type="submit"
        className="rounded-2xl bg-gradient-to-br from-[#002444] to-[#0b3a64] px-8 py-3 text-sm font-bold text-white transition hover:opacity-95"
      >
        {t.contactForm.send}
      </button>
    </form>
  );
}
