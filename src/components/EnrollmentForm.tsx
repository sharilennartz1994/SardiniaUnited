import { Locale, getContent } from "@/i18n/content";

type EnrollmentFormProps = { locale: Locale };

export function EnrollmentForm({ locale = "en" }: Partial<EnrollmentFormProps>) {
  const t = getContent(locale);

  return (
    <form className="space-y-5 rounded-[2rem] border border-[#c3c6d0]/35 bg-white p-7 shadow-sm" action="#">
      <div>
        <label htmlFor="guardian" className="mb-1 block text-sm font-semibold text-[#002444]">
          {t.enrollmentForm.guardian}
        </label>
        <input
          id="guardian"
          name="guardian"
          required
          className="w-full rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="childName" className="mb-1 block text-sm font-semibold text-[#002444]">
            {t.enrollmentForm.childName}
          </label>
          <input
            id="childName"
            name="childName"
            required
            className="w-full rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
          />
        </div>
        <div>
          <label htmlFor="age" className="mb-1 block text-sm font-semibold text-[#002444]">
            {t.enrollmentForm.childAge}
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min={4}
            max={12}
            required
            className="w-full rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
          />
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-semibold text-[#002444]">
          {t.enrollmentForm.familySituation}
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-2xl border-none bg-[#ecf5fb] px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#065eb3]/25"
        />
      </div>
      <button
        type="submit"
        className="rounded-2xl bg-gradient-to-br from-[#002444] to-[#0b3a64] px-8 py-3 text-sm font-bold text-white transition hover:opacity-95"
      >
        {t.enrollmentForm.submit}
      </button>
    </form>
  );
}
