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
    title: locale === "it" ? "News e Impatto" : "News and Impact",
    description:
      locale === "it"
        ? "Aggiornamenti, storie e risultati del progetto Sardinia United."
        : "Read updates, stories, and impact highlights from Sardinia United."
  };
}

export default async function NewsPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={t.news.eyebrow}
        title={t.news.title}
        description={t.news.description}
      />
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.posts.map((post) => (
          <Card key={post.title} title={post.title}>
            <p className="text-sm text-[#464651]">{post.excerpt}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#204873]">
              {post.date}
            </p>
          </Card>
        ))}
      </section>
    </div>
  );
}
