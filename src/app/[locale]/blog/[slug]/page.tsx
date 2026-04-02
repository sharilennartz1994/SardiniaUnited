import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type BlogCategoryKey = "activities" | "tournaments" | "donations" | "news";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  categoryKey: BlogCategoryKey;
  excerpt: string;
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: "inaugurazione-campo-elmas",
    title: "Inaugurazione del nuovo campo a Elmas",
    date: "12 Giu 2026",
    categoryKey: "activities",
    excerpt:
      "Un momento storico per la nostra associazione e per l'intera comunità locale.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200",
  },
  {
    slug: "primo-allenamento",
    title: "Il primo allenamento: emozioni e sorrisi",
    date: "15 Giu 2026",
    categoryKey: "activities",
    excerpt:
      "Le prime sessioni sono state un successo. I bambini hanno mostrato entusiasmo e voglia di crescere.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200",
  },
  {
    slug: "intervista-psicologa",
    title: "Intervista: la nostra psicologa racconta",
    date: "20 Giu 2026",
    categoryKey: "news",
    excerpt:
      "La Dott.ssa Eleonora Fois racconta la sua esperienza con i ragazzi del progetto.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200",
  },
  {
    slug: "primo-torneo",
    title: "Risultati del 1° torneo giovanile",
    date: "5 Lug 2026",
    categoryKey: "tournaments",
    excerpt:
      "Un weekend di sport e divertimento che ha coinvolto oltre 200 giovani atleti.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200",
  },
  {
    slug: "partnership-comune",
    title: "Partnership con il Comune di Elmas",
    date: "10 Lug 2026",
    categoryKey: "news",
    excerpt:
      "Una collaborazione importante per il futuro dello sport giovanile nel territorio.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200",
  },
  {
    slug: "report-semestrale",
    title: "Report semestrale: i numeri del progetto",
    date: "15 Lug 2026",
    categoryKey: "donations",
    excerpt:
      "Tutti i dati e i risultati dei primi sei mesi di attività.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200",
  },
];

function categoryLabelKey(
  key: BlogCategoryKey,
): "filterActivities" | "filterTournaments" | "filterDonations" | "filterNews" {
  const map = {
    activities: "filterActivities",
    tournaments: "filterTournaments",
    donations: "filterDonations",
    news: "filterNews",
  } as const;
  return map[key];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("Blog");
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-white px-6 py-24 font-body text-brand-navy">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
            {t("notFoundTitle")}
          </h1>
          <p className="mt-4 text-gray-600">{t("notFoundBody")}</p>
          <Link
            href="/blog"
            className="mt-8 inline-flex font-display text-sm font-bold uppercase tracking-wide text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
          >
            {t("backToBlog")}
          </Link>
        </div>
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-white font-body text-brand-navy">
      <div className="relative h-[400px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-12">
        <nav
          aria-label="Breadcrumb"
          className="font-body text-sm text-gray-600"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/blog"
                className="text-brand-blue hover:text-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              >
                {t("breadcrumbBlog")}
              </Link>
            </li>
            <li aria-hidden className="text-gray-400">
              
            </li>
            <li className="font-medium text-brand-navy">{post.title}</li>
          </ol>
        </nav>

        <div className="mt-8 lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_340px] xl:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-brand-blue/10 font-display text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                {t(categoryLabelKey(post.categoryKey))}
              </span>
              <time
                className="font-mono text-sm text-gray-500"
                dateTime={post.date}
              >
                {post.date}
              </time>
              <span className="text-sm text-gray-600">· {t("author")}</span>
            </div>

            <h1 className="font-display mt-6 text-3xl font-bold uppercase tracking-tight text-brand-navy md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-gray-700">
              <p>{t("articleBody1")}</p>
              <p>{t("articleBody2")}</p>
              <p>{t("articleBody3")}</p>
              <p>{t("articleBody4")}</p>
            </div>

            <div className="mt-14 border-t border-gray-200 pt-10">
              <Link
                href="/blog"
                className="font-display inline-flex text-sm font-bold uppercase tracking-wide text-brand-blue hover:text-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              >
                {t("backToBlog")}
              </Link>
            </div>
          </div>

          <aside className="mt-12 lg:mt-0">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-brown">
              {t("relatedTitle")}
            </h2>
            <ul className="mt-6 space-y-8">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={{
                      pathname: "/blog/[slug]",
                      params: { slug: item.slug },
                    }}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 340px, 100vw"
                      />
                    </div>
                    <p className="font-mono mt-2 text-[10px] text-gray-400">
                      {item.date}
                    </p>
                    <p className="font-display mt-1 text-sm font-bold uppercase leading-snug tracking-tight text-brand-navy transition group-hover:text-brand-blue">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}
