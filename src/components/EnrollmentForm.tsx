import { Locale, getContent } from "@/i18n/content";

type EnrollmentFormProps = { locale: Locale };

export function EnrollmentForm({ locale = "en" }: Partial<EnrollmentFormProps>) {
  const t = getContent(locale);

  return (
    <form className="space-y-4 rounded-2xl border border-sky-100 bg-white/95 p-6 shadow-sm" action="#">
      <div>
        <label htmlFor="guardian" className="mb-1 block text-sm font-medium text-sky-900">
          {t.enrollmentForm.guardian}
        </label>
        <input
          id="guardian"
          name="guardian"
          required
          className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="childName" className="mb-1 block text-sm font-medium text-sky-900">
            {t.enrollmentForm.childName}
          </label>
          <input
            id="childName"
            name="childName"
            required
            className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="age" className="mb-1 block text-sm font-medium text-sky-900">
            {t.enrollmentForm.childAge}
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min={4}
            max={12}
            required
            className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-medium text-sky-900">
          {t.enrollmentForm.familySituation}
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2 text-sm outline-none ring-sky-300 transition focus:border-sky-400 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-sky-700 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-sky-800 hover:to-sky-700"
      >
        {t.enrollmentForm.submit}
      </button>
    </form>
  );
}
