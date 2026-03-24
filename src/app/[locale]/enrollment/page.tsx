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
    <div className="space-y-10">
      <SectionHeader
        eyebrow={t.enrollment.eyebrow}
        title={t.enrollment.title}
        description={t.enrollment.description}
      />

      <section className="rounded-[2rem] border border-[#c3c6d0]/35 bg-white p-7 shadow-sm">
        <h2 className="text-xl font-black text-[#002444]">{t.enrollment.eligibility}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#464651]">
          {t.enrollment.rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      <EnrollmentForm locale={locale} />
    </div>
  );
}
