import { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { SectionHeader } from "@/components/SectionHeader";
import { getContent, isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Iscrizione" : "Enrollment",
    description:
      locale === "it"
        ? "Richiedi l'iscrizione gratuita al programma futsal di Sardinia United."
        : "Apply to the Sardinia United free futsal program."
  };
}

export default async function EnrollmentPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={t.enrollment.eyebrow}
        title={t.enrollment.title}
        description={t.enrollment.description}
      />

      <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-sky-900">{t.enrollment.eligibility}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-sky-700">
          {t.enrollment.rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      <EnrollmentForm locale={locale} />
    </div>
  );
}
