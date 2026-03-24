import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { getContent, isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "it" ? "Attivita" : "Activities",
    description:
      locale === "it"
        ? "Allenamenti, tornei, laboratori e supporto psicologico."
        : "Weekly training, tournaments, workshops, and psychological support."
  };
}

export default async function ActivitiesPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow={t.activitiesPage.eyebrow}
        title={t.activitiesPage.title}
        description={t.activitiesPage.description}
      />
      <section className="grid gap-4 md:grid-cols-2">
        {t.activities.map((activity) => (
          <Card key={activity.title} title={activity.title} description={activity.description} />
        ))}
      </section>
    </div>
  );
}
