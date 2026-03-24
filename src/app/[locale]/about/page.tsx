import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { getContent, isLocale } from "@/i18n/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getContent(locale);
  return { title: t.about.title, description: t.about.description };
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow={t.about.eyebrow}
        title={t.about.missionTitle}
        description={t.about.missionDescription}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {t.about.values.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </section>

      <section>
        <SectionHeader title={t.about.howTitle} description={t.about.howDescription} />
      </section>

      <section>
        <SectionHeader title={t.about.teamTitle} description={t.about.teamDescription} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.map((person) => (
            <Card key={person.name} title={person.name} description={person.role} />
          ))}
        </div>
      </section>
    </div>
  );
}
